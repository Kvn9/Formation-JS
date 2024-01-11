setInterval(() => {
const r = Math.floor(Math.random() * 255);
const g = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);

const color = `rgb(${r}, ${g}, ${b})`;

document.body.style.backgroundColor = color;
document.body.innerHTML = `<h1>${color}</h1>`;
}, 1000);
