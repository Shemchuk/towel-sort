
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (typeof matrix === 'undefined') {
      return [];
  }

  let result = [];

  matrix.forEach((item, i) => {
    if (i % 2 === 1) {
        result = result.concat(item.reverse());
    } else {
        result = result.concat(item);
    }
  });

  return result;
}
