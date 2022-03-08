import './style.css';

const list = document.querySelector('.list');
const inputName = document.querySelector('.input-name');
const inputScore = document.querySelector('.input-score');
const refreshBtn = document.querySelector('.refresh-btn');
const submitBtn = document.querySelector('.submit-btn');

class Data {
  constructor(name, score) {
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
    const item = document.createElement('li');
    this.scores.forEach((el, i) => {
      item.classList.add('item');
      item.id = i;
      item.innerHTML = `${el.name}: ${el.score}`;
    });
    list.append(item);
  }

  addScore(name, score, scores) {
    const newScore = new Data(name, score, scores);
    this.scores.push(newScore);
    this.renderScore(list);
    console.log(this.scores);
  }
}

const scoreList = new DataList();

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  scoreList.addScore(inputName.value, inputScore.value, scoreList.scores);
})

