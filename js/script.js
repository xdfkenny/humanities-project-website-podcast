document.addEventListener('DOMContentLoaded', () => {
    // Función para manejar la navegación
    const handleNavigation = () => {
        const hash = window.location.hash || '#home';
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        sections.forEach(section => section.classList.remove('active'));
        navLinks.forEach(link => link.classList.remove('active'));
        
        document.querySelector(hash)?.classList.add('active');
        document.querySelector(`[href="${hash}"]`)?.classList.add('active');
    };

    // Event listeners
    window.addEventListener('hashchange', handleNavigation);
    handleNavigation(); // Inicializar estado

    // Traducciones actualizadas
    const translations = {
        en: {
            title: "Voices of Resistance",
            subtitle: "A podcast about 12 Years a Slave",
            episodeNumber: "EP. 01",
            episodeTitle: "Soundscapes of Suffering and Survival",
            nav: {
                home: "Home",
                episodes: "Episodes",
                context: "Documentation",
                reflection: "Reflection",
                documents: "Documentation"
            },
            navButtons: ["Home", "Episodes", "Context", "Reflection", "Documentation"],
            player: {
                unsupported: "Your browser does not support the audio element."
            },
            footer: "© 2025 Voices of Resistance",
            documents: {
                title: "Documentation",
                buttonText: "View Research Document",
                description: "View our complete research documentation"
            }
        },
        es: {
            title: "Voces de Resistencia",
            subtitle: "Un podcast sobre 12 Years a Slave",
            episodeNumber: "EP. 01",
            episodeTitle: "Paisajes Sonoros del Sufrimiento y la Supervivencia",
            nav: {
                home: "Inicio",
                episodes: "Episodios",
                context: "Documentación",
                reflection: "Reflexión",
                documents: "Documentación"
            },
            navButtons: ["Inicio", "Episodios", "Contexto", "Reflexión", "Documentación"],
            player: {
                unsupported: "Tu navegador no soporta el elemento de audio."
            },
            footer: "© 2025 Voces de Resistencia",
            documents: {
                title: "Documentación",
                buttonText: "Ver Documento de Investigación",
                description: "Ver nuestra documentación completa de investigación"
            }
        },
        zh: {
            title: "抵抗之声",
            subtitle: "关于《为奴十二年》的播客",
            episodeNumber: "第一集",
            episodeTitle: "苦难与生存的声景",
            nav: {
                home: "首页",
                episodes: "剧集",
                context: "文档",
                reflection: "思考",
                documents: "文档"
            },
            navButtons: ["首页", "剧集", "背景", "思考", "文档"],
            player: {
                unsupported: "您的浏览器不支持音频元素。"
            },
            footer: "© 2025 抵抗之声",
            documents: {
                title: "研究文档",
                buttonText: "查看研究文档",
                description: "查看我们的完整研究文档"
            }
        }
    };

    // Función para actualizar el contenido
    const updatePageContent = (lang) => {
        const t = translations[lang];
        
        // Actualizar contenido
        document.querySelector('h1').textContent = t.title;
        document.querySelector('.subtitle').textContent = t.subtitle;
        document.querySelector('.episode-number').textContent = t.episodeNumber;
        document.querySelector('.episode-info h2').textContent = t.episodeTitle;
        
        // Actualizar navegación
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks[0].textContent = t.nav.home;
        navLinks[1].textContent = t.nav.episodes;
        navLinks[2].textContent = t.nav.context;
        navLinks[3].textContent = t.nav.reflection;
        navLinks[4].textContent = t.nav.documents;
        
        // Actualizar botones de navegación
        navLinks.forEach((link, index) => {
            link.textContent = t.navButtons[index];
        });
        
        // Actualizar reproductor
        document.querySelector('.custom-player').setAttribute('title', t.player.unsupported);
        
        // Actualizar pie de página
        document.querySelector('.site-footer p').textContent = t.footer;
        
        // Actualizar textos de documentación
        if (document.querySelector('#documents')) {
            document.querySelector('#documents h2').textContent = t.documents.title;
            document.querySelector('.document-button h3').textContent = t.documents.buttonText;
            document.querySelector('.document-button p').textContent = t.documents.description;
        }
        
        // Actualizar atributo lang del HTML
        document.documentElement.lang = lang;
    };

    // Event listeners para el selector de idioma
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
            const lang = item.dataset.lang;
            updatePageContent(lang);
            document.querySelector('.dropdown-button').textContent = item.textContent;
            toggleLanguageDropdown();
        });
    });

    // Inicializar en inglés
    updatePageContent('en');
});

// Función para toggle del dropdown
function toggleLanguageDropdown() {
    const dropdown = document.getElementById('languageDropdown');
    const icon = document.querySelector('.dropdown-icon');
    dropdown.classList.toggle('open');
    icon.classList.toggle('open');
}

// Cerrar dropdown al hacer clic fuera
document.addEventListener('click', (e) => {
    const container = document.querySelector('.dropdown-container');
    if (!container.contains(e.target)) {
        document.getElementById('languageDropdown').classList.remove('open');
        document.querySelector('.dropdown-icon').classList.remove('open');
    }
});