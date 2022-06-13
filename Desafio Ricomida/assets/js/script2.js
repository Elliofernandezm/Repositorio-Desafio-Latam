

$(document).ready(function () {
    $("h4").dblclick(function () {
        $(this).css({
            "color": "red",
        })
    })

    $(".titlerecet").click(function () {
        $(".textcard").toggle();
    })
    $("#btncorreo").click(function () {
        const correo = prompt("ingrese su correo")
        alert ("Tu correo fue enviado")
    })
    
})