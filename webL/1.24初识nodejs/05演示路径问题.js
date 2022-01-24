const fs = require('fs')

//出现路径拼接问题是因为./和../
//提供绝对路径
// fs.readFile('./1.txt', 'utf8', function (err, dataStr) {
//     if (err) {
//         return console.log('失败' + err.message);
//     }
//     console.log('成功' + dataStr);
// })

//移植性差，不利于维护
// fs.readFile('D:\\Users\\webLearning\\webL\\1.24初识nodejs\\1.txt', 'utf8', function (err, dataStr) {
//     if (err) {
//         return console.log('失败' + err.message);
//     }
//     console.log('成功' + dataStr);
// })

//__dirname 表示当前文件所处的目录
fs.readFile(__dirname + '1.txt', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('失败' + err.message);
    }
    console.log('成功' + dataStr);
})