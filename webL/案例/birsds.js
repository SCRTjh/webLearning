// 获取游戏开始标签
let start = document.getElementById('new');
// 背景标签
let contaner = document.getElementById('contaner');
// 小鸟标签
let bird = document.getElementById('bird');
// 分数显示
let po = document.getElementById('po');
// 用于判断游戏是否正在进行
let mask = document.getElementById('mask');
let suc = document.getElementById('suc');
let result = document.getElementById('results');
let flying = true;

// 初始化对象


var birds = {
    stepx: 52,
    stepy: 0,
    x: bird.offsetLeft, //距离左边的位置
    y: bird.offsetTop //距离上边的位置
}

//背景对象
var sky = {
    x: 0
}

var bg = setInterval(function () {
    sky.x -= 2;
    // 背景图距离x轴的位置
    contaner.style.backgroundPositionX = sky.x + "px";

    // 小鸟向下移动
    birds.stepy += 1;
    birds.y += birds.stepy;
    if (birds.stepy >= 10) {
        birds.stepy = -10;
        birds.y += birds.stepy;
    }
    bird.style.top = birds.y + 'px';
}, 30);

// 记分数
let count = 0;


// 游戏开始
start.onclick = function () {


    start.style.display = "none";
    po.style.display = 'block';
    //游戏进行时显示分数
    po.innerHTML = count;
    clearInterval(bg); //清楚小鸟的自动飞
    birds.stepy = 0;

    var pl = setInterval(function () {
        // 判断游戏是否在进行
        if (flying) {
            // 背景移动
            sky.x -= 5;
            // 背景图距离x轴的位置
            contaner.style.backgroundPositionX = sky.x + "px";
            // 小鸟下落
            birds.y += birds.stepy;
            birds.x = birds.stepx;
            birds.stepy += 1;
            //给小鸟加单位
            bird.style.top = birds.y + 'px';
            bird.style.left = birds.x + 'px';
            if (birds.y >= 560 || birds.y <= 0) {
                flying = false;
                mask.style.display = 'block';
                suc.style.display = 'block';
                po.style.display = 'none';
                clearInterval(pl);
            }
        }

    }, 30)

    //点击向上
    contaner.onclick = function () {
        birds.stepy = -10;
    }

    function createClo(x) {
        var col = {

        }
        col.x = x;
        //上柱高度
        col.uheight = Math.ceil(Math.random() * 200) + 50;
        // 下柱子的高度
        col.dheight = 600 - 150 - col.uheight;
        // 生成柱子
        let ucol = document.createElement('div');
        let dcol = document.createElement('div')
        ucol.style.height = col.uheight + 'px';
        ucol.style.width = '52px';
        dcol.style.height = col.dheight + 'px';
        dcol.style.width = '52px';
        // 设置位置
        ucol.style.position = 'absolute';
        ucol.style.left = col.x + 'px';
        ucol.style.background = 'url(1215/pipe2.png) no-repeat center';
        dcol.style.position = 'absolute';
        dcol.style.left = col.x + 'px';
        dcol.style.background = 'url(1215/pipe1.png) no-repeat center';
        // 上柱子离顶部的距离
        ucol.style.top = '0px';
        dcol.style.bottom = '0px';

        contaner.appendChild(ucol);
        contaner.appendChild(dcol);

        setInterval(function () {
            if (flying) {
                col.x -= 5;
                ucol.style.left = col.x + 'px';
                dcol.style.left = col.x + 'px';
                if (col.x <= -52) {
                    col.x = 1400;
                }
            }

            //判断分数
            if (col.x >= 0 && birds.x >= col.x + 52) {
                count++;
                po.innerHTML = count;
                result.innerHTML = count;
            }

            var ucheck = birds.x + 30 > col.x && birds.x < col.x + 52 && birds.y <= col.uheight;
            var dcheck = birds.x + 30 > col.x && birds.x < col.x + 52 && birds.y + 30 <= col.dheight + 150;

            // 判断是否撞柱子
            if (ucheck || dcheck) {
                flying = false;
                //显示遮罩
                mask.style.display = 'block';
                // 显示游戏结束面板
                result.style.display = 'block';
                // 将游戏正在进行时的分数隐藏
                po.style.display = 'none';
                // 显示最终分数
                clearInterval(pl);

            }

        }, 30);
    }





    createClo(300);

}
