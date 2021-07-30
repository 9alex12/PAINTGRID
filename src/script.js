const colors = {
  red: "rojo",
  black: "negro",
  white: "blanco",
  yellow: "amarillo",
  green: "verde",
  brown: "cafe",
  purple: "purpura",
  peru: "peru"
};

let selectedColor;
let strongTag;

//callback para colorSquares
const selectColor = (event) => {
  selectedColor = event.target.id;
  strongTag = document.querySelector("#selected-color");
  strongTag.textContent = colors[selectedColor]; //Cambia el contenido de la etiqueta
};

//callback para gridsquares
const paintSquare = (event) => {
  if (!selectedColor) return; //Validacion para evitar undefined
  const selectedSquare = document.querySelector(`#${event.target.id}`);
  selectedSquare.className = `tableSpace ${selectedColor}`;
  console.log(selectedSquare);
};

//callback para mouseMove
const paintSquareOnMove = (event) => {
  if (event.buttons !== 1) return;
  paintSquare(event);
};

//callback del boton
const resetColor = () => {
  console.log("reset grid");
  gridSquares.forEach((square) => (square.className = `tableSpace`));
  selectedColor = null;
  strongTag.textContent = null;
};

const colorSquares = document.querySelectorAll(".colorBox");

colorSquares.forEach((square) => square.addEventListener("click", selectColor));

const gridSquares = document.querySelectorAll(".tableSpace"); //Se toman todos los cuadrados de la grilla

gridSquares.forEach((square) => square.addEventListener("click", paintSquare)); //con forEach le agregamos a cada cuadro la escucha del evento

gridSquares.forEach((square) =>
  square.addEventListener("mousemove", paintSquareOnMove)
);

const buttonReset = document.querySelector(".buttonReset");
buttonReset.addEventListener("click", resetColor);
