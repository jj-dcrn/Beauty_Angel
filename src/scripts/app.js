"use strict";




// tab /////////////////////////////////
let links = document.querySelectorAll(".navtab__link");

for (let link of links){
    link.addEventListener("click", linkTrigger)
}

function linkTrigger(event){
  event.preventDefault();
    //Désactiver tous les liens actifs
    let list = event.currentTarget.closest("ul");
    let activeLinks = list.querySelectorAll(".navtab__link--active");
    for (let activeLink of activeLinks){
        activeLink.classList.remove("navtab__link--active");
    }

    // Cacher le contenu des tabs
    let links = list.querySelectorAll(".navtab__link");
    for( let linkTab of links){
        let tabId = linkTab.getAttribute("href");
        let tabElement = document.querySelector(tabId);
        tabElement.classList.add("hidden");
    }


    //Marquer le lien cliqué comme actif
    let clickedLink = event.currentTarget;
    clickedLink.classList.add("navtab__link--active");



    //Afficher le contenu lié au lien cliqué
    let contentId = clickedLink.getAttribute("href");
    let content = document.querySelector(contentId);
    content.classList.remove("hidden");
}



// nav ////////////////////////////////////////

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


if(menuIcon) {
  menuIcon.addEventListener('click', Navnav);
} 
function Navnav() {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('navbar__link--active');
    
};





// import Swiper from "swiper";
var Verif = document.querySelector('.beauty__box');

if (Verif) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
}
  




// ajouter la section si appuyé sur le bouton

var soinNone = document.querySelector("#snone");
var soinBtn = document.querySelector("#sbtn");
var soinBtnLess = document.querySelector("#sbtnless");


if (soinBtn) {
  soinBtn.addEventListener('click', seeSoin);
} 

function seeSoin() {
    soinNone.classList.remove('soins__none');
    soinBtn.classList.add('soins__btn--none');
    soinBtnLess.classList.remove('soins__btn--none');
}

if (soinBtnLess){
  soinBtnLess.addEventListener('click', unseeSoin);
} 


function unseeSoin() {
    soinNone.classList.add('soins__none');
    soinBtn.classList.remove('soins__btn--none');
    soinBtnLess.classList.add('soins__btn--none');
}

// 
var recettesNone = document.querySelector("#rnone");
var recettesBtn = document.querySelector("#rbtn");
var recettesBtnLess = document.querySelector("#rbtnless");

if (recettesBtn) {
  recettesBtn.addEventListener('click', seeRec);
}

function seeRec() {
    recettesNone.classList.remove('recettes__none');
    recettesBtn.classList.add('recettes__btn--none');
    recettesBtnLess.classList.remove('recettes__btn--none');
}

if(recettesBtnLess){
  recettesBtnLess.addEventListener('click', unseeRec);
}

function unseeRec() {
    recettesNone.classList.add('recettes__none');
    recettesBtn.classList.remove('recettes__btn--none');
    recettesBtnLess.classList.add('recettes__btn--none');
}

// 
var sleepImgNone = document.querySelector(".equilibre__img");
var sleepBtnAdd = document.querySelector("#sleepBtn");
var sleepBtnLess = document.querySelector("#sleepLess");

if (sleepBtnAdd) {
  sleepBtnAdd.addEventListener('click', seeSleep);
}

function seeSleep() {
    sleepImgNone.classList.remove('equilibre__img--none');
    sleepBtnAdd.classList.add('sleep__btn--none');
    sleepBtnLess.classList.remove('sleep__btn--none');
}

if(sleepBtnLess){
  sleepBtnLess.addEventListener('click', unseeSleep);
}

function unseeSleep() {
    sleepImgNone.classList.add('equilibre__img--none');
    sleepBtnAdd.classList.remove('sleep__btn--none');
    sleepBtnLess.classList.add('sleep__btn--none');
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
    if (video && isElementInViewport(video)) {
      video.play();
      // Supprimer l'écouteur d'événement une fois que la vidéo a commencé à jouer
      window.removeEventListener('scroll', startVideoIfVisible);
    }
    var video2 = document.getElementById('#myVideo2');
    if (video2 && isElementInViewport(video2)) {
      video2.play();
      // Supprimer l'écouteur d'événement une fois que la vidéo a commencé à jouer
      window.removeEventListener('scroll', startVideoIfVisible);
    }
    var video3 = document.getElementById('#myVideo3');
    if (video3 && isElementInViewport(video3)) {
      video3.play();
      // Supprimer l'écouteur d'événement une fois que la vidéo a commencé à jouer
      window.removeEventListener('scroll', startVideoIfVisible);
    }
  }
  
  // Ajoute un écouteur d'événement de défilement pour vérifier lorsque la vidéo devient visible
  window.addEventListener('scroll', startVideoIfVisible);
  
//scroll reaval //////////////////////////////////:
let sr = ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});


sr.reveal('.heading--anim', { origin: 'top' });
// ScrollReveal().reveal('.product__img', { origin: 'bottom' });
sr.reveal('.product__img--left', { origin: 'left' });
sr.reveal('.product__img--right', { origin: 'right' });






// quiz ////////////////////////////////////////////////
var siQuiz = document.querySelector(".quiz");
var submit = document.querySelector(".quiz__submit");

var allInputQuiz = document.querySelectorAll(".AllInputQuiz");


