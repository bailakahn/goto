import { maxProfit } from "./recommendation";

describe("Recommendation algorithm", () => {
  const maxProfit1 = maxProfit([3, 8]);
  const maxProfit2 = maxProfit([5, 40]);
  const maxProfit3 = maxProfit([3, 2]);
  const maxProfit4 = maxProfit([3, 3]);
  const maxProfit5 = maxProfit([100, 50]);

  // Test render
  test("Test max profit", () => {
    expect(maxProfit1).toEqual(5);
    expect(maxProfit2).toEqual(35);
    expect(maxProfit3).toEqual(0);
    expect(maxProfit4).toEqual(0);
  });

  test("Test failure", () => {
    expect(maxProfit5).not.toEqual(4);
  });
});
