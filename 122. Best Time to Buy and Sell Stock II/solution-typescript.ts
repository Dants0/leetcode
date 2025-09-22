function maxProfit(prices: number[]): number {

  let acc: number = 0

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      acc += prices[i] - prices[i - 1]
    }
  }
  return acc
};

const profit = [7, 1, 5, 3, 6, 4]

maxProfit(profit)