if(siQuiz) {
  allInputQuiz.forEach((element) => element.addEventListener('change', changeButtonResult));
}
function resultquiz(){
  var sectionSeche = document.querySelector("#seche");
  var sectionMixte = document.querySelector("#mixte");
  var sectionGrasse = document.querySelector("#grasse");
  
  var Seche = 0;
  var Mixte = 0;
  var Grasse = 0;

  var ouiIrit = document.querySelector("#irritOui"); // seche
  var pfsIrit = document.querySelector("#irritPfs"); // mixte
  var nonIrit = document.querySelector("#irritNon"); // grasse

  var ouiSoleil = document.querySelector("#brule"); // seche
  var pfsSoleil = document.querySelector("#ok"); // mixte
  var nonSoleil = document.querySelector("#bronze"); // grasse

  var ouiRugueuse = document.querySelector("#ouirugsquam"); // seche
  var pfsRugueuse = document.querySelector("#pfsrugsquam"); // mixte
  var nonRugueuse = document.querySelector("#nonrugsquam"); // grasse

  var poresOui = document.querySelector("#ouipores"); // grasse
  var poresPfs = document.querySelector("#pfspores"); // mixte
  var poresNon = document.querySelector("#nonpores"); // seche

  var ouiImperfect = document.querySelector("#ouiimperfections"); //grasse
  var pfsImperfect = document.querySelector("#pfsimperfections"); // mixte
  var nonImperfect = document.querySelector("#nonimperfections"); // seche


  var ouiHydrat = document.querySelector("#sechehydrat"); // seche
  var pfsHydrat = document.querySelector("#mixtehydrat"); // mixte
  var nonHydrat = document.querySelector("#grassehydrat"); // grasse

  var ouiFatigue = document.querySelector("#sechefatiguee"); // seche
  var pfsFatigue = document.querySelector("#mixtefatiguee"); // mixte
  var nonFatigue = document.querySelector("#grassefatiguee"); // grasse

  var ouiSaison = document.querySelector("#sechesaison"); // seche
  var pfsSaison = document.querySelector("#mixtesaison"); // mixte
  var nonSaison = document.querySelector("#grassesaison"); // grasse


  // peau grasse ////////////////////////////////////:
  if(nonIrit.checked){
    Grasse = Grasse + 1;
  }
  if(nonSoleil.checked){
    Grasse = Grasse + 1;
  }
  if(nonRugueuse.checked){
    Grasse = Grasse + 1;
  }
  if(poresOui.checked){
    Grasse = Grasse + 1;
  }
  if(ouiImperfect.checked){
    Grasse = Grasse + 1;
  }
  if(nonHydrat.checked){
    Grasse = Grasse + 1;
  }
  if(nonFatigue.checked){
    Grasse = Grasse + 1;
  }
  if(nonSaison.checked){
    Grasse = Grasse + 1;
  }

  // peau mixte ////////////////////////////////////:
  if(pfsIrit.checked){
    Mixte = Mixte + 1;
  }
  if(pfsSoleil.checked){
    Mixte = Mixte + 1;
  }
  if(pfsRugueuse.checked){
    Mixte = Mixte + 1;
  }
  if(poresPfs.checked){
    Mixte = Mixte + 1;
  }
  if(pfsImperfect.checked){
    Mixte = Mixte + 1;
  }
  if(pfsHydrat.checked){
    Mixte = Mixte + 1;
  }
  if(pfsFatigue.checked){
    Mixte = Mixte + 1;
  }
  if(pfsSaison.checked){
    Mixte = Mixte + 1;
  }


  // peau seche ////////////////////////////////////:
  if(ouiIrit.checked){
    Seche = Seche + 1;
  }
  if(ouiSoleil.checked){
    Seche = Seche + 1;
  }
  if(ouiRugueuse.checked){
    Seche = Seche + 1;
  }
  if(poresNon.checked){
    Seche = Seche + 1;
  }
  if(nonImperfect.checked){
    Seche = Seche + 1;
  }
  if(ouiHydrat.checked){
    Seche = Seche + 1;
  }
  if(ouiFatigue.checked){
    Seche = Seche + 1;
  }
  if(ouiSaison.checked){
    Seche = Seche + 1;
  }


  const ListValue = [Grasse,Mixte,Seche];
  const largestValue = Math.max(...ListValue);


  if(Mixte == largestValue){sectionMixte.classList.remove("mixte--none");}
  else if(Seche == largestValue){sectionSeche.classList.remove("seche--none");}
  else if(Grasse == largestValue){sectionGrasse.classList.remove("grasse--none");}

}
function changeButtonResult(){
  submit.classList.remove('quiz__submit--unchecked');
  submit.addEventListener('click', resultquiz);

}


// reload la page quand bouton recommencer
var verifQuiz = document.querySelector("#quiz");
if (verifQuiz) {
  var reload = document.querySelector('#reload');
  var reload2 = document.querySelector('#reload2');
  var reload3 = document.querySelector('#reload3');

  reload.addEventListener('click', again);
  reload2.addEventListener('click', again);
  reload3.addEventListener('click', again);

  function again(){
    location.reload();   
    window.scrollTo(0, 0);
  }
}


// la panieeeeer de la boutique/////////////////////////////////
// var siBoutique = document.querySelector('.boutique');
// if (siBoutique) {
//   var lotionMinus = document.querySelector('#decrementCounter1Lotion');
//   lotionMinus.addEventListener('click', decrementCounter1);

//   var lotionPlus = document.querySelector('#incrementCounter1Lotion');
//   lotionPlus.addEventListener('click', incrementCounter1);

//   var oilMinus = document.querySelector('#decrementCounter3Huile');
//   oilMinus.addEventListener('click', decrementCounter3);

//   var oilPlus = document.querySelector('#incrementCounter3Huile');
//   oilPlus.addEventListener('click', incrementCounter3);

//   var creamMinus = document.querySelector('#decrementCounter2Creme');
//   creamMinus.addEventListener('click', decrementCounter2);

//   var creamPlus = document.querySelector('#incrementCounter2Creme');
//   creamPlus.addEventListener('click', incrementCounter2);
  

//   var count1 = 0; // Compteur pour la première div initialisé à 0
//   var count2 = 0; // Compteur pour la deuxième div initialisé à 0
//   var count3 = 0; // Compteur pour la troisième div initialisé à 0
//   var totalItems = 0; // Total des articles
//   var totalItemsnbr = 0;
//   var lotion = 9.90; // prix lotion
//   var cream = 10.80; // prix creme
//   var oil = 12; // prix huile

//   var totalItems1 = 0; // Total article lotion
//   var totalItems2 = 0; // Total article creme
//   var totalItems3 = 0; // Total articles huile

//   // Fonction pour incrémenter le compteur et afficher le nombre de clics pour la première div
//   function incrementCounter1() {
//       count1++; // Incrémente le compteur à chaque clic
//       totalItems++; // Incrémente le nombre total d'articles
//       totalItemsnbr++; // Incrémente le nombre total d'articles
//       var result = lotion * count1;
//       document.querySelector("#lotion").innerText = result.toFixed(2) + " €"; // Met à jour le contenu de l'élément <p>
//       updateTotal(); // Met à jour le total

//       totalItems1++; // nbre artcile +
//       document.querySelector("#count1").innerText = totalItems1;
//   }

//   // Fonction pour décrémenter le compteur et afficher le nombre de clics pour la première div
//   function decrementCounter1() {
//       if (count1 > 0) { // Vérifie si le compteur est supérieur à zéro pour éviter les nombres négatifs
//           count1--; // Décrémente le compteur
//           totalItems--; // Décrémente le nombre total d'articles
//           totalItemsnbr--; // Décrémente le nombre total d'articles
//           var result = lotion * count1;
//           document.querySelector("#lotion").innerText = result.toFixed(2) + " €"; // Met à jour le contenu de l'élément <p>
//           updateTotal(); // Met à jour le total

//           totalItems1--; // nbre article -
//           document.querySelector("#count1").innerText = totalItems1;
//       }
//   }

//   // Fonction pour incrémenter le compteur et afficher le nombre de clics pour la deuxième div
//   function incrementCounter2() {
//       count2++;
//       totalItems++;
//       totalItemsnbr++;
//       var result = oil * count2;
//       document.querySelector("#huile").innerText = result.toFixed(2) + " €";
//       updateTotal();

//       totalItems3++;
//       document.querySelector("#count3").innerText = totalItems3;
//   }

//   // Fonction pour décrémenter le compteur et afficher le nombre de clics pour la deuxième div
//   function decrementCounter2() {
//       if (count2 > 0) {
//           count2--;
//           totalItems--;
//           totalItemsnbr--;
//           var result = oil * count2;
//           document.querySelector("#huile").innerText = result.toFixed(2) + " €";
//           updateTotal();

//           totalItems3--;
//           document.querySelector("#count3").innerText = totalItems3;
//       }
//   }

//   // Fonction pour incrémenter le compteur et afficher le nombre de clics pour la troisième div
//   function incrementCounter3() {
//       count3++;
//       totalItems++;
//       totalItemsnbr++;
//       var result = cream * count3;
//       document.querySelector("#creme").innerText = result.toFixed(2) + " €";
//       updateTotal();

//       totalItems2++;
//       document.querySelector("#count2").innerText = totalItems2;
//   }

//   // Fonction pour décrémenter le compteur et afficher le nombre de clics pour la troisième div
//   function decrementCounter3() {
//       if (count3 > 0) {
//           count3--;
//           totalItems--;
//           totalItemsnbr--;
//           var result = cream * count3;
//           document.querySelector("#creme").innerText = result.toFixed(2) + " €";
//           updateTotal();

//           totalItems2--;
//           document.querySelector("#count2").innerText = totalItems2;
//       }
//   }

//   // Fonction pour mettre à jour le total des trois montants
//   function updateTotal() {
//       var total = (lotion * count1) + (oil * count2) + (cream * count3);
//       document.querySelector("#totalItems").innerText = totalItems;
//       document.querySelector("#totalItemsNbr").innerText = "Nombre d'articles " + totalItemsnbr;
//       document.querySelector("#total").innerText = "Total: " + total.toFixed(2) + " €";
//   }




//   // var removeLotion = document.querySelector("#lotionRemove");
//   // removeLotion.addEventListener('click', fctRemoveLotion);
//   // function fctRemoveLotion() {
//   //   count1 = 0;
//   //   updateTotal();
//   // }
//   // pour mettre à 0 et retirer tout de la lotion si on appuie sur remove FAIRE POUR TOUS LES PRODUITS !!!

var siBoutique = document.querySelector('.boutique');
if (siBoutique) {
  // carousel boutique lotion//////////////////////////////////////////////////////////////////////////////////////////
  document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector(".carousel");
    let items = carousel.querySelectorAll(".item");

    // Event listeners for buttons
    document.querySelector(".prev").addEventListener("click", () => {
      let activeIndex = [...items].findIndex((item) =>
        item.classList.contains("active")
      );
      let prevIndex = (activeIndex - 1 + items.length) % items.length;
      showItem(prevIndex);
    });

    document.querySelector(".next").addEventListener("click", () => {
      let activeIndex = [...items].findIndex((item) =>
        item.classList.contains("active")
      );
      let nextIndex = (activeIndex + 1) % items.length;
      showItem(nextIndex);
    });

    function showItem(index) {
      items.forEach(item => item.classList.remove("active", "prev", "next"));
      items[index].classList.add("active");
      items[(index - 1 + items.length) % items.length].classList.add("prev");
      items[(index + 1) % items.length].classList.add("next");
    }
  });

  // carousel boutique cream///////////////////////////////////////////
  document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector(".carousel2");
    let items = carousel.querySelectorAll(".item2");

    // Event listeners for buttons
    document.querySelector(".prev2").addEventListener("click", () => {
      let activeIndex = [...items].findIndex((item) =>
        item.classList.contains("active")
      );
      let prevIndex = (activeIndex - 1 + items.length) % items.length;
      showItem(prevIndex);
    });

    document.querySelector(".next2").addEventListener("click", () => {
      let activeIndex = [...items].findIndex((item) =>
        item.classList.contains("active")
      );
      let nextIndex = (activeIndex + 1) % items.length;
      showItem(nextIndex);
    });

    function showItem(index) {
      items.forEach(item => item.classList.remove("active", "prev2", "next2"));
      items[index].classList.add("active");
      items[(index - 1 + items.length) % items.length].classList.add("prev2");
      items[(index + 1) % items.length].classList.add("next2");
    }
  });

  // carousel boutique lotion///////////////////////////////////////////
  document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector(".carousel3");
    let items = carousel.querySelectorAll(".item3");

    // Event listeners for buttons
    document.querySelector(".prev3").addEventListener("click", () => {
      let activeIndex = [...items].findIndex((item) =>
        item.classList.contains("active")
      );
      let prevIndex = (activeIndex - 1 + items.length) % items.length;
      showItem(prevIndex);
    });

    document.querySelector(".next3").addEventListener("click", () => {
      let activeIndex = [...items].findIndex((item) =>
        item.classList.contains("active")
      );
      let nextIndex = (activeIndex + 1) % items.length;
      showItem(nextIndex);
    });

    function showItem(index) {
      items.forEach(item => item.classList.remove("active", "prev3", "next3"));
      items[index].classList.add("active");
      items[(index - 1 + items.length) % items.length].classList.add("prev3");
      items[(index + 1) % items.length].classList.add("next3");
    }
  });

}


