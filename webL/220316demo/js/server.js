const { response } = require('express');
const express = require('express');

const app = express();

app.get('/json-server', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const data = {
        name: "json"
    }
    let str = JSON.stringify(data);
    res.send(str);
});

app.post('/json-server', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

    res.send("hello post");
});

app.get('/ie', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    //延时
    setTimeout(() => {
        res.send('delay ie')
    }, 3000);
    // res.send('hello ie');
})

app.all('/jquery-ajax', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const n = { name: 'tjh' };
    res.send(JSON.stringify(n));
})

app.all('/axios', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    const n = { name: 'tjh' };
    res.send(JSON.stringify(n));
    // res.send('hello axios');
})

app.all('/check-username', (req, res) => {
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    };
    let str = JSON.stringify(data)

    res.end(`handle(${str})`);
})

app.all('/0328', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

    const data = {
        "success": "1",
        "result": [
            {
                "src": "img/leishen.jpg"
            },
            {
                "src": "img/kewei.jpg"
            },
            {
                "src": "img/heimao.jpg"
            },
            {
                "src": "img/edu.jpg"
            }
        ]
    };
    res.send(data);
})

app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中...");
})