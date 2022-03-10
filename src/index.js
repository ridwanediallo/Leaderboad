const id = 'JzH9HTJguuluPrqqtBeU';

const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;

const getresult = async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data.result;
};
