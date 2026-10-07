function sortBinaryArray(arr) {

    let left = 0
    let right = arr.length-1

    while(left < right) {
        if (arr[left] === 0) {
            left++
        } else if (arr[right] === 1) {
            right--
        }

        if (arr[left] > arr[right]) {

            const tmp = arr[left]
            arr[left] = arr[right]
            arr[right] = tmp

            left++
        }
    }

    return arr
}

const value = sortBinaryArray([1,0,1,0,0])

console.log(value)