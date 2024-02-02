window.onscroll = function () {
    if (window.scrollY > (window.innerHeight * 0.60)) {
        // Replace the images when scrolled 65vh down
        document.getElementById("logoImg").src = "../images/Logo Black.svg";
        document.getElementById("burgerImg").src = "../images/Burger Menu Black.svg";
    } else {
        // Reset the images when not scrolled 65vh down
        document.getElementById("logoImg").src = "../images/Logo.svg";
        document.getElementById("burgerImg").src = "../images/Burger Menu.svg";
    }
};