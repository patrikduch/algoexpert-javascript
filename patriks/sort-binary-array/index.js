function sortBinaryArray(arr) {
    let i = 0
    let countZeros = 0
    while (i < arr.length) {        
        if (arr[i] === 0) {
            countZeros++
        }
        
        i++
    }

    const result = []

    let j = 0

    while (j < arr.length) {
        if(j < countZeros) {

            result[j] = 0

        } else {
            result[j] = 1
        }

        j++
    }

    return result
}


const value = sortBinaryArray([0,1,0,1,1])

console.log(value)
