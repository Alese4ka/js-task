const countLevel = document.querySelector('.labyrinth_level');
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

smile[0].classList.add('smile');
finish[0].classList.add('finish');
cell[1].classList.toggle('black-cell') 

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  if(e.code === 'ArrowRight') {
    smile[0].classList.remove('smile');
    smileMove = [smile[0].getAttribute('posX'), smile[0].getAttribute('posY')];
    smile = [document.querySelector('[posX = "' + (+smileMove[0] + 1) + '"][posY = "' + smileMove[1] + '"]')];
    smile[0].classList.add('smile');
    if (smile[0].getAttribute('posX') == finish[0].getAttribute('posX') && smile[0].getAttribute('posY') == finish[0].getAttribute('posY')) {
      alert('Вы выиграли');
      smile[0].classList.remove('smile');
      smile = [document.querySelector('[posX = "10"][posY = "10"]')];
      smile[0].classList.add('smile');
      levelUp();
    }
    else if (smile[0].getAttribute('posX') == cell[0].getAttribute('10')) {
      console.log('jjjj')
    }
  }
  else if (e.code === 'ArrowLeft') {
    smile[0].classList.remove('smile');
    smileMove = [smile[0].getAttribute('posX'), smile[0].getAttribute('posY')];
    smile = [document.querySelector('[posX = "' + (+smileMove[0] - 1) + '"][posY = "' + smileMove[1] + '"]')];
    smile[0].classList.add('smile');
    if (smile[0].getAttribute('posX') == finish[0].getAttribute('posX') && smile[0].getAttribute('posY') == finish[0].getAttribute('posY')) {
      alert('Вы выиграли')
      smile[0].classList.remove('smile');
      smile = [document.querySelector('[posX = "10"][posY = "10"]')];
      smile[0].classList.add('smile');
      levelUp();
    }
    else if (smile[0].getAttribute('posX') == 10) {
      alert('Вы проиграли')
    }
  }
  else if (e.code === 'ArrowUp') {
    smile[0].classList.remove('smile');
    smileMove = [smile[0].getAttribute('posX'), smile[0].getAttribute('posY')];
    smile = [document.querySelector('[posX = "' + smileMove[0] + '"][posY = "' + (+smileMove[1] + 1) + '"]')];
    smile[0].classList.add('smile');
    if (smile[0].getAttribute('posX') == finish[0].getAttribute('posX') && smile[0].getAttribute('posY') == finish[0].getAttribute('posY')) {
      alert('Вы выиграли');
      smile[0].classList.remove('smile');
      smile = [document.querySelector('[posX = "10"][posY = "10"]')];
      smile[0].classList.add('smile');
      levelUp();
    }
  }
  else if (e.code === 'ArrowDown') {
    smile[0].classList.remove('smile');
    smileMove = [smile[0].getAttribute('posX'), smile[0].getAttribute('posY')];
    smile = [document.querySelector('[posX = "' + smileMove[0] + '"][posY = "' + (+smileMove[1] - 1) + '"]')];
    smile[0].classList.add('smile');
    if (smile[0].getAttribute('posX') == finish[0].getAttribute('posX') && smile[0].getAttribute('posY') == finish[0].getAttribute('posY')) {
      alert('Вы выиграли');
      smile[0].classList.remove('smile');
      smile = [document.querySelector('[posX = "10"][posY = "10"]')];
      smile[0].classList.add('smile');
      levelUp();
    }
  } 
})

function levelUp() {
  let rand = Math.round(Math.random() * (100-1) + 1);
  if (rand == 10){
    let rand = Math.round(Math.random() * (100-1) + 1);
    cell[rand].classList.add('black-cell');
  }
  cell[rand].classList.add('black-cell');
  let a = parseInt(1);
  let b = parseInt(countLevel.innerHTML);
  countLevel.innerHTML = ` ${a + b}`;
} 

// подумать как сделать если смайл сталкивается с границей и с черным чтобы был конец игры
// сделать так чтобы черные ячейки не могли появляться в том месте где у же есть черный квадрат