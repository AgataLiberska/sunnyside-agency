const toggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById(('mobileNavigation'));

toggle.addEventListener('click', e => {
    if (toggle.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
    } else {
        mobileMenu.classList.add('active');
        toggle.classList.add('active');
        toggle.setAttribute('aria-expanded', 'true');

    }
})

