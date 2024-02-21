// INPUT & BTN
let nomeInput = document.querySelector('.nome-input');
let chilometriInput = document.querySelector('.chilometri-input');
let btn1 = document.querySelector('.btn1');

// DROPDOWN
let dropdown = document.querySelector('.dropdown');
let junior = document.querySelector('.junior');
let adults = document.querySelector('.adult');
let senior = document.querySelector('.senior');


btn1.addEventListener('click', function(){
  console.log(nomeInput.value);
  
  if(dropdown.value === junior.value){
    let chilometriTotali = Number(chilometriInput.value) * 0.21;
    let prezzoJunior = chilometriTotali - (chilometriTotali * 20 / 100);
    console.log(prezzoJunior.toFixed(2));
    console.log(dropdown.value);
    console.log(junior.value);
  }
  else if(dropdown.value === senior.value){
    let chilometriTotali = Number(chilometriInput.value) * 0.21;
    let prezzoSenior = chilometriTotali - (chilometriTotali * 40 / 100);
    console.log(prezzoSenior.toFixed(2));
  }
})


btn1.addEventListener('click', function(){
  console.log(chilometriInput.value);
})
