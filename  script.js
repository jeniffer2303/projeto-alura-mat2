document.addEventListener('DOMContentLoaded',function(){
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        DocumentTimeline.body.style.fontsize = '${tamanhoAtualFonte}rem'

    })

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        DocumentTimeline.body.style.fontsize = '${tamanhoAtualFonte}rem'

})


})