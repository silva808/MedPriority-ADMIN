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

const openModalButton  = document.querySelectorAll('[data-modal-target]')
const closeModalButton  = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButton.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

// overlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('.modal.active')
//   modals.forEach(modal => {
//     closeModal(modal)
//   })
// })

// ↑↑↑↑↑↑↑↑↑↑
// when click on overlay it closes the modal

closeModalButton.forEach(button => {
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