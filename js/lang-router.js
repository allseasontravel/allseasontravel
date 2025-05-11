// Get selected language from URL
const lang = new URLSearchParams(window.location.search).get('lang') || 'en';

// Define page mappings
const pages = {
    en: {
        home: 'index.html',
        about: 'about.html',
        service: 'service.html',
        package: 'package.html',
        contact: 'contact.html'
    },
    ru: {
        home: 'index_ru.html',
        about: 'about_ru.html',
        service: 'service_ru.html',
        package: 'package_ru.html',
        contact: 'contact_ru.html'
    },
    uz: {
        home: 'index_uz.html',
        about: 'about_uz.html',
        service: 'service_uz.html',
        package: 'package_uz.html',
        contact: 'contact_uz.html'
    }
};

// Update nav links on load
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href.includes('#') || href.startsWith('http')) return;

        let pageKey = '';

        if (href.includes('index')) pageKey = 'home';
        else if (href.includes('about')) pageKey = 'about';
        else if (href.includes('service')) pageKey = 'service';
        else if (href.includes('package')) pageKey = 'package';
        else if (href.includes('contact')) pageKey = 'contact';

        if (pages[lang] && pages[lang][pageKey]) {
            link.setAttribute('href', pages[lang][pageKey] + '?lang=' + lang);
        }
    });
});

// Handle language switch instantly
function switchLang(newLang) {
    const path = window.location.pathname.split('/').pop(); // e.g. "about_ru.html"
    const baseName = path.replace('_ru', '').replace('_uz', '').replace('.html', '');

    const newFile = pages[newLang][baseName] || pages[newLang].home;
    const newUrl = newFile + '?lang=' + newLang;

    window.location.href = newUrl;
}
