'use strict'

function isprime(number) {
    for (let i = 2; i < Math.sqrt(number); i++) {
        if ((number % i) === 0) return false
    }
    return true
}

function genPrimes(limit) {
    const range = [...Array(limit + 1).keys()].slice(2)
    return range.filter(n => isprime(n))
}

function sumPrimes(limet) {
    return genPrimes(limet).reduce((a, b) => a + b, 0)
}

module.exports = {
    isprime,
    genPrimes,
    sumPrimes
}