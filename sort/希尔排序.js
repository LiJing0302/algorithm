
const { genRandomArr } = require('./randomArr')

/** 希尔排序 */
const shellSort = (arr) => {
    for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        console.log('gap 步长', gap)
        // 从 gap 个元素开始，循环次数小于 arr.length,这层循环代码上较难理解，从逻辑推代码，应该是分组后，组内进行插入排序，在代码实现上，这里从 gap 个元素开始，i 每次加一相当于交替组进行插入排序；
        for (let i = gap; i < arr.length; i++) {
            for (let j = i; j >= 0; j = j - gap) {
                if (arr[j] < arr[j - 1]) {
                    const temp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                }
            }
        }
    }
}

/** 希尔排序中使用改进版插入排序 */
const shellSort1 = (arr) => {
    for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < arr.length; i++) {
            const temp = arr[i]
            let j;
            for (j = i; j > 0 && arr[j - 1] > temp; j--) {
                arr[j] = arr[j - 1]
            }
            arr[j] = temp
        }
    }
}

// 使用示例
const arr = genRandomArr()
console.log(arr, arr.length)
shellSort1(arr);
console.log(arr);  // 输出排序后的数组