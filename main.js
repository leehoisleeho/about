let str = `/**大家好，你们可以叫我leeHo,我现在在学前端技术，这个网站是我的学习笔记，我会把学到知识记录在这里，方便我回顾。
我从前在一个国企当网络管理员，俗称网管，后来我辞职了，因为那并不是我喜欢的工作或者生活，在那里每天上班打卡，今天做着和昨天一样的事情，我厌倦了这样的工作，我想换一个自己喜欢的工作。所以我选择了前端程序员。
下面我写一下我的简历
现在是准备工作**/
#output{
    display:block;
    width: 50%;
}


/** 先创建一个容器放我的简历 **/
.output_1{
    border-radius: 10px;
    width: 500px;
    box-shadow:0px 0px 9px #999999;
}

#input{
    transform:rotateY(35deg)translateX(80px);
    height: 85vh; 
}

#output{
    display: flex;
    justify-content: center;
}

/** 简历里面先放入我的一张生活照 **/
.output_2{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid rgb(19, 104, 214);
    background-image: url(./img/1.jpg);
    background-size: cover;
}
/** 让头像在容器里面居中 **/
.output_1{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   color:#4a4a4a;
}
/** 我的名字 **/
.name{
    display:block;
}

/** 我的英文名 **/
.name{
    display:block;
}

/** 我的名字 **/
._name_1{
    display:block;
}

/** 我的毕业学校 **/
._shcool{
    display:block;
}

/** 我的博客 **/
._blog{
    display:block;
}

/** 我的Github **/
.github{
    display:block;
}

/** 我的邮箱 **/
.email{
    display:block;
}


/** 接下来我调整一下他们的间距 **/
.output_1>div{
    margin-top:10px;
}
.output_1{
    padding-bottom:10px;
}

/** 改变一下字体大小 **/
.output_1>div{
    font-size:15px;
    font-weight: 700;
}
`
let str2 = `大家好，你们可以叫我leeHo,我现在在学前端技术，这个网站是我的学习笔记，我会把学到知识记录在这里，方便我回顾。
我从前在一个国企当网络管理员，俗称信息技术，后来我辞职了，因为那并不是我喜欢的工作或生活，在那里每天上班打卡，今天做着和昨天一样的事情，我厌倦了这样的工作，我想换一个自己喜欢的工作。所以我选择了前端程序员。
下面我写一下我的简历
现在是准备工作
#output{
    display:block;
    width: 50%;
}

先创建一个容器放我的简历
.output_1{
    border-radius: 10px;
    width: 500px;
    box-shadow:0px 0px 9px #999999;
}

#input{
    transform:rotateY(35deg)translateX(100px);
    height: 80vh; 
}

#output{
    display: flex;
    justify-content: center;
}

简历里面先放入我的一张生活照 
.output_2{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid rgb(19, 104, 214);
    background-image: url(./img/1.jpg);
    background-size: cover;
}
让头像在容器里面居中
.output_1{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   color:#4a4a4a;
}
我的名字 
.name{
    display:block;
}


我的英文名字 
._name_1{
    display:block;
}

我的毕业学校 
._shcool{
    display:block;
}

我的博客 
._blog{
    display:block;
}

我的Github
.github{
    display:block;
}

我的邮箱
.email{
    display:block;
}


接下来我调整一下他们的间距
.output_1>div{
    margin-top:10px;
}
.output_1{
    padding-bottom:10px;
}

改变一下字体大小
.output_1>div{
    font-size:15px;
    font-weight: 700;
}
`

let style = document.getElementById("style")
let input = document.getElementById("input")
let n = -1
function outPut() {
    setTimeout(() => {
        n = n + 1
        if (n <= str.length) {
            style.innerText = str.substring(0, n)
            input.innerText = str2.substring(0, n)
            input.scrollTo(0, 99999)
            outPut()
        } else {
            document.getElementById("input").style.display = "none"
            document.getElementById("output").style.width = "100%"
        }
    }, 90);
}
outPut()


