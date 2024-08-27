const button = document.querySelector('img');
const count = document.querySelector('.count')
const pastelRainbowColors = [
    "#FFB3BA", // Pastel Red
    "#FFDFBA", // Pastel Orange
    "#FFFFBA", // Pastel Yellow
    "#BAFFC9", // Pastel Green
    "#BAE1FF", // Pastel Blue
    "#CBAEFF", // Pastel Indigo
    "#FFB3FF"  // Pastel Violet
];
let index = 0
let clickCount = 0
button.addEventListener('click', () => {
    clickCount += 1;
    if (index > 6) {
        index = 0
    }
    document.body.style.backgroundColor = pastelRainbowColors[index];
    index += 1
    count.innerHTML = `${clickCount}`
})

document.addEventListener('keydown', () => {
    clickCount += 1;
    if (index > 6) {
        index = 0
    }
    document.body.style.backgroundColor = pastelRainbowColors[index];
    index += 1
    count.innerHTML = `${clickCount}`
})
