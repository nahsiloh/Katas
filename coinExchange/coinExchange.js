function coinExchange(amount, coins) {
  const coinsSorted = coins.sort();

  let possibleCombinations = 0;

  for (let i = 0; i < coins.length; i++) {
    let remaining = amount;

    while (remaining > coins[i]) {
      remaining -= coins[i];
      if (remaining <= 0) {
        break;
      }
    }

    possibleCombinations += 1;
  }

  return possibleCombinations;
}

module.exports = coinExchange;
