let str = `/**大家好，你们可以叫我leeHo,我现在在学前端技术，这个网站是我的学习笔记，我会把学到知识记录在这里，方便我回顾。
我从前在一个国企当网络管理员，俗称网管，后来我辞职了，因为那并不是我喜欢的工作或者生活，在那里每天上班打卡，今天做着和昨天一样的事情，我厌倦了这样的工作，我想换一个自己喜欢的工作。所以我选择了前端程序员。
下面我写一下我的简历
1.放一张我自己的生活照 **/

2.我的名字
3.我的英文名
4.我的学历
5.我的毕业学习
6.我的工作经历
7.我现在掌握的前端技术
8.我的邮箱
9.我的微博
10.我的Github
`
李涵屹

let style = document.getElementById("style")
let input  = document.getElementById("input")

let n = -1
function outPut(){
    setTimeout(() => {
        n = n + 1
        if(n<=str.length){
            html.innerhtml = str.substring(0,n)
            outPut()
        }else{
    
        }    
    },100);
}
outPut()

