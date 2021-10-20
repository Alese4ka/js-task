let elem = document.querySelectorAll('.calculator__operand');
let result = document.getElementById('calculator__result');

for (let i = elem.length - 1; i >= 0; i--) {
    elem[i].addEventListener('click', calculateNumbers, false);
  }
  
  /*
[...calculate].forEach((f) => f.onclick = () => calculateNumbers());

      */
function calculateNumbers(){

   result.value = this.innerHTML;

  }