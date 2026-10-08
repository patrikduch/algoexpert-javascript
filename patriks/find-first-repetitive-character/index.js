'use strict'

function findFirstRepetitiveCharacter(input) {

    let i = 0
    const dict = {}

    while(i < input.length) {
        if (dict[input[i]]) {
            dict[input[i]] = dict[input[i]] + 1
        } else {
            dict[input[i]] = 1
        }

        i++
    }

    for (let j = 0; j < input.length; j++) {       
        if (dict[input[j]] > 1) {
                return input[j]
        } 
    }

    return ""
}

const result = findFirstRepetitiveCharacter("anna")
console.log(result)

