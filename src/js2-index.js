//let operand = document.querySelectorAll('.calculator__operand');
let wrapper = document.querySelector('.calculator__wrapper');
let resultNumbers = document.getElementById('calculator__result');
let clear = document.querySelector('.calculator__clear');
let deleteLastN = document.querySelector('.calculator__delete');
//let multiply = document.querySelector('.calculator__multiply');
let equally = document.getElementById('calculator__equally');
let btn = document.querySelectorAll('.btn');

clear.addEventListener('click', () => clearResult());
equally.addEventListener('click', () => calc());
deleteLastN.addEventListener('click', () => deleteLastNumber());



let array = [];
wrapper.onclick = function(event) {
  
  let number = event.target.closest('button'); // (1)
 
  if (!number) return; // (2)
  if (!wrapper.contains(number)) return; // (3)

  if (resultNumbers.value == 0){
    if(number.value !== '*' && number.value !== '/' && number.value !== '+' && number.value !== '-'){
      resultNumbers.value = number.value;
      array.push(Number(resultNumbers.value))
    }
  }
  else {
    resultNumbers.value += number.value;
    array.push(number.value)
  }
console.log(array)

};

function clearResult() {
  resultNumbers.value = 0;
  array = []
}

function deleteLastNumber(){
  array.pop();
  resultNumbers.value = array;//убрать запятую
}

function calc() {
    let w;
    let a = Number(array[0]);
    let c = array[1];
    let b = Number(array[2]);
      switch (c){
        case '+':
          w = a+b;
          break;
        case '-':
           w = a-b;
           break;
        case '*':
          w = a*b;
          break;
        case '/':
          if(b != 0) {
            w = a/b;  
          }
          else{
            w = 'error';
            return w;
          }
          break;
        }
        resultNumbers.value = w;
        array = [w]
  }

