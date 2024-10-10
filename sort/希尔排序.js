const arr = [8, 2, 5, 9, 4];
/**
 * 希尔排序
 */
const shellSort = (arr) => {
  for (
    let gap = Math.floor(arr.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let i = gap; i < arr.length; i++) {
      const temp = arr[i];
      let j = i - gap;
      while (j >= 0 && arr[j] > temp) {
        arr[j + gap] = arr[j];
        j -= gap;
      }
      arr[j + gap] = temp;
    }
  }
  return arr;
};

console.log(shellSort(arr));
