// INPUT & BTN
let nomeInput = document.querySelector('.nome-input');
let chilometriInput = document.querySelector('.chilometri-input');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

// 
let titoloInput = document.querySelector('.titolo-input');
const biglietto = document.querySelector('.biglietto');

// DROPDOWN
let choice = document.querySelector('.choice');


btn1.addEventListener('click', function(){
  biglietto.classList.remove('d-none');

  let carrozza = Math.floor(Math.random() * 10) + 1;
  console.log(carrozza);
  document.getElementById('carrozza').innerHTML = carrozza;

  let codice = Math.floor(Math.random() * 99999) + 1;
  console.log(codice);
  document.getElementById('codice').innerHTML = codice;

  console.log(nomeInput.value);
  titoloInput.innerHTML = nomeInput.value;

  console.log(chilometriInput.value);
  
  if(choice.value === 'junior'){
    let chilometriTotali = Number(chilometriInput.value) * 0.21;
    let prezzoJunior = chilometriTotali - (chilometriTotali * 20 / 100);
    document.getElementById('sconto').innerHTML = 'Sconto Junior';
    document.getElementById('costo').innerHTML = prezzoJunior.toFixed(2);
    console.log(prezzoJunior.toFixed(2));
    console.log(choice.value);
  }

  else if(choice.value === 'senior'){
    let chilometriTotali = Number(chilometriInput.value) * 0.21;
    let prezzoSenior = chilometriTotali - (chilometriTotali * 40 / 100);
    document.getElementById('sconto').innerHTML = 'Sconto Senior';
    document.getElementById('costo').innerHTML = prezzoSenior.toFixed(2);
    console.log(prezzoSenior.toFixed(2));
    console.log(choice.value);
  }

  else{
    let chilometriTotali = Number(chilometriInput.value) * 0.21;
    let prezzoAdults = chilometriTotali;
    document.getElementById('sconto').innerHTML = 'Nessuna';
    document.getElementById('costo').innerHTML = prezzoAdults.toFixed(2);
    console.log(prezzoAdults.toFixed(2));
    console.log(choice.value);
  }
})

btn2.addEventListener('click', function(){
  biglietto.classList.add('d-none');
})

