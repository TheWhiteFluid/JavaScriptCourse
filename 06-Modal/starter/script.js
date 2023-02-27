'use strict';

// storing all classes that will be  manipuled into variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //selecting all buttons

console.log(btnsOpenModal); //array of the three buttons(called NodeList)

// declaring open/close modal functionality into functions for later use
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// iterating through buttons(NodeList) to individually open modals
for (let i = 0; i <= btnsOpenModal.length - 1; i++) {
  const btnOpenModal = btnsOpenModal[i];
  btnOpenModal.addEventListener('click', openModal);
}

// general closing modals
btnCloseModal.addEventListener('click', closeModal);
