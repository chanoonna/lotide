const findKeyByValue = (inputObj, valToSearch) => {
  for (const [ prop, val ] of Object.entries(inputObj)) {
    if (val === valToSearch) {
      return prop;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
