/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  let result = [];

  if (!firstList.length || !secondList.length) {
    return result;
  }

  let i = 0;
  let j = 0;

  while (firstList[i] && secondList[j]) {
    // if first block fits in second block
    if (
      firstList[i][0] >= secondList[j][0] &&
      firstList[i][1] <= secondList[j][1]
    ) {
      result.push(firstList[i]);
      i++;
    }
    // if second block fits in first block
    else if (
      secondList[j][0] >= firstList[i][0] &&
      secondList[j][1] <= firstList[i][1]
    ) {
      result.push(secondList[j]);
      j++;
    }
    // if end of first block >= start of second block there is a intersection
    else if (
      firstList[i][1] >= secondList[j][0] &&
      firstList[i][0] < secondList[j][0]
    ) {
      result.push([secondList[j][0], firstList[i][1]]);
      i++;
    }
    // if end of second block >= start of first block there is a intersection
    else if (
      secondList[j][1] >= firstList[i][0] &&
      secondList[j][0] < firstList[i][0]
    ) {
      result.push([firstList[i][0], secondList[j][1]]);
      j++;
    }
    // not intersection
    // if first end < second start, increment first pointer
    else if (firstList[i][0] < secondList[j][0]) {
      i++;
    }
    // else increment second pointer
    else {
      j++;
    }
  }
  return result;
};

module.exports = {
  func: intervalIntersection,
};
