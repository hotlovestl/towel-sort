
module.exports = function towelSort (matrix) {
  let resArr = [];
  let len = 0;
    if (matrix == undefined) {
      return [];
    }
	for (let i = 0; i < matrix.length; i++) {
        len = matrix[i].length
        for (let j = 0; j < len; j++) {
            if (i % 2 == 0) {
                resArr.push(matrix[i][j]);
            }
            else {
                resArr.push(matrix[i].pop());
            }
        }
    }
    return resArr;
}
