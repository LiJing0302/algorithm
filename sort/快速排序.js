const arr = [8, 2, 5, 9, 4];
/**
 * 快速排序
 *  时间复杂度 O(nlogn)
 * 空间复杂度 O(logn)
 *  分治的思想
 *
 */

const sort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const ref = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < ref) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return sort(left).concat(ref, sort(right));
};

console.log(sort(arr));
