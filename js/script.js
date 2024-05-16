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
    var screenWidth = window.innerWidth; 

    if (scrollPosition >= 800) {
        footerNavs.forEach(function(nav) {
            nav.style.display = 'block';
        });
    } else {
        footerNavs.forEach(function(nav) {
            nav.style.display = 'none';
        });
    }

    if (screenWidth >= 768) {
        footerNavs.forEach(function(nav) {
            nav.style.display = 'none';
        });
    }
});

// 入力情報の送信
document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault();  // フォームのデフォルトの送信動作を防ぐ
    const company = document.getElementById('company').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const details = document.getElementById('details').value;
    const radioOption = document.querySelector('input[name="radio-option"]:checked').value;

    const formData = {
        radioOption: radioOption,
        company: company,
        name: name,
        email: email,
        phone: phone,
        details: details
    };

    localStorage.setItem('formData', JSON.stringify(formData));
    window.location.href = 'confirm.html';
});

// データ取得後表示、エラーケース
document.addEventListener('DOMContentLoaded', function() {
    const formData = JSON.parse(localStorage.getItem('formData'));
    
    if (formData) {
        document.getElementById('radioOption').textContent = formData.radioOption;
        document.getElementById('company').textContent = formData.company;
        document.getElementById('name').textContent = formData.name;
        document.getElementById('email').textContent = formData.email;
        document.getElementById('phone').textContent = formData.phone;
        document.getElementById('details').textContent = formData.details;
    } else {
        document.getElementById('result').textContent = 'フォームデータが見つかりませんでした。';
    }
});


// チェックボックスtrueでボタン押下可能
function toggleSubmitButton(checkbox) {
    var submitBtn = document.getElementById("submitBtn");
    if (checkbox.checked) {
        submitBtn.classList.add("active");
    } else {
        submitBtn.classList.remove("active");
    }
}