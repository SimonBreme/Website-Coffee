document.addEventListener("DOMContentLoaded", function() {
    var currentPagePath = decodeURIComponent(window.location.pathname);
    var menuLinks = document.querySelectorAll('.Link_top-nav, .Link_top-nav-black');
    
    menuLinks.forEach(function(link) {
        var linkPath = new URL(link.href).pathname;
        if (linkPath === currentPagePath) {
            link.classList.add('current-page');
        }
    });
});
