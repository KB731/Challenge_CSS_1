const burgerMenu = document.getElementById("burgerMenu");


function toggleMenu() {
    if (burgerMenu.classList.contains("nav__burgerIcon--animation")) {
        burgerMenu.classList.remove("nav__burgerIcon--animation");
    } else {
        burgerMenu.classList.add("nav__burgerIcon--animation");
    }
}

burgerMenu.addEventListener( "click" , toggleMenu);