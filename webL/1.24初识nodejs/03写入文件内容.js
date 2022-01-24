const fs = require('fs')


fs.writeFile("./1.txt", 'abc', function (err) {
    //如果文件写入成功，err为null
    //如果文件写入失败，err返回错误对象
    // console.log(err)
    if (err) {
        return console.log('文件写入失败' + err.message);
    }
    console.log('文件写入成功!');
})