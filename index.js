const express = require('express')
const path = require('path');
const git = require('git-rev-sync')
const Sortable = require('sortablejs') // SortableJS

const port = 8964
const app = express()
const version = git.long()

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render('index', { 
        gitVersion: version
    })
})

app.get("/settings", (req, res) => {
    res.render('settings', {
        gitVersion: version
    })
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})