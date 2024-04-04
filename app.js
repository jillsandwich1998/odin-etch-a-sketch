const container = document.getElementById("container");
const gridSize = 16;
let color = "black";

//Cria a grid
function createGrid(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.draggable = false; //Impede que o navegador
    //queira arrastar a grid como uma imagem ao
    //clicar com o botão direito do mouse
    container.appendChild(cell);
  }
}

//Event listener para o botão que muda a cor de fundo para azul
document.getElementById("blue").addEventListener("click", function () {
  if (color === "blue") {
    color = "black";
    blue.classList.remove("active");
  } else {
    color = "blue";
    blue.classList.add("active");
  }
});

//Adicionando event-listener para mudar a cor de cada div com a classe "cell"
document.addEventListener("DOMContentLoaded", function () {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(function (cell) {
    // Adiciona o event listener para 'dragstart' e previne o comportamento padrão do navegador
    //de arrastar a grid como imagem
    cell.addEventListener("dragstart", function (event) {
      event.preventDefault();
    });
    cell.addEventListener("mouseover", function (event) {
      if (event.buttons === 1) {
        // 1 = botão esquerdo do mouse
        cell.style.backgroundColor = color;
      }
    });
  });
});

//Adicionando um botão que limpa todas as células de volta para sua cor de fundo original
document.getElementById("cleanButton").addEventListener("click", function () {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(function (cell) {
    cell.style.backgroundColor = "white";
  });
});

//Cria a grid usando o parametro "gridSize"
createGrid(gridSize);
