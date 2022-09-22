'use strict'

const express = require('express')
const app = express()

const { sumPrimes } = require('./primes')

app.get('/sum-primes', (req, res) => {
    const { limit } = req.query
    console.time('sumPrimes')
    const sum = sumPrimes(+limit)
    console.timeEnd('sumPrimes')
    res.send(`The sum for limit ${limit} is ${sum}`)
})

app.listen(8888, () => {
    console.log('Listening with even-loop blocking');
})