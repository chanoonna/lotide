const letterPositions = (str) => {
  const returnObj = {};
  if (str.length === 0) {
    return returnObj;
  }

  for (let i = 0; i < str.length; i++) {
    if (returnObj[str[i]]) {
      returnObj[str[i]].push(i);
    } else if (!returnObj[str[i]] && str[i] !== ' ') {
      returnObj[str[i]] = [ i ];
    }
  }

  return returnObj;
};

module.exports = letterPositions;
