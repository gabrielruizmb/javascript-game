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

function createItem() {
  let item = document.createElement('div');
  item.id = 'item';
  item.innerHTML = `<img src="carrot.png">`;
  gameArea.appendChild(item);

  document.getElementById('item').style.left = `${Math.random() * 756}px`;
}

createItem();