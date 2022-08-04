const recommendation = {
  trading: (data) => {
    let profit = maxProfit(data.map(({ price }) => price));
    return data.map((el) => ({
      ...el,
      recommendation:
        profit > el.price ? "BUY" : profit < el.price ? "SELL" : "HOLD",
    }));
  },
  investing: (data) => {
    let profit = maxProfit(data.map(({ price }) => price));
    return data.map((el) => ({
      ...el,
      recommendation:
        profit > el.price ? "HOLD" : profit < el.price ? "BUY" : "SELL",
    }));
  },
};

export function maxProfit(prices) {
  let globalProfit = 0;
  let minBuyPrice = Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (minBuyPrice > prices[i]) {
      minBuyPrice = prices[i];
    }

    const currentProfit = prices[i] - minBuyPrice;

    if (currentProfit > globalProfit) {
      globalProfit = currentProfit;
    }
  }

  return globalProfit;
}

export default recommendation;
