// animação das estrelas
(function () {
    let container = document.getElementById('star-container');
    container.innerHTML = '';

    const count = 80;
    const stars = [];

    for (let i = 0; i < count; i++) {
        const s = document.createElement('div');
        s.className = 'star';

        const x = Math.random() * 100;
        const y = Math.random() * 100;

        const isStatic = Math.random() < 0.3;
        const z = isStatic ? 0 : 0.2 + Math.random() * 0.6;
        const size = isStatic ? 1 + Math.random() : 1 + Math.random() * 2;

        s.style.left = x + '%';
        s.style.top = y + '%';
        s.style.width = size + 'px';
        s.style.height = size + 'px';
        s.style.setProperty('--duration', (2 + Math.random() * 4) + 's');
        s.style.animationDelay = (Math.random() * 5) + 's';

        container.appendChild(s);
        stars.push({ el: s, initialY: y, speed: z });
    }

    //scroll
    //scroll
    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                const scroll = window.scrollY;

                stars.forEach(star => {
                    if (star.speed === 0) return;

                    let pos = (star.initialY - (scroll * star.speed * 0.05)) % 100;
                    if (pos < 0) pos += 100;
                    star.el.style.top = pos + '%';
                });
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

})();