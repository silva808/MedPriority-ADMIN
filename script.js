// -----------------------------------ACCORDION MENU-----------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
   setupAccordion("mainDiv1");
   setupAccordion("mainDiv2");
 });
 
 function setupAccordion(mainDivSelector) {
   const mainDiv = document.getElementById(mainDivSelector);
   const divs = mainDiv.querySelectorAll(".manage");
 
   divs[0].classList.add("active");
 
   divs[0].addEventListener("click", function () {
     for (let i = 1; i < divs.length; i++) {
       toggleAccordion(divs[i]);
     }
   });
 
   function toggleAccordion(div) {
     div.classList.toggle("active");
   }
 }

// --------------------------------------- MODAL ------------------------------

const openModalButtons  = document.querySelectorAll('[data-modal-target]')
const closeModalButtons  = document.querySelectorAll(['data-close-button'])
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}