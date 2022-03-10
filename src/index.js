const id = 'JzH9HTJguuluPrqqtBeU';

const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;

const getResult = async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data.result;
};

const setScore = async (user, score) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export { getResult, setScore };
