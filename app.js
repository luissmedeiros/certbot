const express = require('express')
const app = express()

const port = 80;

app.get('/.well-known/acme-challenge/SUehxNttlfuAZHEnZYD6JC25xrN2t4igvodgo75BzM0', (req, res) => {
    res.send('SUehxNttlfuAZHEnZYD6JC25xrN2t4igvodgo75BzM0.y9h3wYHNKk_wb-5Zpcg_L5LpVReqOw3OyIUxeFyKmA0')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })