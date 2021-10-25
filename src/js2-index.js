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
  //console.log(typeof a)
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
  a = w;
}

 wrapper.onkeyup = e => {
  if(e.key == "0" || e.key == "Num0"){
      type_to(0);
  } else if(e.key == "1" || e.key == "Num1"){
      type_to(1);
  } else if (e.key == "2" || e.key == "Num2") {
      type_to(2);
  } else if (e.key == "3" || e.key == "Num3") {
      type_(3);
  } else if (e.key == "4" || e.key == "Num4") {
      type_to(4);
  } else if (e.key == "5" || e.key == "Num5") {
      type_to(5);
  } else if (e.key == "6" || e.key == "Num6") {
      type_to(6);
  } else if (e.key == "7" || e.key == "Num7") {
      type_to(7);
  } else if (e.key == "8" || e.key == "Num8") {
      type_to(8);
  } else if (e.key == "9" || e.key == "Num9") {
      type_to(9);
  } else if (e.key == "+" || e.key == "Num+") {
      type_to("+");
  } else if (e.key == "-" || e.key == "Num-") {
      type_to("-");
  } else if (e.key == "*" || e.key == "Num*") {
      type_to("X");
  } else if (e.key == "/" || e.key == "Num/") {
      type_to("/");
  } else if (e.key == "%") {
      type_to("%");
  } else if (e.key == "." || e.key == "Num.") {
      type_to(".");
  } else if(e.key == "Enter" || e.key == "NumEnter"){
      set_ans();
  } else if (e.key == "Backspace") {
      erase_screen();
  } else if (e.key == "Delete" || e.key == "Escape") {
      screen_reset();
  }
}

let type_to = () =>{
  let w = ''
  if (resultNumbers.value == ""){
    resultNumbers.value = w;
  } 
  else if (resultNumbers.value.length <= 23){
    resultNumbers.value = resultNumbers.value + w;
}
}

//Function to get the inputs and show the result on the calculator result screen
let set_ans = () => {
  let write1 = resultNumbers.value;
  if (write1.indexOf("%") == -1){
      if (write1.indexOf("X") != -1) {
          write1 = write1.replace("X", "*");
      }
  } else{
      write1 = write1.replace("%", "");
      if (write1.indexOf("X") != -1) {
          let write1_ar = write1.split("X");
          let total = eval(write1_ar[0]);
          let need = eval(write1_ar[1]);
          write1 = (need / 100) * total;
      } else{
          alert("Math error: Percent without multiplication.");
      }
  }
  let res = eval(write1);
  resultNumbers.value = res;
}

//Function to clear the entire calculator screen
let screen_reset = () =>{
  resultNumbers.value = "";
}

//Function to clear the calculator screen one by one
let erase_screen = () =>{
  let init = resultNumbers.value.substr(0, resultNumbers.value.length - 1);
  resultNumbers.value = init;
}