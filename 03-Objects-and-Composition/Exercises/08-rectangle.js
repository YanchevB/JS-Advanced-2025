function createRectangleObj(width, height, color) {
  const firstChar = color[0].toUpperCase();

  const rect = {
    width: Number(width),
    height: Number(height),
    color: firstChar + color.slice(1),
    calcArea() {
      return width * height;
    }
  };
  return rect;
}

let rect = createRectangleObj(4, 5, 'red');
console.log(rect.calcArea());