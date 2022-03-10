export default function renderScore(list, scores) {
  scores.then((data) => {
    data.forEach((el, i) => {
      list.innerHTML = '';
      const item = document.createElement('li');
      if (i % 2 === 0) {
        item.style.backgroundColor = '#ddd';
      }
      item.classList.add('item');
      item.id = i;
      item.innerHTML = `${el.name}: ${el.score}`;
      list.appendChild(item);
    });
  });
}
