// 注册页面js
{
    // 获取验证码冷却
    const codeBtn = $('.get-code-btn')
    const codeBtnText = codeBtn.text()
    let codeCoolingTime = 0
    let codeTimer;
    const toCooling = function () {
        
        if (codeCoolingTime <= 0) { //冷却结束
            codeBtn.text(codeBtnText)
            codeBtn.prop('disabled', false)
            clearInterval(codeTimer)
        } else {
            codeBtn.text(codeCoolingTime + 's')
            codeBtn.prop('disabled', true)
        }
        codeCoolingTime--
    }
    codeBtn.click(function () {
        codeCoolingTime = 30
        //开始冷却
        toCooling()
        codeTimer = setInterval(function () {
            toCooling()
        }, 1000)
        $.toast("验证码已发送");
    })
}