const flatten = (input) => {
  return input.reduce((accu, curr) => Array.isArray(curr) ? accu.concat(flatten(curr)) : accu.concat(curr), []);
};

module.exports = flatten;
