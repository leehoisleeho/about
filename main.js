let str = `/**大家好，你们可以叫我leeHo,我现在在学前端技术，这个网站是我的学习笔记，我会把学到知识记录在这里，方便我回顾。
我从前在一个国企当网络管理员，俗称网管，后来我辞职了，因为那并不是我喜欢的工作或者生活，在那里每天上班打卡，今天做着和昨天一样的事情，我厌倦了这样的工作，我想换一个自己喜欢的工作。所以我选择了前端程序员。
下面我写一下我的简历
现在是准备工作**/
#output{
    display:block;
    width: 50%;
    border:1px solid red;
}
#input{
    // transform:rotateY(43deg)translateZ(20px);
    height: 100vh;
}
/** 先放一张我的生活照 **/
/** 创建一个容器放我的照片 **/
.output_1{
    border: 7px solid #3e7fee;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    background-image: url(./img/1.jpg);
    background-size: cover;
}

#output{
    display: flex;
    height: 100vh;
    justify-content: center;
}
`

let style = document.getElementById("style")
console.log(style)
let input  = document.getElementById("input")

let n = -1
function outPut(){
    setTimeout(() => {
        n = n + 1
        if(n<=str.length){
            style.innerText = str.substring(0,n)
            input.innerText = str.substring(0,n)
            outPut()
        }else{
    
        }    
    },10);
}
outPut()

