const accordions = document.querySelectorAll('.accordion');
const paragraphs = document.querySelectorAll('#parrafo');

// Dar valor inicial de display = none
paragraphs.forEach(function(paragraph) {
  paragraph.style.display = "none";
});

// Agregar eventListener a cada accordion
accordions.forEach(function(accordion, index) {
  accordion.addEventListener('click', function() {
    // Cambiar display de <p>
    if (paragraphs[index].style.display === "none") {
      paragraphs[index].style.display = "flex";
    } else {
      paragraphs[index].style.display = "none";
    }
  });
});


const arrowIco = document.querySelectorAll('#arrow_ico');
  
  accordions.forEach(function(accordion,index){
    accordion.addEventListener('click', function(){
      if(paragraphs[index].style.display === "flex"){
        arrowIco[index].classList.add('rotate');
      } else{
        arrowIco[index].classList.remove('rotate');
      }
      })
  })