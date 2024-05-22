"use strict"; 

var soinNone = document.querySelector("#snone");
var soinBtn = document.querySelector("#sbtn");
var soinBtnLess = document.querySelector("#sbtnless");


soinBtn.addEventListener('click', seeSoin);

function seeSoin() {
    soinNone.classList.remove('soins__none');
    soinBtn.classList.add('soins__btn--none');
    soinBtnLess.classList.remove('soins__btn--none');
}

soinBtnLess.addEventListener('click', unseeSoin);

function unseeSoin() {
    soinNone.classList.add('soins__none');
    soinBtn.classList.remove('soins__btn--none');
    soinBtnLess.classList.add('soins__btn--none');
}



var recettesNone = document.querySelector("#rnone");
var recettesBtn = document.querySelector("#rbtn");
var recettesBtnLess = document.querySelector("#rbtnless");


recettesBtn.addEventListener('click', seeRec);

function seeRec() {
    recettesNone.classList.remove('recettes__none');
    recettesBtn.classList.add('recettes__btn--none');
    recettesBtnLess.classList.remove('recettes__btn--none');
}

recettesBtnLess.addEventListener('click', unseeRec);

function unseeRec() {
    recettesNone.classList.add('recettes__none');
    recettesBtn.classList.remove('recettes__btn--none');
    recettesBtnLess.classList.add('recettes__btn--none');
}


// Fonction pour vérifier si la vidéo est visible à l'écran
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Fonction pour démarrer la vidéo lorsque c'est visible
  function startVideoIfVisible() {
    var video = document.getElementById('#myVideo');
    if (isElementInViewport(video)) {
      video.play();
      // Supprimer l'écouteur d'événement une fois que la vidéo a commencé à jouer
      window.removeEventListener('scroll', startVideoIfVisible);
    }
  }
  
  // Ajoute un écouteur d'événement de défilement pour vérifier lorsque la vidéo devient visible
  window.addEventListener('scroll', startVideoIfVisible);
  
