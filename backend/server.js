import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'

const app = express()
app.use(cors())

app.get('/', async (req, res) => {
  const { q = '' } = req.query

  const response = await fetch(
    `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${q}`
  )
  const json = await response.json()
  res.send(json)
})

app.listen(8000, () => console.log('Server listening at port 8000'))
