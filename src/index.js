import './style.css';
import UseTheApi from './modules/fetchApi.js';
import renderScore from './modules/renderScore.js';

const refreshBtn = document.querySelector('.refresh-btn');
const inputName = document.querySelector('.input-name');
const inputScore = document.querySelector('.input-score');
const submitBtn = document.querySelector('.submit-btn');
const list = document.querySelector('.list');



const unknownGame = new UseTheApi('unknownGame');

refreshBtn.addEventListener('click', () => {
    const scores = unknownGame.getScore();
    renderScore(list, scores);
})

document.addEventListener('DOMContentLoaded', () => {
  const scores = unknownGame.getScore();
  renderScore(list, scores);
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (inputName.value && inputScore.value) {
    unknownGame.addScore({ name: inputName.value, score: inputScore.value });
  }
  inputName.value = '';
  inputScore.value = '';
});
