!function () {
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')

        let n = 0
        let id = setInterval(() => {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n >= code.length) {
                window.clearInterval(id)
                fn && fn.call()
            }
        }, 10)
    }
    let code = `
    /*
     * 首先，需要准备皮卡丘的皮
     */
    .preview{
        background: #FEE433 ;
    }
    /*
     * 接下来，画皮卡丘的鼻子
     */
    .nose{
          width: 0px;
          height: 0px;
          border:12px solid;
          border-color: black transparent transparent;
          border-radius: 11px;
          position: absolute;
          left: 50%;
          top: 28px;
          margin-left: -12px;
    }
    /*
     * 接下来，画皮卡丘的眼睛
     */
    .eye{
        width: 49px;
        height: 49px;
        background: #2E2E2E;
        position: absolute;
        border: 2px solid #000000;
        border-radius: 50%;
    }
    /*
     * 然会是瞳孔
     */
    .eye::before{
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        background:white;
        position: absolute;
        border-radius:50%;
        left: 6px;
        top:-1px;
        border: 2px solid #000;
    }
    /*
     * 左眼在左边
     */
    .eye.left{
        right: 50%;
        margin-right: 90px;
      }
      /*
     * 右眼在右边
     */
      .eye.right{
        left: 50%;
        margin-left: 90px;
      }
      /*
       * 再画个皮卡丘的脸
       */
      .face{
        width: 68px;
        height: 68px;
        background: #FC0D1C;
        border: 2px solid black;
        border-radius: 50%;
        position: absolute;
        top: 85px;
      }
      .face.left{
        right: 50%;
        margin-right: 116px;
      }
      .face.right{
        left: 50%;
        margin-left: 116px;
      }
      /*
       * 上嘴唇
       */
      .upperLip{
          height: 25px;
          width: 80px;
          border: 2px solid black;
          position: absolute;
          top: 50px;
          background: #FDE348;
          
      }
      .upperLip.left{
          right: 50%;
          border-bottom-left-radius: 40px 25px;
          border-top: none;
          border-right: none;
          transform: rotate(-20deg);
      }
      .upperLip.right{
        left: 50%;
        border-bottom-right-radius: 40px 25px;
        border-top: none;
        border-left: none;
        transform: rotate(20deg);
      }
      /*
       * 上嘴唇
       */
      .lowerLip-wrapper{
        bottom: 0;
        position: absolute;
        left: 50%;
        margin-left: -150px;
        height: 110px;
        overflow: hidden;
        width: 300px;     
    
      }
      /*
       * 还要有个小舌头
       */
      .lowerLip{
        height: 3500px;
        width: 300px;
        background: #990513;
        border-radius: 200px/2000px;
        border: 2px solid black;
        position: absolute;
        bottom: 0;
        overflow: hidden;
    }   
      .lowerLip::after{
          content: '';
          height:100px ;
          width:100px ;
          background: #FC4A62;
          border-radius:50px;
          position: absolute;
          left: 50%;
          margin-left: -50px;
          bottom: -20px;
    
      }
      /*
       * ok，一只皮卡丘就画好了
       */
    `
    writeCode('', code)

}.call()