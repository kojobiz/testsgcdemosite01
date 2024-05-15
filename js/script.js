// browser side nav
window.addEventListener('scroll', function() {
    var sideNav = document.getElementById('side-nav');
    var scrollPosition = window.scrollY;

    // モバイルサイズの場合、side-navを表示しない
    if (screenWidth <= 768) {
        sideNav.style.display = 'none';
        return; // ここで処理を終了する
    }

    // 980でside-navを表示する
    if (scrollPosition >= 980) {
        sideNav.style.display = 'block';
    } else {
        sideNav.style.display = 'none';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var hamburgerMenuOpen = document.getElementById('hamburgermenu-open');
    var hamburgerMenuClose = document.getElementById('hamburgermenu-close');
    var sideNav = document.querySelector('.sectionMobilenav');

    hamburgerMenuOpen.addEventListener('click', function() {
        sideNav.style.right = '0'; // メニューを表示
    });

    hamburgerMenuClose.addEventListener('click', function() {
        sideNav.style.right = '-100%'; // メニューを隠す
    });
});


// mobile footer nav
window.addEventListener('scroll', function() {
    var footerNavs = document.querySelectorAll('.footer-nav a');
    var scrollPosition = window.scrollY;

    // スクロールが980px以上の場合、footer-navを表示する
    if (scrollPosition >= 800) {
        footerNavs.forEach(function(nav) {
            nav.style.display = 'block';
        });
    } else {
        footerNavs.forEach(function(nav) {
            nav.style.display = 'none';
        });
    }
});
