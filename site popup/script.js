// Créer un événement au scroll

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    navbar.style.height = "50px";
  } else{
    navbar.style.height = "100px";
  }

  let scrollValue = 
   (window.scrollY + window.innerHeight) / document.body.offsetHeight;

   if(scrollValue > 0.45) {
     imgImprovise.style.opacity = "1";
     imgImprovise.style.transform = "none";

   }
});


// Faire apparaitre l'image de la partie improvise


// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
