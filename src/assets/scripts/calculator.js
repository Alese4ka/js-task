let wrapper = document.querySelector('.calculator__wrapper');
let resultNumbers = document.getElementById('calculator__result');
let clear = document.querySelector('.calculator__clear');
let deleteLastN = document.querySelector('.calculator__delete');
let equally = document.getElementById('calculator__equally');

clear.addEventListener('click', () => clearResult());
equally.addEventListener('click', () => calcNumber());
deleteLastN.addEventListener('click', () => deleteLastNumber());

wrapper.onclick = function(event) {
  let number = event.target.closest('button'); 
  if (!number) return; 
  if (!wrapper.contains(number)) return; 
  if (resultNumbers.value === '') {
    if (number.value !== '/' && number.value !== '+' && number.value !== '*' && number.value !== '.') {
      resultNumbers.value = '';
      resultNumbers.value = resultNumbers.value + number.value;
    } else if (number.value === '.') {
      resultNumbers.value = '';
      resultNumbers.value = 0 + resultNumbers.value;
      resultNumbers.value += number.value;
    }  
  } else if (resultNumbers.value !== '' && resultNumbers.value.indexOf('.') >= 0 && resultNumbers.value.includes('+') || resultNumbers.value.includes('-') || resultNumbers.value.includes('*') || resultNumbers.value.includes('/')) {
    resultNumbers.value = resultNumbers.value + number.value;
  } else if(number.value === '.' && resultNumbers.value.indexOf('.') >= 0){
    return;
  } else {
    resultNumbers.value = resultNumbers.value + number.value;
  }
}

function clearResult() {
  resultNumbers.value = '';
}

function deleteLastNumber() {
  let clearResult = resultNumbers.value.substr(0, resultNumbers.value.length - 1);
  resultNumbers.value =  clearResult;
}

function calcNumber() {
  let lastResult = eval(resultNumbers.value).toFixed(5);
  resultNumbers.value = lastResult;
}

 wrapper.onkeyup = e => {
  if (e.key == 'Enter' || e.key == 'NumEnter') {
    setAns();
  } else if (e.target.nodeName == 'INPUT') {
    if (resultNumbers.value !== '/' && resultNumbers.value !== '+' && resultNumbers.value !== '*' && resultNumbers.value !== '.') {
      typeTo();
    } else if (resultNumbers.value === '.') {
      resultNumbers.value = 0 + resultNumbers.value;
      /*if (resultNumbers.value === '.' && resultNumbers.value.includes('.')) {
        return;
      }*/
    } else {
      resultNumbers.value = '';
    }
  }
}

let typeTo = () =>{
  if (resultNumbers.value == ''){
    resultNumbers.value;
  } else if (resultNumbers.value.length <= 23){
    resultNumbers.value = resultNumbers.value
  }
}

let setAns = () => {
  let writeNumber = resultNumbers.value;
  let lastResult = eval(writeNumber).toFixed(5);
  resultNumbers.value = lastResult;
}