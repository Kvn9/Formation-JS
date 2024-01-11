// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)


// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

/*const mousemouve = document.querySelector(".mouse");

window.addEventListener("mousemove", function(e) {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";

    mouse1.style.top = e.pageY + "px";
    mouse1.style.left = e.pageX + "px";

    mouse2.style.top = e.pageY + "px";
    mouse2.style.left = e.pageX + "px";
});*/

const mouses = document.querySelectorAll(".mouse");
window.addEventListener("mousemove",  (e) => {
 mouses.forEach(mouse => {
    mouse.style.top = e.pageY + "px";
    mouse.style.left = e.pageX + "px";
 });
});

