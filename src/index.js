import './style.css'

const list = document.querySelector('.list');
const inputName = document.querySelector('.input-name')
const inputScore = document.querySelector('.input-score')
const refreshBtn = document.querySelector('.refresh-btn')
const submitBtn = document.querySelector('.submit-btn')

class Data {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}

class DataList {
    constructor () {
        this.scores = [];
    }

}