var totalItems = 0;
var totalPrix = 0;
var siBoutique = document.querySelector('.boutique');
if (siBoutique) {
  var ListArticle = [];
  var BoutonArticle = document.querySelectorAll(".BoutonChaqueArticle");
  BoutonArticle.forEach((elementBoutton) => elementBoutton.addEventListener('click', () => article(elementBoutton)));
  updatePanier();
}
function article(HTMLArticle){
  var nomArticle =  HTMLArticle.name;
  var prixArticle = HTMLArticle.value;
  var actionArticle = HTMLArticle.textContent;
  var returnIDList = ListArticle.map(e => e.name).indexOf(nomArticle);

  if(returnIDList == -1){//non present dans la liste
    const newArticle = { name : nomArticle ,prix : prixArticle , nb : 0 }
    ListArticle.push(newArticle);
    returnIDList = ListArticle.map(e => e.name).indexOf(nomArticle);
  }

  if(actionArticle == "+"){
      ListArticle[returnIDList].nb += 1;
  }
  else if(actionArticle == "Remove"){
    ListArticle[returnIDList].nb = 0;
  }
  else if(actionArticle == "-"){
    if(ListArticle[returnIDList].nb > 0){
      ListArticle[returnIDList].nb -= 1;
    }
  }
  updatePanier();

}


function updateNbAndPrice(article){
  var nameArticleToUpdate = article.name;
  var htmlPriceArticle = document.getElementsByName(nameArticleToUpdate+' Price')[0];
  var htmlCountArticle = document.getElementsByName(nameArticleToUpdate+' Count')[0];
  var sommeArticle = article.prix * article.nb ;
  htmlPriceArticle.innerText = sommeArticle.toFixed(2)+" €";
  htmlCountArticle.innerText  = article.nb;

}

function updatePanier(){
  totalItems = 0;
  totalPrix = 0;
  ListArticle.map(e => e.nb).forEach((elementnb) => totalItems += elementnb);
  ListArticle.forEach((article) => totalPrix += article.prix * article.nb);
  totalPrix = totalPrix.toFixed(2);
  document.querySelector("#total").innerText = totalPrix + " €";
  document.querySelector("#totalItems").innerText = totalItems;
  ListArticle.forEach((article) => updateNbAndPrice(article));

  if(totalItems > 0){
    document.querySelector("#goForm").disabled=false;
  }
  else{
    document.querySelector("#goForm").disabled=true;

  }

}


// accordéon //////////////////////////////////////////////////

var siAccordion = document.querySelector(".accordion");
if (siAccordion) {
  document.querySelectorAll(".accordion__item").forEach((item) => {
    item.querySelector(".accordion__item .header").addEventListener("click", () => {
      item.classList.toggle("accordion__item--open");
    });
  });
}




