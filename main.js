const elements = [
{ name: 'H', valency: [1] },
{ name: 'Li', valency: [1] },
{ name: 'F', valency: [1] },
{ name: 'Na', valency: [1] },
{ name: 'Cl', valency: [1] },
{ name: 'K', valency: [1] },
{ name: 'Cu', valency: [1, 2] },
{ name: 'Be', valency: [2] },
{ name: 'C', valency: [2, 4] },
{ name: 'N', valency: [2, 3, 4] },
{ name: 'O', valency: [2] },
{ name: 'Mg', valency: [2] },
{ name: 'S', valency: [2, 4] },
{ name: 'Ca', valency: [2] },
{ name: 'Fe', valency: [2, 3] },
{ name: 'Zn', valency: [2] },
{ name: 'B', valency: [3] },
{ name: 'Al', valency: [3] },
{ name: 'P', valency: [3, 5] },
{ name: 'Si', valency: [4] }
];

let currentElement = {};

function randomElement() {
currentElement = elements[Math.floor(Math.random() * elements.length)];
document.getElementById('elementName').textContent = currentElement.name;
}

function checkAnswer() {
const userAnswer = document.getElementById('userInput').value.trim();
const resultText = document.getElementById('result');

const userValencies = userAnswer.split(',').map(val => parseInt(val.trim(), 10)).sort();
const correctValencies = [...currentElement.valency].sort();

if (JSON.stringify(userValencies) === JSON.stringify(correctValencies)) {
    resultText.textContent = 'Đúng!';
} else {
    resultText.textContent = `Sai, hóa trị của ${currentElement.name} là ${currentElement.valency.join(', ')}`;
}

document.getElementById('userInput').value = '';
randomElement();
}

// Lắng nghe sự kiện "Enter"
document.getElementById('userInput').addEventListener('keydown', function(event) {
if (event.key === 'Enter') {
    checkAnswer();
}
});

randomElement();
