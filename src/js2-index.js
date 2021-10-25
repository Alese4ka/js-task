let wrapper = document.querySelector('.calculator__wrapper');
let resultNumbers = document.getElementById('calculator__result');
let clear = document.querySelector('.calculator__clear');
let deleteLastN = document.querySelector('.calculator__delete');
let equally = document.getElementById('calculator__equally');
let btn = document.querySelectorAll('.btn');

clear.addEventListener('click', () => clearResult());
equally.addEventListener('click', () => calcNumber());
deleteLastN.addEventListener('click', () => deleteLastNumber());

let a = '';
let b = '';

wrapper.onclick = function(event) {
  
  let number = event.target.closest('button'); 
 
  if (!number) return; 
  if (!wrapper.contains(number)) return; 
  resultNumbers.value = '';
  resultNumbers.value = a + number.value;
  a += number.value;
  console.log(typeof a)
}

function clearResult() {
  resultNumbers.value = '';
  a = '';
}

function deleteLastNumber(){
  let c = resultNumbers.value.substring(0, resultNumbers.value.length - 1);
  resultNumbers.value =  c
}

function calcNumber() {
  let w = eval(a);
  resultNumbers.value = w;
  a = '';
}

wrapper.addEventListener('keydown', (e) => {
  if(e.code > '45' || e.code < '65') {
    console.log('eval')

    }
    else {
      console.log('!')
    }
  })