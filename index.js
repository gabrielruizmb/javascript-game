let moveArea = document.getElementById('move-area');
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
moveArea.appendChild(char);

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