/*// Case Sensitive => reconhece letras MAIUSCULAS e minusculas (e diferencia elas)
// thiago / Thiago 

// document selector
O SELECTOR SELCIONA O COMPONENTE ENTAO VC PODE PEGAR O VALOR SE ELA TIVER OU COLOCAR
// por tag: document.getElementsByTagName('h3')
// por classe: document.getElementsByClassName('.nomedaclasse')
// por nome: document.getElementsByName('email')
// por ID: document.getElementById('#idDoelemento')
// por seletor: document.querySelector('id/classe/nome')
*/ 

// Variaveis:
//   var nome = 'thiago' //jeito mais antigo
//   let nome = 'thiago' //jeito mais atual - variavel que vai sofrer mudanças
//   const nome = 'thiago' //jeito mais atual - variavel 'fixa'

/*let digiteAlgo = document.querySelector('#digiteAlgo')

function validaCampo (){                           /**fazendo css no javascript */
   /* if(digiteAlgo.value.length < 5){
    digiteAlgo.style.color = 'red'
    digiteAlgo.style.border = '1px solid red'
    }else{                                                   //exemplo
        digiteAlgo.style.color = 'green'
        digiteAlgo.style.border = '1px solid green'
    }
}*/



let modal = document.getElementById('myModal')
let btn = document.getElementById('myBtn')
let span = document.getElementsByClassName('close')[0]  /*pega só o primeiro elemento do vetor(1 que achar)*/ 


btn.onclick = function(){
    modal.style.display = 'block';

}

span.onclick = function(){
    modal.style.display = 'none';
}

window.onclick = function(event){
if(event.target == modal){
    modal.style.display = 'none';
}
}



