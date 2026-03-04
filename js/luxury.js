document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('lux-nav');
    const menuToggle = document.getElementById('lux-menu-toggle');
    const menu = document.getElementById('lux-mobile-menu');
    const heroSection = document.querySelector('.luxe-hero, .rooms-hero');

    const updateNavState = () => {
        if (!nav) return;

        if (window.scrollY > 24) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }

        if (!heroSection) return;

        const heroRect = heroSection.getBoundingClientRect();
        const navHeight = nav.offsetHeight || 0;
        const heroStillBehindNav = heroRect.top <= navHeight && heroRect.bottom > navHeight + 8;

        nav.classList.toggle('nav-over-dark', heroStillBehindNav);
    };

    updateNavState();
    window.addEventListener('scroll', updateNavState, { passive: true });
    window.addEventListener('resize', updateNavState, { passive: true });

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('is-open');
            const expanded = menu.classList.contains('is-open');
            menuToggle.setAttribute('aria-expanded', String(expanded));
        });

        menu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                menu.classList.remove('is-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        },
        { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            const targetId = anchor.getAttribute('href');
            if (!targetId || targetId === '#') return;
            const target = document.querySelector(targetId);
            if (!target) return;

            event.preventDefault();
            const navHeight = nav ? nav.offsetHeight + 12 : 0;
            const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

    const heroBackground = document.querySelector('.hero-bg');
    if (heroBackground) {
        window.addEventListener(
            'scroll',
            () => {
                const y = Math.min(window.scrollY * 0.12, 80);
                heroBackground.style.transform = `translateY(${y}px)`;
            },
            { passive: true }
        );
    }
});
