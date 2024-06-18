

 const minNum = 1;
 const maxNum = 100;
 const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

 console.log(`Número gerado: ${answer}`);

 const enviarId = document.getElementById('enviarId');
 const inputField = document.querySelector('input[name="Nome"]');
 const feedback = document.getElementById('feedback');

 const refreshButton = document.getElementById('refreshButton');
 refreshButton.addEventListener('click', function(){
     location.reload();
 });

 let attempts = 0;
 let running = true; 


 enviarId.addEventListener('click', function() {
     if (!running) return; 
     const guess = Number(inputField.value);
     console.log(`Tentativa do usuário: ${guess}`);
     attempts++; 

     if (isNaN(guess) || guess < minNum || guess > maxNum ){
         feedback.textContent = `Por favor, insira um número válido entre ${minNum} e ${maxNum}`;
     } else if (guess === answer) {
         feedback.textContent = `Parabéns! Você acertou o número ${answer} em ${attempts} tentativas`;
         running = false;
     } else if (guess < answer) {
         feedback.textContent = 'Tente um número maior';
     } else {
         feedback.textContent = 'Tente um número menor';
     }
     inputField.value = '';
     inputField.focus();
 });

 refreshButton.addEventListener('click', function(){
     location.reload()
 });


