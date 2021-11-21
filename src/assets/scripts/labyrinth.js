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

let smile;
let finish;
let coordinatesSmile = generateCellSmile();
let coordinatesFinish = generateCellFinish();
let rand = Math.round(Math.random() * (100-1) + 1);

smile = document.querySelector('[posX = "' + coordinatesSmile[0] + '"][posY = "' + coordinatesSmile[1] + '"]');
finish = document.querySelector('[posX = "' + coordinatesFinish[0] + '"][posY = "' + coordinatesFinish[1] + '"]');

while (finish.classList.contains('smile')) {
  let coordinatesFinish = generateCellFinish();
  finish = document.querySelector('[posX = "' + coordinatesFinish[0] + '"][posY = "' + coordinatesFinish[1] + '"]');
}

smile.classList.add('smile');
finish.classList.add('finish');
cell[rand].classList.add('black-cell');

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

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  if(e.code === 'ArrowRight') {
    smile.classList.remove('smile');
    smileMove = [smile.getAttribute('posX'), smile.getAttribute('posY')];
    smile = document.querySelector('[posX = "' + (+smileMove[0] + 1) + '"][posY = "' + smileMove[1] + '"]');
    smile.classList.add('smile');
    if (smile.classList.contains('black-cell')) {
      alert('Вы проиграли');
      newGame();
    }
    else if (smile.getAttribute('posX') == finish.getAttribute('posX') && smile.getAttribute('posY') == finish.getAttribute('posY')) {
      alert('Вы выиграли');
      smile.classList.remove('smile');
      smile = document.querySelector('[posX = "10"][posY = "10"]');
      smile.classList.add('smile');
      levelUp();
    }
    else if (smile.getAttribute('posX') > 10){
      alert('Вы проиграли');
      console.log('Вы проиграли');
      newGame();
    }
  }
  else if (e.code === 'ArrowLeft') {
    smile.classList.remove('smile');
    smileMove = [smile.getAttribute('posX'), smile.getAttribute('posY')];
    smile = document.querySelector('[posX = "' + (+smileMove[0] - 1) + '"][posY = "' + smileMove[1] + '"]');
    smile.classList.add('smile');
    if (smile.classList.contains('black-cell')) {
      alert('Вы проиграли');
      newGame();
    }
    else if (smile.getAttribute('posX') == finish.getAttribute('posX') && smile.getAttribute('posY') == finish.getAttribute('posY')) {
      alert('Вы выиграли')
      smile.classList.remove('smile');
      smile = document.querySelector('[posX = "10"][posY = "10"]');
      smile.classList.add('smile');
      levelUp();
    }
    else if (!smile.classList.contains('cell')){
      alert('Вы проиграли');
      console.log('Вы проиграли');
      newGame();
    }
  }
  else if (e.code === 'ArrowUp') {
    smile.classList.remove('smile');
    smileMove = [smile.getAttribute('posX'), smile.getAttribute('posY')];
    smile = document.querySelector('[posX = "' + smileMove[0] + '"][posY = "' + (+smileMove[1] + 1) + '"]');
    smile.classList.add('smile');
    if (smile.classList.contains('black-cell')) {
      alert('Вы проиграли');
      newGame();
    }
    else if (smile.getAttribute('posX') == finish.getAttribute('posX') && smile.getAttribute('posY') == finish.getAttribute('posY')) {
      alert('Вы выиграли');
      smile.classList.remove('smile');
      smile = document.querySelector('[posX = "10"][posY = "10"]');
      smile.classList.add('smile');
      levelUp();
    }
    else if (!smile.classList.contains('cell')){
      alert('Вы проиграли');
      console.log('Вы проиграли');
      newGame();
    }
  }
  else if (e.code === 'ArrowDown') {
    smile.classList.remove('smile');
    smileMove = [smile.getAttribute('posX'), smile.getAttribute('posY')];
    smile = document.querySelector('[posX = "' + smileMove[0] + '"][posY = "' + (+smileMove[1] - 1) + '"]');
    smile.classList.add('smile');
    if (smile.classList.contains('black-cell')) {
      alert('Вы проиграли');
      newGame();
    }
    else if (smile.getAttribute('posX') == finish.getAttribute('posX') && smile.getAttribute('posY') == finish.getAttribute('posY')) {
      alert('Вы выиграли');
      smile.classList.remove('smile');
      smile = document.querySelector('[posX = "10"][posY = "10"]');
      smile.classList.add('smile');
      levelUp();
    }
    else if (!smile.classList.contains('cell')){
      alert('Вы проиграли');
      console.log('Вы проиграли');
      newGame();
    }
  } 
})

function newGame() {
  countLevel.innerHTML = ` 1`;
  let rand = Math.round(Math.random() * (100-1) + 1);
  cell[rand].classList.add('black-cell');
  let coordinatesFinish = generateCellFinish();
  finish.classList.remove('finish');
  finish = document.querySelector('[posX = "' + coordinatesFinish[0] + '"][posY = "' + coordinatesFinish[1] + '"]');
  finish.classList.add('finish');
  for(let i = 1; i < 101; i++) {
    cell[i].classList.remove('black-cell');
    if(!cell[i].classList.contains('black-cell')){
      cell[rand].classList.add('black-cell');
    }
  }    
}

function levelUp() {
  let rand = Math.round(Math.random() * (100-1) + 1);
  if (rand === 9){
    cell[rand].classList.add('black-cell');
  }
  cell[rand].classList.add('black-cell');
  let a = parseInt(1);
  let b = parseInt(countLevel.innerHTML);
  countLevel.innerHTML = ` ${a + b}`;
}

// подумать как сделать если смайл сталкивается с границей 
// сделать так чтобы черные ячейки не могли появляться в том месте, где у же есть черный квадрат+-