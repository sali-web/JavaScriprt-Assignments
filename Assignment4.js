
let rectangle = {
    length: 15,
    breadth: 5,
    area1: Area,
}

let square = {
    length: 10,
    breadth: 10,
    area2: Area,
}

function Area() {
    return this.length * this.breadth;
}


console.log("Area of Rectangle: " + rectangle.area1())
console.log("Area of Square: " + square.area2())