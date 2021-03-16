import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

const bodyBgColor = () => {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



let countValue = 0;

startBtn.addEventListener('click', event => {
    countValue = setInterval(bodyBgColor, 1000);
    event.target.disabled = true;
});

stopBtn.addEventListener('click', () => {
    clearInterval(countValue)
    startBtn.disabled = false;
});

