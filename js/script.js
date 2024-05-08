// script.js
window.addEventListener('scroll', function() {
    var sideNav = document.getElementById('side-nav');
    var scrollPosition = window.scrollY;

    // 980でside-navを表示する
    if (scrollPosition >= 980) {
        sideNav.style.display = 'block';
    } else {
        sideNav.style.display = 'none';
    }
});
