const arr = [8, 2, 5, 9, 4]
/**
 * 插入排序
 * 时间复杂度 O(n^2) 空间复杂度O(1)
 */
const sort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j >= 0; j--) {
            if (arr[j] < arr[j - 1]) {
                const temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp
            }
        }
    }
}

/** 改进版插入排序 */
const sort1 = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        const temp = arr[i]
        let j;
        for (j = i; j > 0 && arr[j - 1] > temp; j--) {
            arr[j] = arr[j - 1]
        }
        arr[j] = temp
    }
}

sort1(arr)

console.log(arr)