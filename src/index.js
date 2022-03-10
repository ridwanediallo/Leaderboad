const inputName = document.querySelector('.input-name');
const inputScore = document.querySelector('.input-score');
const submitBtn = document.querySelector('.submit-btn');
const refreshBtn = document.querySelector('.refresh-btn');
const list = document.querySelector('.list');

const renderScore = (list, result) => {
  list.innerHTML = '';
  result.sort((a, b) => b.score - a.score);
  result.forEach((el, i) => {
    console.log(el);
    const item = document.createElement('li');
    if (i % 2 === 0) {
      item.style.backgroundColor = '#ddd';
    }
    item.classList.add('item');
    item.id = i;
    item.innerHTML = `${el.user}: ${el.score}`;
    list.appendChild(item);
  });
};
