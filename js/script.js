// INPUT & BTN
let nomeInput = document.querySelector('.nome-input');
let chilometriInput = document.querySelector('.chilometri-input');
let btn1 = document.querySelector('.btn1');

// DROPDOWN
let choice = document.querySelector('.choice');


btn1.addEventListener('click', function(){
  console.log(nomeInput.value);
  console.log(chilometriInput.value);
  
  if(choice.value === 'junior'){
    let chilometriTotali = Number(chilometriInput.value) * 0.21;
    let prezzoJunior = chilometriTotali - (chilometriTotali * 20 / 100);
    console.log(prezzoJunior.toFixed(2));
    console.log(choice.value);
  }

  else if(choice.value === 'senior'){
    let chilometriTotali = Number(chilometriInput.value) * 0.21;
    let prezzoSenior = chilometriTotali - (chilometriTotali * 40 / 100);
    console.log(prezzoSenior.toFixed(2));
    console.log(choice.value);
  }

  else{
    let chilometriTotali = Number(chilometriInput.value) * 0.21;
    let prezzoAdults = chilometriTotali;
    console.log(prezzoAdults.toFixed(2));
    console.log(choice.value);
  }
})

