// index.js
import "./styles.css";
import { testGreet } from "./testGreet.js";


console.log(testGreet);

const modalOverlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.modal-btn');
closeModal.addEventListener('click', () => {
    modalOverlay.classList.add('hide-welcome-modal')
})