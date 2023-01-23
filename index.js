let gameArea = document.getElementById('game-area');
/*
let gameInstructions = document.createElement('p');
gameInstructions.id = 'game-instructions';
gameInstructions.innerHTML = `Use as setas direcionais do teclado para <br>
se mover para esquerda e para direita!`
moveArea.appendChild(gameInstructions);
*/
let char = document.createElement('div');
char.id = 'char';
char.innerHTML = `<img src="char.png">`
gameArea.appendChild(char);

let charPosition = 380;
let itemVerticalPosition = 55;
let itemHorizontalPosition = 0;

document.addEventListener('keydown', function(event){moveChar(event)});

function moveChar(event) {
  if (event.key == "ArrowLeft") {
    if (charPosition > 1) {
      charPosition -= 10;
      document.getElementById('char').style.left = `${charPosition}px`;
    }
  }
  if (event.key == "ArrowRight") {
    if (charPosition < 740) {
      charPosition += 10;
      document.getElementById('char').style.left = `${charPosition}px`;
    }
  }
}

function spawnItem() {
  document.getElementById('item').style.bottom = `${itemVerticalPosition}px`;
  itemHorizontalPosition = Math.random() * 756;
  document.getElementById('item').style.left = `${itemHorizontalPosition}px`;
}

function moveItem() {
  if (itemVerticalPosition > -355) {
    itemVerticalPosition -= 5;
    document.getElementById('item').style.bottom = `${itemVerticalPosition}px`;

    if (itemVerticalPosition == -355) {
      itemVerticalPosition = 55;
      spawnItem();
    }
  }
}

function createItem() {
  let item = document.createElement('div');
  item.id = 'item';
  item.innerHTML = `<img src="carrot.png">`;
  gameArea.appendChild(item);

  spawnItem();
  setInterval(moveItem, 100);

}

createItem();