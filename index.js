const express = require('express')
const path = require('path')
const fs = require('fs')
const multer  = require('multer')
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

//設定
app.get("/settings", (req, res) => {
    res.render('settings', {
        gitVersion: version
    })
})

//文件管理
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

app.get("/filemanager", (req, res) => {
    fs.readdir('uploads/', function(err, files) {
        if (err) {
          return res.status(500).send('Error getting files')
        }
        res.render('filemanager', { files: files })
    })
})

//上傳
app.post('/filemanager/upload', upload.single('file'), function(req, res) {
    res.redirect('/')
})

//下載
app.get('/filemanager/download/:file', function(req, res) {
    const file = `./uploads/${req.params.file}`
    res.download(file)
})

const uploadDir = './uploads'
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir)
}


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})