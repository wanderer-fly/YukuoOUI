const express = require('express')
const app = express()
const path = require('path');
const port = 8964
const Sortable = require('sortablejs') // SortableJS

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render('index', { windowCount: 0 })
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})