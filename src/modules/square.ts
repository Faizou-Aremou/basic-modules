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
export { name, draw, reportArea, reportPerimeter }