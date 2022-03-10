
export default class UseTheApi {
    constructor (name = '') {
        this.name = name;
        this.url =
          'https://us-central1-js-capstone-backend.cloudfunctions.net/api//games/Zl4d7IVkemOTTVmhgP/scores/';
    }

    getScore = async () => {
        const {res} = await fetch(this.url);
        const data = await res.json();

        return data;
    }

    addScore = async (score) => {
        await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(score),
            headers: {'Content-type': 'application/json; charset=UFT-8'}
        })
    }
}
