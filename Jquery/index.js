$(function(){
    $('#azul').click(function(){
        $('p')
        .css("color", "blue")
        .fadeOut()
        .delay(3000)
        .fadeIn();
    });

    $('#vermelho').click(function(){
        $('p').css("color", "red");
        $('#mensagem')
        .text("Cor alterada com sucesso")
        .css({color:'red', border:'1px solid red'})
        .delay(3000)
        .addClass('green')

        $('button').removeClass('red');
    });
})