// index.js
import "./styles.css";
import { testGreet } from "./testGreet.js";


console.log(testGreet);

const modalOverlay = document.querySelector('.overlay');
const poneModal = document.querySelector('.pone-overlay');
const ptwoModal = document.querySelector('.ptwo-overlay');

const closeModal = document.querySelector('.modal-btn');
const poneLockin = document.querySelector('.pone-lockin');
const ptwoLockin = document.querySelector('.ptwo-lockin');


closeModal.addEventListener('click', () => {
    modalOverlay.classList.add('hide-modal');
    poneModal.classList.toggle('hide-modal');
})

poneLockin.addEventListener('click', () => {
    poneModal.classList.toggle('hide-modal');
    ptwoModal.classList.toggle('hide-modal');
})

ptwoLockin.addEventListener('click',() => {
    ptwoModal.classList.toggle('hide-modal');
})



const poneboard = document.querySelector('.board-one');
const ptwoboard = document.querySelector('.board-two');

function createBoard() {
    
    for (let i = 0; i<100; i++) {
        
        let cellOne = document.createElement('div');
        cellOne.classList.add('cell');
        cellOne.dataset.index = i;

        let cellTwo = document.createElement('div');
        cellTwo.classList.add('cell');
        cellTwo.dataset.index = i;

        poneboard.appendChild(cellOne);
        ptwoboard.appendChild(cellTwo);
    }
}
createBoard()

