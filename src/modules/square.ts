const name = "square";

function draw(ctx: CanvasRenderingContext2D, length: number, x: number, y: number, color: string): { length: number, x: number, y: number, color: string } {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
function reportArea(length: number, listId: string): void {
  let listItem = document.createElement('li');
  listItem.textContent = `${name} area is ${length * length}px squared.`

  let list = document.getElementById(listId);
  list?.appendChild(listItem);
}

function reportPerimeter(length: number, listId: string): void {
  let listItem = document.createElement('li');
  listItem.textContent = `${name} perimeter is ${length * 4}px.`

  let list = document.getElementById(listId);
  list?.appendChild(listItem);
}
function random(min: number, max: number) {
  let num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}
function randomSquare(ctx: CanvasRenderingContext2D) {
  let color1 = random(0, 255);
  let color2 = random(0, 255);
  let color3 = random(0, 255);
  let color = `rgb(${color1},${color2},${color3})`
  ctx.fillStyle = color;

  let x = random(0, 480);
  let y = random(0, 320);
  let length = random(10, 100);
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
    color: color
  };
}
export { name, draw, reportArea, reportPerimeter }
export default randomSquare;