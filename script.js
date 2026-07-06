// Micro-interacciones inspiradas en componentes dinámicos de 21st.dev
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efecto sutil de entrada (Fade-in) para las tarjetas del Dashboard
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100); // Efecto cascada
    });

    // 2. Widget Interactivo: Simulación de cambio de estado dinámico (21st.dev UX)
    const widget = document.getElementById('credential-widget');
    if (widget) {
        widget.addEventListener('mouseenter', () => {
            widget.style.borderColor = '#1d4ed8';
            widget.style.cursor = 'pointer';
        });
        
        widget.addEventListener('mouseleave', () => {
            widget.style.borderColor = 'var(--accent)';
        });
    }
});
