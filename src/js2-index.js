let wrapper = document.querySelector('.calculator__wrapper');
let resultNumbers = document.getElementById('calculator__result');
let clear = document.querySelector('.calculator__clear');
let deleteLastN = document.querySelector('.calculator__delete');
let equally = document.getElementById('calculator__equally');
let btn = document.querySelectorAll('.btn');

clear.addEventListener('click', () => clearResult());
equally.addEventListener('click', () => calc());
deleteLastN.addEventListener('click', () => deleteLastNumber());

let a = '';
let b = '';
let c = 0;
let array = [];
wrapper.onclick = function(event) {
  
  let number = event.target.closest('button'); 
 
  if (!number) return; 
  if (!wrapper.contains(number)) return; 
  resultNumbers.value = '';
  resultNumbers.value = a + number.value;
  a += number.value;
  console.log(a)
}

/*
  if (number.value !== '*' && number.value !== '/' && number.value !== '+') {
      resultNumbers.value = a + number.value;
      a += number.value;
      array.push(a)
      console.log(array)
  }
  else if (number.value === '*' || number.value === '/' || number.value === '+' || number.value === '-') {
    resultNumbers.value = number.value;
    c = resultNumbers.value;
    resultNumbers.value == 0;
  }
  else if (resultNumbers.value === c) {
    resultNumbers.value = number.value;
    b = number.value
  }}*/

  /*
  if (resultNumbers.value == 0){
    if(number.value !== '*' && number.value !== '/' && number.value !== '+'){
      resultNumbers.value = '';
      resultNumbers.value += number.value;
      a += number.value;
      //array.push(Number(resultNumbers.value))
    }
  }
 else if(number.value !== '*' && number.value !== '/' && number.value !== '+') {
    resultNumbers.value += number.value;
    b += number.value;
    //array.push(number.value)
  }
  else {
    if (resultNumbers.value == a) {
      //resultNumbers.value = b;
      c = number.value;
      resultNumbers.value += number.value;
    b += number.value;
    }
  }
};*/

function clearResult() {
  resultNumbers.value = '';
  a = 0;
  //array = []
}
/*//????
function deleteLastNumber(){
for (i = 7;i > 0;i--){
  console.log(typeof a)
   a = a.slice(1,i);
   resultNumbers.value = a;


} 
}*/
  //resultNumbers.value = array.join('');
//}
/*
function calCulate(val){

  var num = document.getElementById("text");
  switch(val){
      case "=":
      if(eval(num.value)==null){
          break;

      }
      num.value = eval(num.value);

      break;

      case "C":
      num.value = "";
      break;

      default:
       num.value =num.value+val;
      break;
  }   
  resultNumbers.value = num.value;
}
*/

function calc() {
  /*let w;
  a = Number(a);
  b = Number(b);
  
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
  a = w;*/
  let w = eval(a);
  resultNumbers.value = w;
  a = 0;
  //array = [w];
}



/*let num = document.getElementById('calculator__result');
        switch(number.value){
          case '=':
            if(eval(num.value)==null){
                break;
            }
            num.value = eval(num.value);
            break;
          case 'C':
            num.value = '';
            break;
          default:
            num.value = num.value + number.value;
            break;
        }   
        resultNumbers.value = num.value; */