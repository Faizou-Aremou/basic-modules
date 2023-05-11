import { create, createReportList } from "canvas";
import { draw, reportArea, reportPerimeter } from ".square";
const myCanvas = create('myCanvas', document.body, 480, 320);
const reportList = createReportList(myCanvas.id);
if (myCanvas.ctx) {
    const square1 = draw(myCanvas.ctx, 50, 50, 100, 'blue');
    reportArea(square1.length, reportList);
    reportPerimeter(square1.length, reportList);
}