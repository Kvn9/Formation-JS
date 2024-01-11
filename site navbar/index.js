// Créer un événément au scroll
let lastscroll = 0;

window.addEventListener('scroll', function() {
 
    if (window.scrollY > lastscroll) {
        document.querySelector('nav').style.top = '-100px';
    }else {
        document.querySelector('nav').style.top = '0px';
    }
    lastscroll= window.scrollY;
});


// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

