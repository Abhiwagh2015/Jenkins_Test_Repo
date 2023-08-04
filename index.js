const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log("This is node js app")
  console.log("node js app is running")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

