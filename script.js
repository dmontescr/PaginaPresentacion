document.addEventListener('DOMContentLoaded', () => {
    // Manejar el clic en el botón de contactar
    const btnContactar = document.getElementById('btn-contactar');
    
    if (btnContactar) {
        btnContactar.addEventListener('click', () => {
            alert('¡Gracias por tu interés! \n\nPuedes contactarme escribiendo a mi correo electrónico: daniel@ejemplo.com \no llamando al +34 123 456 789.');
        });
    }

    // Scroll suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Restar un poco para el espacio del navbar fijo
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = targetElement.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Pequeña animación para las tarjetas al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        // Inicializar estilos para la animación
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        
        observer.observe(card);
    });
});
