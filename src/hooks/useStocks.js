import { useState } from "react";
import _request from "../api";
import recommendation from "../helpers/recommendation";
import { useStore } from "../store";

function useStocks() {
  // app local store
  const {
    stocks: { currentStock },
    actions: { setCurrentStock },
  } = useStore();

  const [stocks, setStocks] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [recomendationType, setRecommendationType] = useState("trading");

  async function getStocks() {
    try {
      const { stocks: data } = await _request({ endpoint: "api/stocks" });
      setStocks(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function searchStock() {
    setCurrentStock({});
    if (!search) {
      setError("Name cannot be empty!!!");
    }
    try {
      const { stock: data } = await _request({
        endpoint: `api/stock/${search}`,
      });
      setCurrentStock(recommendation.trading(data.data));
    } catch (err) {
      console.log(err);
      setError(`Could not find stock "${search}"`);
    }
  }

  function onChangeRecommendationType(newRecommendationType) {
    setCurrentStock(recommendation[newRecommendationType](currentStock));
  }

  return {
    // data
    stocks,
    currentStock,
    search,
    error,
    recomendationType,

    // functions
    actions: {
      getStocks,
      setStocks,
      searchStock,
      setSearch,
      setRecommendationType,
      onChangeRecommendationType,
    },
  };
}

export default useStocks;
