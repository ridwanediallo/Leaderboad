import Data from './data.js';

export const list = document.querySelector('.list');

export default class DataList {
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
      if (i % 2 === 0) {
        item.style.backgroundColor = '#ddd';
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
  }
}
