// Paint a circle o a canvas element

// Class creation time!
class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }

    draw(ctx) {
        canvas.style.width = "100%";
        canvas.style.height = "100%";

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
        ctx.fillStyle = this.fillColor;
        ctx.stroke();
        ctx.fill();
    }
}

// const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "yellow");
// c1.draw();
const canvas = document.getElementById("circle");
const ctx = canvas.getContext("2d");
// Now lets make art!
setInterval(() => {
    const xRandom = Math.floor(Math.random() * 500);
    const yRandom = Math.floor(Math.random() * 500);
    const rRandom = Math.floor(Math.random() * 200);
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    const c1 = new Circle(xRandom, yRandom, rRandom, 0, 2 * Math.PI, randomColor);
    c1.draw(ctx);
}, 100);