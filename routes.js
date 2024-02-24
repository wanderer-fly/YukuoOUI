const fs = require('fs')
const multer = require('multer')
const path = require('path')

module.exports = function (app, version) {
    // 文件上传
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
        fs.readdir('uploads/', function (err, files) {
            if (err) {
                return res.status(500).send('Error getting files')
            }
            res.render('filemanager', { files: files })
        })
    })

    // 文件上传
    app.post('/filemanager/upload', upload.single('file'), function (req, res) {
        res.redirect('/')
    })

    // 文件下载
    app.get('/filemanager/download/:file', function (req, res) {
        const file = `./uploads/${req.params.file}`
        res.download(file)
    })

    // 设置页面路由
    app.get("/settings", (req, res) => {
        res.render('settings', {
            gitVersion: version
        })
    })

    // 默认路由
    app.get("/", (req, res) => {
        res.render('index', {
            gitVersion: version
        })
    })
}
