const arr = [8, 2, 5, 9, 4]
/**
 * 选择排序
 * 时间复杂度 O(n^2) 空间复杂度O(1)
 */
const sort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                const temp = arr[j];
                arr[j] = arr[minIndex]
                arr[minIndex] = temp
            }
        }
    }
}

sort(arr)

console.log(arr)