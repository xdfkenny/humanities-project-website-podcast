document.addEventListener('DOMContentLoaded', () => {
    // Get all sections and nav buttons
    const sections = document.querySelectorAll('main > section');
    const navButtons = document.querySelectorAll('.nav-button');

    // Function to update active section
    const updateActiveSection = () => {
        // Get current hash or default to #inicio
        const hash = window.location.hash || '#inicio';
        
        // Remove active class from all sections and nav buttons
        sections.forEach(section => section.classList.remove('active'));
        navButtons.forEach(button => button.classList.remove('active'));
        
        // Add active class to current section and nav button
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
}); 
