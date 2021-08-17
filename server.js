const express = require('express')
const app = express()

const path = require('path')

// include and initialize the rollbar library with your access token
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: '5d9af6741c5b4857a55eaaa2a5369b8b',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar

app.use(express.json())

const port = process.env.PORT || 4040

app.use(express.static('public'))
app.get('/', (req, res) => {
    rollbar.log('thingy')
    res.sendFile(path.join(__dirname, './Public/index.html'))
})


app.listen(port, () => console.log(`Running away with port ${port}!!`))