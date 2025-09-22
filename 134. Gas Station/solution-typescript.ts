function canCompleteCircuit(gas: number[], cost: number[]): number {
  if (gas.length < cost.length) {
    return -1
  }

  let tank: number = 0
  let total: number = 0
  let start: number = 0
  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i]
    total += gas[i] - cost[i]
    if (tank < 0) {
      start = i + 1
      tank = 0
    }
  }

  if (total < 0) {
    return -1
  } else {
    return start
  }

};