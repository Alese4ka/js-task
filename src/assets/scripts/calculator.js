let wrapper = document.querySelector('.calculator__wrapper');
let resultNumbers = document.getElementById('calculator__result');
let clear = document.querySelector('.calculator__clear');
let deleteLastN = document.querySelector('.calculator__delete');
let equally = document.getElementById('calculator__equally');

clear.addEventListener('click', () => clearResult());
equally.addEventListener('click', () => calcNumber());
deleteLastN.addEventListener('click', () => deleteLastNumber());

let allResult = '';

wrapper.onclick = function(event) {
  let number = event.target.closest('button'); 
  if (!number) return; 
  if (!wrapper.contains(number)) return; 
  resultNumbers.value = '';
  resultNumbers.value = allResult + number.value;
  allResult += number.value;
}

function clearResult() {
  resultNumbers.value = '';
  allResult = '';
}

function deleteLastNumber() {
  let clearResult = resultNumbers.value.substr(0, resultNumbers.value.length - 1);
  resultNumbers.value =  clearResult;
  allResult = '';
}

function calcNumber() {
  let lastResult = eval(allResult);
  resultNumbers.value = lastResult;
  allResult = lastResult;
}

 wrapper.onkeyup = e => {
  if(e.key == "Enter" || e.key == "NumEnter"){
    setAns();
  }
}

let typeTo = () =>{
  if (resultNumbers.value == ""){
    resultNumbers.value = allResult;
  } 
  else if (resultNumbers.value.length <= 23){
    resultNumbers.value = resultNumbers.value + allResult;
  }
}

let setAns = () => {
  let writeNumber = resultNumbers.value;
  let lastResult = eval(writeNumber);
  resultNumbers.value = lastResult;
}