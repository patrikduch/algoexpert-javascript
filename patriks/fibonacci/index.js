function getFibonacci(n) {
    if (n == 1) {
        return 0
    }

    if (n == 2) {
        return 1
    }

    return getFibonacci(n-1) + getFibonacci(n-2)
}

const result = getFibonacci(5)

console.log(result)