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

 /*wrapper.onkeyup = e => {
  if(e.key == "0" || e.key == "Num0"){
    typeTo(0);
  } else if(e.key == "1" || e.key == "Num1"){
    typeTo(1);
  } else if (e.key == "2" || e.key == "Num2") {
    typeTo(2);
  } else if (e.key == "3" || e.key == "Num3") {
    typeTo(3);
  } else if (e.key == "4" || e.key == "Num4") {
    typeTo(4);
  } else if (e.key == "5" || e.key == "Num5") {
    typeTo(5);
  } else if (e.key == "6" || e.key == "Num6") {
    typeTo(6);
  } else if (e.key == "7" || e.key == "Num7") {
    typeTo(7);
  } else if (e.key == "8" || e.key == "Num8") {
    typeTo(8);
  } else if (e.key == "9" || e.key == "Num9") {
    typeTo(9);
  } else if (e.key == "+" || e.key == "Num+") {
    typeTo("+");
  } else if (e.key == "-" || e.key == "Num-") {
    typeTo("-");
  } else if (e.key == "*" || e.key == "Num*") {
    typeTo("*");
  } else if (e.key == "/" || e.key == "Num/") {
    typeTo("/");
  } else if (e.key == "." || e.key == "Num.") {
    typeTo(".");
  } else if(e.key == "Enter" || e.key == "NumEnter"){
    setAns();
  } else if (e.key == "Backspace") {
    eraseScreen();
  } else if (e.key == "Delete" || e.key == "Escape") {
    screenReset();
  }
}*/

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

let screenReset = () =>{
  resultNumbers.value = "";
}

let eraseScreen = () =>{
  let clearResult = resultNumbers.value.substr(0, resultNumbers.value.length - 1);
  resultNumbers.value = clearResult;
}