var siBoutique = document.querySelector('.boutique');
if (siBoutique) {
  document.querySelector("#goForm").addEventListener("click",() => BOOM());
}
function BOOM(){
  document.querySelector("#HTMLID").innerHTML = `
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <!-- Open Graph data -->
        <meta property ="og:site_name" content="julieducarne">
        <meta property ="og:title" content="Beauty Angel, sublimez votre beauté">
        <meta property ="og:description" content="Pour révéler votre beauté naturelle, choisissez Beauty Angel">
        <meta property ="og:type" content="website">
        <meta property ="og:url" content="https://julieducarne.be/projets/beauty_angel">
        <meta property ="og:image" content="https://julieducarne.be/projets/beauty_angel/assets/images/tout.jpg">
        <meta property ="og:image:width" content="280">
        <meta property ="og:image:height" content="280">
    
        <link rel="icon" type="image/x-icon" href="assets/images/logo-beauty-angel.png">
        <title>Paiement</title>
    
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Radio+Canada:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">
    
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
        <link rel="stylesheet" href="styles/style.css">
        <script src="https://unpkg.com/scrollreveal"></script>
        <script src="scripts/app.js" defer></script>
    </head>
<body>
    <main class="formpayMain">
        <header class="header">
            <a href="index.html"><img class="header__logo" src="assets/images/logo-removed2.png" alt="logo Beauty Angel"></a>
    
            <nav class="navbar">
                <div class="navbar__all">
                    <a href="index.html" class=" navbar__link">Home</a>
                    <a class="navbar__link" href="soins.html">Guide Beauty</a>
                    <a class="navbar__link navbar__link--active" href="boutique.html">Boutique</a>
                    <a class="navbar__link" href="quiz.html">Test</a>
                </div>      
            </nav>
            <p><i class="fa-solid fa-bars" id="menu-icon"></i></p>
        </header>
        <section class="recapBoutique"> 
            <h1 class="title">Récapitulatif</h1>
            <table class="recapBoutique__table" id="tableauRecap">
                <thead>
                    <tr>
                        <th>Nom de l'article</th>
                        <th>Quantite</th>
                        <th>Prix unitaire</th>
                    </tr>
                </thead>
                <tbody id="bodytable">


                </tbody>
            </table>
        </section>

        <section class="other payer">
            <h2 class="titreh2">Paiement express</h2>
            <ul class="other__list">
                <li>
                    <a href="https://www.paypal.com/fr/home" target="_blank"><p><i class="fa-brands fa-cc-paypal other__icon"></i></p>
                    </a>
                    
                </li>
                <li>
                    <a href="https://www.apple.com/fr/apple-pay/"><p><i class="fa-brands fa-apple-pay other__icon"></i></p>
                    </a>
                </li>
                
            </ul>
            <p class="other__line">ou</p>
        </section>

        <section class="contact payer">
            <h2 class="titreh2">Contact</h2>
            <div>
                <label class="contact__label label" for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="abc@xyz.com" required>
                <div class="error iffault hidden">
                    <p class="text-error">Veuillez entrer une adresse mail valide</p>
                </div>
            </div>
            <div class="contact__labelAll">
                <input class="contact__news" type="checkbox" id="offres" value="Offres" name="globalite" checked="checked">
                <label class="label" for="offres">Envoyer des mails avec des nouvelles et des offres</label>
            </div>
        </section>

        <section class="payment payer">
            <h2 class="titreh2">Paiement</h2>
            <p class="payment__intro">Toutes les transactions sont sécurisées et cryptées.</p>

            <div class="payment__all">
            <!-- crédit -->
                <div id="div__credit" class="credit payment__sort"> 
                    <div class="credit__intro payment__sort--partial">
                        <div class="credit__label">
                            <input class="input-radio1 radio-js" type="radio" id="credit" value="credit" name="globalite" checked>
                            <label class="label label__cursor" for="credit">Carte de crédit</label>
                        </div>
                        <div class="credit__icon">
                            <p><i class="fa-brands fa-cc-visa"></i></p>
                            <p><i class="fa-brands fa-cc-mastercard"></i></p>
                            <p><i class="fa-brands fa-cc-discover"></i></p>
                        </div>
                    </div>

                    <div id="credit__hidden" class="hidden">
                        <div class="credit__infos">
                            <label class="label" for="numc">Numéro de carte*</label>
                            <input type="text" id="numc" name="numc" placeholder="XXXX XXXX XXXX XXXX" required>
                        </div>
                        <div class="error iffault2 hidden">
                            <p>Veuillez remplir ce champ</p>
                        </div>
                            <div>
                                <div class="credit__infos">
                                    <label class="label" for="exp">Date d'expiration*</label>  
                                    <input type="text" id="exp" name="exp" placeholder="MM/AA" required>
                                    <div class="error iffault3 hidden">
                                        <p>Veuillez remplir ce champ</p>
                                    </div>
                                </div>
                                <div class="credit__infos">
                                    <label class="label" for="cvc">Code de sécurité CVC*</label>
                                    <input type="text" id="cvc" name="cvc" placeholder="123" required>
                                    <div class="error iffault4 hidden">
                                        <p>Veuillez remplir ce champ</p>
                                    </div>
                                </div>
                            </div>
                            <div class="credit__infos">
                                <label for="cartname">Nom sur la carte*</label>
                                <input type="text" id="cartname" name="cartname" placeholder="Charles Lacour" required>
                                <div class="error iffault5 hidden">
                                    <p>Veuillez remplir ce champ</p>
                                </div>
                            </div>
                        
                    </div>  
                </div>

                <!-- paypal -->
                <div id="div__paypal" class="paypal payment__sort">
                    <div class="paypal__intro payment__sort--partial">
                        <div class="paypal__label">
                            <input class="input-radio2 radio-js" type="radio" id="paypal" value="paypal" name="globalite">
                            <label class="label label__cursor" for="paypal">PayPal</label>
                        </div>
                        <i class="fa-brands fa-paypal payment__icon"></i>
                    </div>

                    <div id="paypal__hidden" class="hidden paypal__textes">
                        <p>Après avoir cliqué sur “&#8239;Payer avec PayPal&#8239;” , vous serez redirigé vers PayPal pour finaliser votre achat en toute sécurité.</p>
                        <a class="payement__link" href="https://www.paypal.com/fr/home" target="_blank">Payer avec PayPal</a>
                    </div> 
                </div>

                <!-- applepay -->
                <div id="div__applepay" class="applepay payment__sort">
                    <div class="applepay__intro payment__sort--partial">
                        <div class="applepay__label">
                            <input class="input-radio2 radio-js" type="radio" id="applepay" value="applepay" name="globalite">
                            <label class="label label__cursor" for="applepay">ApplePay</label>
                        </div>
                        <i class="fa-brands fa-apple-pay payment__icon"></i>
                    </div>

                    <div id="applepay__hidden" class="applepay__textes hidden">
                        <p>Après avoir cliqué sur “&#8239;Payer avec ApplePay&#8239;”, vous serez redirigé vers ApplePay pour finaliser votre achat en toute sécurité.</p>
                        <a class="payement__link" href="https://www.apple.com/fr/apple-pay/">Payer avec ApplePay</a>
                    </div> 
                </div>
            </div>
        </section>


        <section class="cadeau payer">
            <h2 class="titreh2">Pour qui achetez-vous&nbsp;?</h2>
            <div>
                <input class="checkbox-js label__cursor" type="checkbox" id="moi" value="moi" name="cadeau">
                <label class="label label__cursor" for="moi">J'achète pour moi</label>
            </div>
            <div>
                <input class="checkbox-js label__cursor" type="checkbox" id="checkboxAutre" value="autre" name="cadeau">
                <label class="label label__cursor" for="checkboxAutre">J'achète pour offrir</label>
            </div>
            <div class="cadeaux hidden">
                <div>
                    <input class="checkbox-js label__cursor" type="checkbox" id="papiercadeau" value="papiercadeau" name="cadeausupp">
                    <label class="label label__cursor" for="papiercadeau">Je souhaite un emballage cadeau</label>
                </div>
                <div>
                    <input class="checkbox-js label__cursor" type="checkbox" id="petitmot" value="petitmot" name="cadeausupp">
                    <label class="label label__cursor" for="petitmot">Je souhaite laisser un petit mot</label>
                </div>
                <div class="textarea" id="testrouge">
                    <label class="label" for="message">Écrivez votre message ici (facultatif)</label>
                    <textarea class="cadeau__textarea" name="message" id="message"></textarea>
                    <div id="counterCar" class="counterCar">100 caractères restants</div>
                </div>
            </div>
        </section>



        <section class="billing payer">
            <h2 class="titreh2">Adresse de facturation</h2>
            <div class="all">
                <div class="billing__all--label">
                    <label class="label" for="pays">Pays</label>
                    <select class="billing__input billing__input--pays" name="pays" id="pays">
                        <option value="Belgique">Belgique</option>
                        <option value="France">France</option>
                        <option value="Espagne">Espagne</option>
                        <option value="Italie">Italie</option>
                        <option value="Allemagne">Allemagne</option>
                    </select>
                </div>

                <div>
                    <div class="billing__all--label">
                        <label class="label" id="label__firstname"  for="firstname">Prénom*</label>
                        <input class="billing__input" type="text" id="firstname" name="firstname" placeholder="Albert" required>
                        <div class="error iffault6 hidden">
                            <p>Veuillez remplir ce champ</p>
                        </div>
                    </div>
                    <div class="billing__all--label">
                        <label class="label" id="label__name" for="name">Nom*</label>
                        <input class="billing__input" type="text" id="name" name="name" placeholder="Jacquard" required>
                        <div class="error iffault7 hidden">
                            <p>Veuillez remplir ce champ</p>
                        </div>
                    </div>
                </div>
                <div class="billing__all--label">
                    <label class="label" for="adresse">Adresse*</label>
                    <input class="billing__input" type="text" id="adresse" name="adresse" placeholder="4, Rue des Coquelicots" required>
                    <div class="error iffault8 hidden">
                        <p>Veuillez remplir ce champ</p>
                    </div>
                </div>
                <div>
                    <div class="billing__all--label">
                        <label class="label" id="label__tel" for="postal">Code postal*</label>
                        <input class="billing__input" type="text" id="postal" name="postal" placeholder="1234" required>
                        <div class="error iffault9 hidden">
                            <p>Veuillez remplir correctement ce champ</p>
                        </div>
                    </div>
                    <div class="billing__all--label">
                        <label class="label" id="label__ville" for="ville">Ville*</label>
                        <input class="billing__input" type="text" id="ville" name="ville" placeholder="Villejean" required>
                        <div class="error iffault10 hidden">
                            <p>Veuillez remplir ce champ</p>
                        </div>
                    </div>
                </div>
                <div class="billing__all--label">
                    <label class="label" for="tel">Tel.</label>
                    <input class="billing__input" type="tel" id="tel" name="tel" placeholder="01020304">
                    <div class="error iffault11 hidden">
                        <p>Veuillez remplir correctement ce champ</p>
                    </div>
                </div>
                <button class="btn btnjs" id="btnjs">Payer</button>

                <div class="loadingSpinner hidden" id="loadingSpinner"></div>
                <div class="hidden" id="thankYouMessage">
                    <p>Nous vous remercions de votre achat. Votre commande sera livrée d'ici 5 jours.</p>
                </div>
                
            </div>
        </section>

    </main>

    <section class="entreprise">
        <div class="entreprise__top">
            <img class="entreprise__logo" src="assets/images/logo-removed2.png" alt="logo Beauty Angel">
            <div class="entreprise__nav">
                <a href="index.html" class="entreprise__link">Home</a>
                <a class="entreprise__link" href="soins.html">Guide Beauty</a>
                <a class="entreprise__link" href="boutique.html">Produits</a>
                <a class="entreprise__link" href="quiz.html">Test</a>
            </div>
        </div>
        <div class="entreprise__all">
            <div class="entreprise__flex">
                <div class="entreprise__about">
                    <p class="entreprise__soustitre">À propos de Beauty Angel</p>
                    <p class="entreprise__txt">Notre histoire commence avec la passion de redéfinir les normes de la beauté en favorisant une approche naturelle et respectueuse de l'environnement. Chaque produit que nous créons est imprégné de cette philosophie, offrant à nos clients une expérience unique et bienveillante.</p>
                </div>
                <div class="entreprise__legal">
                    <p class="entreprise__soustitre">Mentions légales</p>
                    <ul class="entreprise__list">
                        <li class="entreprise__txt">5, Somewhere Street<br>Anywhere, France</li>
                        <li class="entreprise__txt">01/23.45.67</li>
                        <li class="entreprise__txt">beauty_angel@gmail.com</li>
                        <li class="entreprise__txt"><a href="#">Conditions générales de ventes</a></li>
                        <li class="entreprise__txt"><a href="#">Cookies</a></li>
                    </ul>
                </div>
                <div class="entreprise__pay">
                    <p class="entreprise__soustitre">Paiements acceptés</p>
                    <div class="entreprise__icons entreprise__icons--pay">
                        <i class="icon__pay fa-brands fa-cc-paypal"></i>
                        <i class="icon__pay fa-brands fa-cc-visa"></i>
                        <i class="icon__pay fa-brands fa-cc-apple-pay"></i>
                        <i class="icon__pay fa-brands fa-cc-discover"></i>
                        <i class="icon__pay fa-solid fa-credit-card"></i>
                    </div>
                </div>
                <div class="entreprise__infos">
                    <p class="entreprise__soustitre">Infos</p>
                    <p class="entreprise__txt"><i class="fa-solid fa-truck icon__info"></i> Livraison offerte</p>
                    <p class="entreprise__txt"><i class="fa-brands fa-gratipay icon__info"></i> Satisfait ou remboursé</p>
                    <p class="entreprise__txt"><i class="fa-solid fa-right-left icon__info"></i> Retour gratuit sous 15j</p>       
                </div>
            </div>
        </div>
        <div class="entreprise__bottom">
            <p class="entreprise__txt">© Copyright 2024 Beauty Angel | All&nbsp;Rights&nbsp;Reserved</p>
            <ul class="entreprise__icons entreprise__icons--social">
                <li class="icon__social fa-brands fa-facebook"><a href="#"></a></li>
                <li class="icon__social fa-brands fa-x-twitter"><a href="#"></a></li>
                <li class="icon__social fa-brands fa-pinterest"><a href="#"></a></li>
                <li class="icon__social fa-brands fa-instagram"><a href="#"></a></li>
            </ul>
        </div>
    </section>

    <footer class="footer">
        <ul class="footer__contact">
            <li class="footer__el">
                <small><a class="footer__link" href="https://julieducarne.be">© 2024 Julie DUCARNE </a></small>
            </li>
            <li class="footer__el">
                <small><a class="footer__link" href="https://dwt.heaj.be/">DWT</a></small>
            </li>
            <li class="footer__el">
                <small><a class="footer__link" href="credits.html">Crédits</a></small>
            </li>
        </ul>

        <div class="footer__icon">
            <ul class="footer__list">
                <li class="footer__el">
                    <a target="_blank" href="https://www.instagram.com/angelvibes_dwt/">
                        <p><i class="fa-brands fa-instagram footer__icon"></i></p>
                    </a>
                </li>
                <li class="footer__el">
                    <a target="_blank" href="https://github.com/jj-dcrn">
                        <p><i class="fa-brands fa-github footer__icon"></i></p>
                    </a>
                </li>
                <li class="footer__el">
                    <a target="_blank" href="https://www.youtube.com/@Angelvibes_dwt">
                        <p><i class="fa-brands fa-youtube footer__icon"></i></p>
                    </a>
                </li>

            </ul>
        </div>
    </footer>
</body>  
  `
  document.querySelector("#HTMLID").scrollIntoView({behavior: 'instant'});

  ListArticle.forEach((article) => AddPanier(article) );
  document.querySelector("#bodytable").innerHTML += '<tr><td class="recapBoutique__total">prix total</td><td></td><td>'+totalPrix+' €'+'</td></tr>'
  
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');


if(menuIcon) {
  menuIcon.addEventListener('click', Navnav);
} 
function Navnav() {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('navbar__link--active');
    
};

  
// Paiement //////////////////////////////////////////////////
var siPayform = document.querySelector(".formpayMain");
  if (siPayform) {
    
    document.querySelectorAll(".radio-js").forEach(radio => {
      radio.addEventListener('change', () =>Radio());
    });

    // afficher la classe css et le text hidden si coché
    
    function Radio(){
      var checkbox1 = document.querySelector("#credit");
      var checkbox2 = document.querySelector("#paypal");
      var checkbox3 = document.querySelector("#applepay");
      var divcredit = document.querySelector("#div__credit");
      var creditHide = document.querySelector("#credit__hidden");
    
      var divpaypal = document.querySelector("#div__paypal");
      var paypalHide = document.querySelector("#paypal__hidden");
    
      var divapplepay = document.querySelector("#div__applepay");
      var applepayHide = document.querySelector("#applepay__hidden");
    
      if (checkbox1.checked==true){  
        divcredit.classList.add('payment__sort--checked');
        creditHide.classList.remove("hidden");
      }
      else{
        if (divcredit.classList.contains("payment__sort--checked")){
          divcredit.classList.remove('payment__sort--checked');
          creditHide.classList.add("hidden");
        }
      }
    
    
      if (checkbox2.checked==true){  
        divpaypal.classList.add('payment__sort--checked');
        paypalHide.classList.remove("hidden");
      }
      else{
        if (divpaypal.classList.contains("payment__sort--checked")){
          divpaypal.classList.remove('payment__sort--checked');
          paypalHide.classList.add("hidden");
        }
      }
    
      if (checkbox3.checked==true){  
        divapplepay.classList.add('payment__sort--checked');
        applepayHide.classList.remove("hidden");
      }
      else{
        if (divapplepay.classList.contains("payment__sort--checked")){
          divapplepay.classList.remove('payment__sort--checked');
          applepayHide.classList.add("hidden");
        }
      }
    }
    
    function VerificationForm(){
    
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const telPattern= /^[0-9]{8}$/;
    const onlyNumberPattern = /\d+/;
    const onlyLetterAndTiretSpacePattern = /[a-zA-Z- ]+/;
    const codeCvcPattern = /[0-9]{3}/;
    const datePattern = /[0-9]{2}\/[0-9]{2}/;
    
    
    var checkbox1 = document.querySelector("#credit");
    
    var inputEmail = document.querySelector("#email");
    var faute = document.querySelector(".iffault");
    var faute2 = document.querySelector(".iffault2");
    var faute3 = document.querySelector(".iffault3");
    var faute4 = document.querySelector(".iffault4");
    var faute5 = document.querySelector(".iffault5");
    
    var faute6 = document.querySelector(".iffault6");
    var faute7 = document.querySelector(".iffault7");
    var faute8 = document.querySelector(".iffault8");
    var faute9 = document.querySelector(".iffault9");
    var faute10 = document.querySelector(".iffault10");
    var faute11 = document.querySelector(".iffault11");
    
    var inputCarte = document.querySelector("#numc");
    var inputExp = document.querySelector("#exp");
    var inputCvc = document.querySelector("#cvc");
    var inputNamecarte = document.querySelector("#cartname");
    
    var inputFirstname = document.querySelector("#firstname");
    var inputName = document.querySelector("#name");
    var inputAdress = document.querySelector("#adresse");
    var inputPostal = document.querySelector("#postal");
    var inputVille = document.querySelector("#ville");
    var inputTel = document.querySelector("#tel");
    
    var submitOK = true;
    
    
    //email
    if (inputEmail.value!="" && inputEmail.value.match(emailPattern)){
      if (inputEmail.classList.contains("error")==true){
        inputEmail.classList.remove("error");
        faute.classList.add("hidden");
      }
    }
    else {
      if (inputEmail.classList.contains("error")==false){
        inputEmail.classList.add("error");
        faute.classList.remove("hidden");
      }
      submitOK = false;
    }
    
    
    
    if(checkbox1.checked==true){
      //numéro de carte
      if (inputCarte.value!="" && inputCarte.value.match(onlyNumberPattern)){
        if (inputCarte.classList.contains("error")==true){
          inputCarte.classList.remove("error");
          faute2.classList.add("hidden");
        }
      }
      else {
        if (inputCarte.classList.contains("error")==false){
          inputCarte.classList.add("error");
          faute2.classList.remove("hidden");
        }
      submitOK = false;
        
      }
    
      // date d'expiration
      if (inputExp.value!="" && inputExp.value.match(datePattern)){
        if (inputExp.classList.contains("error")==true){
          inputExp.classList.remove("error");
          faute3.classList.add("hidden");
        }
      }
      else {
        if (inputExp.classList.contains("error")==false){
          inputExp.classList.add("error");
          faute3.classList.remove("hidden");
        } 
      submitOK = false;
      }
    
      // cvc 
      if (inputCvc.value!="" && inputCvc.value.match(codeCvcPattern)){
        if (inputCvc.classList.contains("error")==true){
          inputCvc.classList.remove("error");
          faute4.classList.add("hidden");
        }
      }
      else {
        if (inputCvc.classList.contains("error")==false){
          inputCvc.classList.add("error");
          faute4.classList.remove("hidden");
        } 
      submitOK = false;
      }
    
      //nom sur la carte
      if (inputNamecarte.value!="" && inputNamecarte.value.match(onlyLetterAndTiretSpacePattern)){
        if (inputNamecarte.classList.contains("error")==true){
          inputNamecarte.classList.remove("error");
          faute5.classList.add("hidden");
        }
      }
      else {
        if (inputNamecarte.classList.contains("error")==false){
          inputNamecarte.classList.add("error");
          faute5.classList.remove("hidden");
        } 
      submitOK = false;
      }
    }
    
    
      //billing prenom 
      if (inputFirstname.value!="" && inputFirstname.value.match(onlyLetterAndTiretSpacePattern)){
        if (inputFirstname.classList.contains("error")==true){
          inputFirstname.classList.remove("error");
          faute6.classList.add("hidden");
        }
      }
      else {
        if (inputFirstname.classList.contains("error")==false){
          inputFirstname.classList.add("error");
          faute6.classList.remove("hidden");
        } 
        submitOK = false;
      }
    
    
      //billing nom 
      if (inputName.value!="" && inputName.value.match(onlyLetterAndTiretSpacePattern)){
        if (inputName.classList.contains("error")==true){
          inputName.classList.remove("error");
          faute7.classList.add("hidden");
        }
      }
      else {
        if (inputName.classList.contains("error")==false){
          inputName.classList.add("error");
          faute7.classList.remove("hidden");
        } 
      submitOK = false;
      }
    
    
      //billing adresse 
      if (inputAdress.value!=""){
        if (inputAdress.classList.contains("error")==true){
          inputAdress.classList.remove("error");
          faute8.classList.add("hidden");
        }
      }
      else {
        if (inputAdress.classList.contains("error")==false){
          inputAdress.classList.add("error");
          faute8.classList.remove("hidden");
        } 
      submitOK = false;
      }
    
      
      //billing code postal 
      if (inputPostal.value!="" && inputPostal.value.match(onlyNumberPattern)){
        if (inputPostal.classList.contains("error")==true){
          inputPostal.classList.remove("error");
          faute9.classList.add("hidden");
        }
      }
      else {
        if (inputPostal.classList.contains("error")==false){
          inputPostal.classList.add("error");
          faute9.classList.remove("hidden");
        } 
      submitOK = false;
      }
    
        
      //billing ville 
      if (inputVille.value!="" && inputVille.value.match(onlyLetterAndTiretSpacePattern)){
        if (inputVille.classList.contains("error")==true){
          inputVille.classList.remove("error");
          faute10.classList.add("hidden");
        }
      }
      else {
        if (inputVille.classList.contains("error")==false){
          inputVille.classList.add("error");
          faute10.classList.remove("hidden");
        } 
      submitOK = false;
      }
    
      //num de tel 
      if (inputTel.value.trim() !== ("") && inputTel.value.match(telPattern)){
        if (inputTel.classList.contains("error")==true){
          inputTel.classList.remove("error");
          faute11.classList.add("hidden");
        }
      }
      else {
        if (inputTel.classList.contains("error")==false){
          inputTel.classList.add("error");
          faute11.classList.remove("hidden");
        }
        submitOK = false;
      }
      
    
      if (submitOK = true) {
    
    
    
      // pour faire apparaitre l'anim et le message merci après click sur le bouton 
    
      document.querySelector("#btnjs").addEventListener('click', function() {
        var loadingSpinner = document.querySelector('#loadingSpinner');
        var thankYouMessage = document.querySelector('#thankYouMessage');
    
        loadingSpinner.classList.remove("hidden");
    
        setTimeout(function() {
          loadingSpinner.classList.add("hidden");
          thankYouMessage.classList.remove("hidden");
    
        }, 2000);
      });
      }
    }


  // afficher propositions si on demande offrir
    function Cadeau(){
    var checkCadeau = document.querySelector("#checkboxAutre");
    var cadeauHide = document.querySelector(".cadeaux");
    
    if (checkCadeau.checked==true){
      cadeauHide.classList.remove("hidden");
      
    }else {
        cadeauHide.classList.add("hidden");
    }
    }
    
    Radio();
  
    

    document.querySelector("#checkboxAutre").addEventListener('change', () =>Cadeau());
    
    // vérification forms 
    var doFunction = document.querySelector("#btnjs");
    doFunction.addEventListener('click', () => VerificationForm());

    //document.addEventListener("DOMContentLoaded", function() {
      const textarea = document.querySelector("#message");
      const countercar = document.querySelector("#counterCar");
      const maxLength = 99;
      textarea.addEventListener("input", function() {
          const remainingLength = maxLength - textarea.value.length +1;
        
          // Affichage du compteur
          if (remainingLength === 1) {
              countercar.textContent = "1 caractère restant";
          } else if (remainingLength === 0) {
              countercar.textContent = "0 caractère restant";
          } else {
              countercar.textContent = remainingLength + " caractères restants";
          }
    
          // Changement de couleur du compteur
          if (remainingLength <= 10) {
              countercar.style.color = "red";
          } else {
              countercar.style.color = ""; // Réinitialise la couleur du texte
          }
    
          // Empêcher l'utilisateur d'écrire si le nombre de caractères restants est inférieur ou égal à 0
          if (remainingLength <= 0) {
              textarea.value = textarea.value.slice(0, maxLength);
          }
      });
    //});
    
  } 


}

function AddPanier(item){

  var tableauPanier = document.querySelector("#bodytable");
  if(item.nb > 0){

    tableauPanier.innerHTML+= "<tr><td>"+item.name+"</td><td>"+item.nb+"</td><td>"+item.prix+"</td></tr>";
  }
}

