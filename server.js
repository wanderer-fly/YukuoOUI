const express = require('express')
const path = require('path')
const fs = require('fs')
const git = require('git-rev-sync')

const port = 8964
const app = express()
const version = git.long()

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

require('./routes')(app, version)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
