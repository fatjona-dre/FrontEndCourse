// Create an object that describes a rectangle (contains the coordinates of the upper left and lower right points)
const rectangle = {
    left: 2,
    top: 8,
    right: 10,
    bottom: 2
};

// A function accepts a rectangle object and types out the info about it (where the points are located).
function getRectangleInfo(rect) {
    return `Upper-left: (${rect.left}, ${rect.top}), Lower-right: (${rect.right}, ${rect.bottom})`;
}

// A function accepts a rectangle object and returns its width.
function getWidth(rect) {
    return rect.right - rect.left;
}

// A function accepts a rectangle object and returns its height.
function getHeight(rect) {
    return rect.top - rect.bottom;
}

// A function accepts a rectangle object and returns its content.
function getArea(rect) {
    return getWidth(rect) * getHeight(rect);
}

// A function accepts a rectangle object and returns its perimeter.
function getPerimeter(rect) {
    return 2 * (getWidth(rect) + getHeight(rect));
}

// A function for changing the width of the rectangle.
function changeWidth(rect, amount) {
    rect.right = rect.left + amount;
}

// A function for changing the height of the rectangle.
function changeHeight(rect, amount) {
    rect.bottom = rect.top - amount;
}

// A function for changing the width and the height of the rectangle.
function changeSize(rect, newWidth, newHeight) {
    rect.right = rect.left + newWidth;
    rect.bottom = rect.top - newHeight;
}

// A function for conveying the X-shift of the rectangle.
function moveX(rect, amount) {
    rect.left += amount;
    rect.right += amount;
}

// A function for conveying the Y-shift of the rectangle.
function moveY(rect, amount) {
    rect.top += amount;
    rect.bottom += amount;
}

// A function for conveying the shift on both axis.
function moveXY(rect, amountX, amountY) {
    rect.left += amountX;
    rect.right += amountX;
    rect.top += amountY;
    rect.bottom += amountY;
}

// A function for checking if the point is within the rectangle.
function isPointInside(rect, x, y) {
    return (
        x >= rect.left &&
        x <= rect.right &&
        y <= rect.top &&
        y >= rect.bottom
    );
}
