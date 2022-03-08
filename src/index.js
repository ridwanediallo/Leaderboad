import './style.css';

const list = document.querySelector('.list');
const inputName = document.querySelector('.input-name');
const inputScore = document.querySelector('.input-score');
const refreshBtn = document.querySelector('.refresh-btn');
const submitBtn = document.querySelector('.submit-btn');

class Data {
  constructor(name, score, index) {
    this.name = name;
    this.score = score;
  }
}

class DataList {
  constructor() {
    this.scores = [];
  }

  saveTolocal() {
    localStorage.setItem('scores', JSON.stringify(this.scores));
  }

  getFromLocal = () => {
    this.scores = localStorage.getItem('scores')
      ? JSON.parse(localStorage.getItem('scores'))
      : [];
  };

  renderScore(list) {
    list.innerHTML = '';
    this.scores.forEach((el, i) => {
    const item = document.createElement('li');
    if(i % 2 === 0) {
      item.style.backgroundColor = '#ddd'
    }
      item.classList.add('item');
      item.id = i;
      item.innerHTML = `${el.name}: ${el.score}`;
      list.appendChild(item);
    });
  }

  addScore(name, score, scores) {
    if (name && score) {
      const newScore = new Data(name, score, scores);
      this.scores.push(newScore);
    }
    this.saveTolocal();
    this.renderScore(list);
    console.log(this.scores);
  }
}

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
