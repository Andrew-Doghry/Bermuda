const path = require("path")
const notFound = (req, res) => {
    const ext = path.extname(req.path)
    switch (ext) {
        case ".txt":
            res.end("not found ")
            break;
        case ".json":
            res.json({
                "message": "no content"
            })
            break;
        case ".png":
        case ".jpg":
        case ".svg":
            res.end("no images found")
            break;
        case ".css":
        case ".js":
            res.end("no files found")
            break;
        case "":
        case ".html":
            res.sendFile(path.join(__dirname, "../views/404.html"))
            break;
    }



}


module.exports = notFound