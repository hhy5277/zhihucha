$(document).on('click', '.number-pag > .button', function () {
    let $btn = $(this)
    let $input = $btn.parent().children('input')
    let num = Number($input.val())
    if ($btn.hasClass('add')) {
        $input.val(num + 1)
    } else if (num >= 1) {
        $input.val(num - 1)
    }
})

$(document).on('click','.modal-custom',function(e){
    $(this).addClass('hide')
})