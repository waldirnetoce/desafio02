// Menu interativo
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('nav');
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Botão de tema escuro/claro
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    // Animação suave ao rolar
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        sections.forEach(sec => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            if (top >= offset && top < offset + height) {
                sec.classList.add('show-animate');
            } else {
                sec.classList.remove('show-animate');
            }
        });
    });
});