const renderScore = (list, result) => {
  list.innerHTML = '';
  result.sort((a, b) => b.score - a.score);
  result.forEach((el, i) => {
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

export default renderScore;
