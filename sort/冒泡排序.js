const arr = [8, 2, 5, 9, 4]
/**
 * 冒泡排序
 * 时间复杂度 O(n^2) 空间复杂度O(1)
 */
const sort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            console.log(j)
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }

        }
    }
}

sort(arr)

console.log(arr)