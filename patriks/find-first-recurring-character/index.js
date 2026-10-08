function findFirstRecurringCharacter(str) {
    const seen = {}
    let i = 0

    while (i <= str.length -1) {

        if (seen[str[i]]) {
            return str[i]
        }

        seen[str[i]] = true
        i++
    }

    return ""
}

const result = findFirstRecurringCharacter("anna")

console.log(result)
