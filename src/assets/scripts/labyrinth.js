let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for(let i = 1; i < 101; i++) {
  let cell = document.createElement('div');
  field.appendChild(cell);
  cell.classList.add('cell');
}

let cell = document.getElementsByClassName('cell');
let x = 1;
let y = 10;

for(let i = 0; i < 100; i++) {
  if (x > 10) {
    x = 1;
    y--;
  }
  cell[i].setAttribute('posX', x);
  cell[i].setAttribute('posY', y);
  x++;
}

function generateCellSmile() {
  let posX = Math.round(Math.random() * (10-1) + 1);
  let posY = Math.round(Math.random() * (10-1) + 1);
  return [posX, posY];
}

function generateCellFinish() {
  let posX = Math.round(Math.random() * (10-1) + 1);
  let posY = Math.round(Math.random() * (10-1) + 1);
  return [posX, posY];
}

let coordinatesSmile = generateCellSmile();
let coordinatesFinish = generateCellFinish();
let smile = [document.querySelector('[posX = "' + coordinatesSmile[0] + '"][posY = "' + coordinatesSmile[1] + '"]')];
let finish = [document.querySelector('[posX = "' + coordinatesFinish[0] + '"][posY = "' + coordinatesFinish[1] + '"]')];

while (finish[0].classList.contains('smile')) {
  let coordinatesFinish = generateCellFinish();
  finish = [document.querySelector('[posX = "' + coordinatesFinish[0] + '"][posY = "' + coordinatesFinish[1] + '"]')];
}
/*
document.addEventListener('keydown', myF);



function myF(event) {

    sk = [smile[0].getAttribute('posX'), smile[0].getAttribute('posY')];
  
    sk = [document.querySelector('[posX = "' + (+coordinatesSmile[0] + 1) + '"][posY = "' + coordinatesSmile[1] + '"]')];
    smile[0].classList.remove('smile');
    sk[0].classList.add('smile');


  
  console.log(coordinatesSmile[0])  
  console.log('left')
  console.log(smile)
if (event.key == 39){
  console.log('right')
}
      
    
  
};
*/

smile[0].classList.add('smile');
finish[0].classList.add('finish');





document.addEventListener('keydown', (e) => {
  if(e.code === 'ArrowRight' || e.code === 'KeyK') {
    console.log('пауза')
    }
    else {
      console.log('паузаноу')
    }

  })