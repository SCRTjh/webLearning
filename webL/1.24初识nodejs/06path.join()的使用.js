const path = require('path')

//注意：../会抵消前面的路径

const pathStr = path.join('/a', '/b/c', '../', './d', 'e')
console.log(pathStr); // \a\b\d\e

fs.readFile(path.join(__dirname, '1.txt'), 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('失败' + err.message);
    }
    console.log('成功' + dataStr);
})