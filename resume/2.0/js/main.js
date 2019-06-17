// 把code写到#code和style标签里
function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    domCode.innerHTML = prefix || ''
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight      //有多长拉多长
        if (n >= code.length) {
            window.clearInterval(id)
            fn && fn.call()
        }
    }, 10)
}

function writeMarkdown(markdown,fn){
    let domPaper = document.querySelector('#paper > .content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = (markdown.substring(0, n))
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn && fn.call()
        }
    }, 10)
}
var css1 = `/*
    *面试官你好，我是祝梓豪
    * 只用文字作做自我介绍太单调了
    * 我就用代码来介绍吧
    * 首先准备一些样式
    */

*{
    transition: all 1s;
  }
  html{
    background: #eee;
  }
  #code{
    border: 1px solid #aaa;
    padding: 16px;
  }
  /* 我需要一点代码高亮 */
  .token.selector{ color: #690; }
  .token.property{ color: #905; }

  /* 加一个呼吸效果 */
  #code{
    animation: breath 0.5s infinite alternate-reverse;
}
 /* 现在正式开始 */

 /* 我需要一张白纸 */
#code{
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%;
}
#paper{
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    padding；16px;
}
#paper > .content{
    background: white;
    height:100%;
    width:100%;

}
`
var css2 = `
       
    `
var md = `
    #自我介绍
    我叫祝梓豪 出生于1997年8月 
`

writeCode('', css1, () => {
    creatPaper(() => {
        writeCode(css1, css2, () => {
            writeMarkdown(md)
        })
    })
})


function creatPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
    var content = document.createElement('div')
    content.className = 'content'
    paper.appendChild(content)
    fn&&fn.call()
}
