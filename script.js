document.addEventListener('DOMContentLoaded', function(){
 const aumentaFonteBotao = document.getElementById('aumentar-fonte')
 const diminuiFonteBotao = document.getElementById('diminuir-fonte')
    

let tamanhoAtualFonte = 1;

aumentaFonteBotao.addEventListener('clitk', function(){
  tamanhoAtualFonte += 0.1;
  document.body.fontSize = '${tamanhoAtualFonte} rem'
})
diminuiFonteBotao.addEventListener('clitk', function(){
  tamanhoAtualFonte -= 0.1;
  document.body.fontSize = '${tamanhoAtualFonte} rem'
})

})