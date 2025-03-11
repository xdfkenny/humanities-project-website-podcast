document.addEventListener('DOMContentLoaded', () => {
    // Get all sections and nav buttons
    const sections = document.querySelectorAll('main > section');
    const navButtons = document.querySelectorAll('.nav-button');

    // Function to update active section
    const updateActiveSection = () => {
        const hash = window.location.hash || '#inicio';
        
        sections.forEach(section => section.classList.remove('active'));
        navButtons.forEach(button => button.classList.remove('active'));
        
        const currentSection = document.querySelector(hash);
        const currentButton = document.querySelector(`[href="${hash}"]`);
        
        if (currentSection) {
            currentSection.classList.add('active');
        }
        if (currentButton) {
            currentButton.classList.add('active');
        }
    };

    // Listen for hash changes
    window.addEventListener('hashchange', updateActiveSection);
    
    // Initial load
    updateActiveSection();

    // Language translations
    const translations = {
        en: {
            title: "The Soundscape of Slavery: Voices of Resilience and Resistance",
            nav: {
                home: "Home",
                podcast: "Podcast",
                context: "Historical Context",
                reflection: "Reflection",
                credits: "Credits"
            },
            hero: {
                description: "This project explores the transformative power of sound in the lives of enslaved people in America, focusing on spiritual music and work songs."
            },
            podcast: {
                title: "Soundscapes of Suffering and Survival",
                about: "In this episode, we explore how spirituals and work songs were an integral part of enslaved people's lives.",
                listen: "Listen to Our Podcast",
                transcript: "Transcript"
            },
            context: {
                title: "Historical Context",
                subtitle: "The Power of Sound in Slavery",
                description: "Sound was a fundamental element in the lives of enslaved people, allowing them to express emotions, tell stories, and often communicate in secret."
            },
            reflection: {
                title: "Personal Reflection",
                content: "This project has allowed me to understand how the power of music transcended the physical and psychological suffering imposed by slavery."
            },
            credits: {
                title: "Credits and Sources"
            },
            footer: {
                rights: "© 2025 The Soundscape of Slavery Project. All rights reserved by Kenny Zhang and Leonardo Merlini."
            }
        },
        es: {
            title: "El Paisaje Sonoro de la Esclavitud: Voces de Resiliencia y Resistencia",
            nav: {
                home: "Inicio",
                podcast: "Podcast",
                context: "Contexto Histórico",
                reflection: "Reflexión",
                credits: "Créditos"
            },
            hero: {
                description: "Este proyecto explora el poder transformador del sonido en la vida de las personas esclavizadas en América, centrándose en la música espiritual y los cantos de trabajo."
            },
            podcast: {
                title: "Paisajes Sonoros del Sufrimiento y la Supervivencia",
                about: "En este episodio, exploramos cómo los espirituales y los cantos de trabajo formaban parte integral de la vida de las personas esclavizadas.",
                listen: "Escucha Nuestro Podcast",
                transcript: "Transcripción"
            },
            context: {
                title: "Contexto Histórico",
                subtitle: "El Poder del Sonido en la Esclavitud",
                description: "El sonido fue un elemento fundamental en la vida de los esclavizados, ya que les permitió expresar emociones, contar historias y, a menudo, comunicarse en secreto."
            },
            reflection: {
                title: "Reflexión Personal",
                content: "Este proyecto me ha permitido comprender cómo el poder de la música trascendió el sufrimiento físico y psicológico impuesto por la esclavitud."
            },
            credits: {
                title: "Créditos y Fuentes"
            },
            footer: {
                rights: "© 2025 El Proyecto del Paisaje Sonoro de la Esclavitud. Todos los derechos reservados por Kenny Zhang y Leonardo Merlini."
            }
        },
        zh: {
            title: "奴隶制的声景：韧性与抵抗的声音",
            nav: {
                home: "首页",
                podcast: "播客",
                context: "历史背景",
                reflection: "反思",
                credits: "致谢"
            },
            hero: {
                description: "本项目探讨声音在美洲被奴役者生活中的变革力量，聚焦于精神音乐和劳动歌曲。"
            },
            podcast: {
                title: "苦难与生存的声景",
                about: "在本期节目中，我们探讨精神歌曲和劳动歌曲如何成为被奴役者生活中不可分割的一部分。",
                listen: "收听我们的播客",
                transcript: "文字记录"
            },
            context: {
                title: "历史背景",
                subtitle: "奴隶制中的声音力量",
                description: "声音是被奴役者生活中的基本要素，使他们能够表达情感，讲述故事，并经常进行秘密交流。"
            },
            reflection: {
                title: "个人反思",
                content: "这个项目让我理解了音乐的力量如何超越奴隶制带来的身心苦难。"
            },
            credits: {
                title: "致谢与来源"
            },
            footer: {
                rights: "© 2025 奴隶制声景项目。Kenny Zhang 和 Leonardo Merlini 保留所有权利。"
            }
        }
    };

    // Function to update page content
    const updatePageContent = (lang) => {
        const t = translations[lang];
        
        // Update title
        document.querySelector('h1').textContent = t.title;
        document.title = t.title;

        // Update navigation
        document.querySelector('[href="#inicio"]').textContent = t.nav.home;
        document.querySelector('[href="#podcast"]').textContent = t.nav.podcast;
        document.querySelector('[href="#contexto"]').textContent = t.nav.context;
        document.querySelector('[href="#reflexion"]').textContent = t.nav.reflection;
        document.querySelector('[href="#creditos"]').textContent = t.nav.credits;

        // Update hero section
        document.querySelector('.hero-description').textContent = t.hero.description;

        // Update podcast section
        document.querySelector('#podcast h2').textContent = t.podcast.title;
        document.querySelector('.episode-content > h3').textContent = t.podcast.about;
        document.querySelector('.podcast-player h2').textContent = t.podcast.listen;

        // Update context section
        document.querySelector('#contexto h2').textContent = t.context.title;
        document.querySelector('#contexto h3').textContent = t.context.subtitle;
        document.querySelector('#contexto > article > p').textContent = t.context.description;

        // Update reflection section
        document.querySelector('#reflexion h2').textContent = t.reflection.title;
        document.querySelector('#reflexion p').textContent = t.reflection.content;

        // Update credits section
        document.querySelector('#creditos h2').textContent = t.credits.title;

        // Update footer
        document.querySelector('footer p').textContent = t.footer.rights;

        // Update HTML lang attribute
        document.documentElement.lang = lang;
    };

    // Language dropdown functionality
    function toggleLanguageDropdown() {
        const dropdownList = document.getElementById('languageDropdown');
        const dropdownIcon = document.querySelector('.dropdown-icon');
        dropdownList.classList.toggle('open');
        dropdownIcon.classList.toggle('open');
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        const dropdown = document.querySelector('.dropdown-container');
        if (!dropdown.contains(e.target)) {
            document.getElementById('languageDropdown').classList.remove('open');
            document.querySelector('.dropdown-icon').classList.remove('open');
        }
    });

    // Handle language selection
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            const lang = item.dataset.lang;
            updatePageContent(lang);
            document.querySelector('.dropdown-button').textContent = item.textContent;
            toggleLanguageDropdown();
        });
    });

    // Set initial language to English
    updatePageContent('en');
    document.querySelector('.dropdown-button').textContent = 'English';
    document.documentElement.lang = 'en';
});

// Add this function to global scope for the onclick handler
function toggleLanguageDropdown() {
    const dropdownList = document.getElementById('languageDropdown');
    const dropdownIcon = document.querySelector('.dropdown-icon');
    dropdownList.classList.toggle('open');
    dropdownIcon.classList.toggle('open');
} 