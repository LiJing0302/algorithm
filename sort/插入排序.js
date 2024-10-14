const arr = [8, 2, 5, 9, 4];
/**
 * 插入排序
 * 时间复杂度 O(n^2) 空间复杂度O(1)
 *
 * 插入排序的关键思想是取未排序区间中的元素，在已排序区间中找到合适的插入位置将其插入，并保证已排序区间数据一直有序。其核心在于找到当前元素在已排序部分的正确位置。
 */
const sort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
};
const sort1 = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j;
    for (j = i; j > 0 && arr[j - 1] > temp; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = temp;
  }
  return arr;
};

const sort2 = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
};
const sort3 = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = temp;
  }
  return arr;
};
const sort4 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = temp;
  }
  return arr;
};

console.log(sort4(arr));
