const inputName = document.querySelector('.input-name');
const inputScore = document.querySelector('.input-score');
const submitBtn = document.querySelector('.submit-btn');
const refreshBtn = document.querySelector('.refresh-btn');
const list = document.querySelector('.list');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  setScore(inputName.value, +inputScore.value);
  inputName.value = '';
  inputScore.value = '';
});

const refresher = () => {
  const result = getresult();
  result.then((res) => {
    renderScore(list, res);
  });
};

refreshBtn.addEventListener('click', () => {
  refresher();
});

document.addEventListener('DOMContentLoaded', () => {
  refresher();
});
