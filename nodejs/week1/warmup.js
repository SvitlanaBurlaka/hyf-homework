console.log("inside warmup file");

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getDiameter() {
        return 2 * this.radius;
    }
    getCircumference() {
        return 2 * this.radius * Math.PI;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle(10);
console.log(circle.getDiameter());
console.log(circle.getCircumference());
console.log(circle.getArea());