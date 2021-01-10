const without = (target, itemsToRemove) => {
  let newArray = [];

  for (let elem of target) {
    if (!itemsToRemove.includes(elem)) {
      newArray.push(elem);
    }
  }

  return newArray;
};

module.exports = without;
