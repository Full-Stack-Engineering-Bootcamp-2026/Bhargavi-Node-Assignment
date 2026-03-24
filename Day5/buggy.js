// buggy.js (fixed)

//Loop condition was wrong (i <= prices.length)
//This caused an extra iteration where prices[i] became undefined
//Use i < prices.length or we can also use i<=prices.length-1

function calculateTotal(prices) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }
  return total;
}

module.exports = calculateTotal;