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
