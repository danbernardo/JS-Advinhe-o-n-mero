

// Projetinho 18 anos 
 const maisIdButton = document.getElementById('maisId');
 const menosButton = document.getElementById('menosId');
 const textoButton = document.getElementById('textoId');

 let idade= 18;

 function atualizarIdade(operacao){
     if (operacao == 'mais'){
         idade++;
     } else if (operacao == 'menos'){
         idade--;
     }
     verificarIdade();
}

 function verificarIdade() {
     const textoElement = document.getElementById('textoId');
     if (idade <= 17) {
         textoElement.textContent = "Você não pode entrar nesse site.";
         maisIdButton.style.display = 'none';
         menosButton.style.display = 'none';
     } else {
         textoElement.textContent = "Bem vindo ao site, aproveite.";
         maisIdButton.style.display = 'none';
         menosButton.style.display = 'none';

     }
}

 maisIdButton.addEventListener('click', () => atualizarIdade('mais'));
 menosButton.addEventListener('click', () => atualizarIdade('menos'));


