import { Classes } from "../../styles";
import { TextInput, Button, Select } from "../../components/atoms";
import { Table } from "../../components/molecules";
import useStocks from "../../hooks/useStocks";

function Home() {
  const stocks = useStocks();

  return (
    <div style={Classes.container}>
      <div style={Classes.box}>
        <h3>Stock Recommendation Wizard</h3>
        <TextInput
          id="search-stock"
          onChange={(e) => stocks.actions.setSearch(e.target.value)}
          style={Classes.input}
          value={stocks.search}
          placeholder="Enter Stock"
        />

        <Button
          text="Search"
          onClick={() => stocks.actions.searchStock()}
          style={Classes.button}
          className="primary ml"
          disabled={!stocks.search}
        />
      </div>

      {stocks.error && (
        <div i="arrow" className="error mt">
          {stocks.error}
        </div>
      )}

      {!!Object.keys(stocks.currentStock).length ? (
        <div className="mt-50">
          <Select
            className="ml"
            style={Classes.select}
            options={[
              {
                label: "Recommendation type",
                value: "",
                disabled: true,
              },
              { label: "Trading", value: "trading" },
              { label: "Investing", value: "investing" },
            ]}
            placeholder="d"
            onChange={(e) => {
              stocks.actions.setRecommendationType(e.target.value);
              stocks.actions.onChangeRecommendationType(e.target.value);
            }}
            value={stocks.recomendationType}
          />
          <Table
            styles={{ table: Classes.table }}
            columns={[
              { title: "Price", dataIndex: "price" },
              { title: "Social Media Count", dataIndex: "count" },
              {
                title: "Recomendation",
                render: (record) => <div>{record.recommendation}</div>,
              },
            ]}
            data={stocks.currentStock}
          />
        </div>
      ) : (
        <div>
          <h3>Nothing to show ...</h3>
        </div>
      )}
    </div>
  );
}

export default Home;
