import './style.css';

import DataList, { list } from './modules/dataList.js';

const inputName = document.querySelector('.input-name');
const inputScore = document.querySelector('.input-score');
const submitBtn = document.querySelector('.submit-btn');

const scoreList = new DataList();

document.addEventListener('DOMContentLoaded', () => {
  scoreList.getFromLocal(scoreList.scores);
  scoreList.renderScore(list);
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  scoreList.addScore(inputName.value, inputScore.value, scoreList.scores);
  scoreList.saveTolocal();
  inputName.value = '';
  inputScore.value = '';
});
