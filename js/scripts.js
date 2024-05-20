/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

   

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


  
    

});
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('explore-button');
    const words = ['Descubre', 'Visita', 'Conoce', 'Participa', 'Aprende', 'Siente'];
    let currentWordIndex = 0;

    function changeButtonText() {
        // Añadir la clase de animación
        button.classList.add('animating');
    
        // Utilizar anime.js para animar el texto saliente
        anime({
            targets: '#explore-button span.text',
            opacity: [1, 0],
            duration: 500,
            easing: 'easeInOutQuad',
            complete: () => {
                // Cambiar el texto una vez que el texto saliente se ha desvanecido
                const textSpan = button.querySelector('span.text');
                textSpan.textContent = words[currentWordIndex];
                currentWordIndex = (currentWordIndex + 1) % words.length;
    
                // Utilizar anime.js para animar el texto entrante
                anime({
                    targets: textSpan,
                    opacity: [0, 1],
                    duration: 500,
                    easing: 'easeInOutQuad',
                    complete: () => {
                        // Quitar la clase de animación una vez que la animación ha terminado
                        button.classList.remove('animating');
                    }
                });
            }
        });
    
        // Utilizar anime.js para animar la capa deslizante
        anime({
            targets: '#explore-button .slide-layer',
            translateX: ['-100%', '100%'],
            easing: 'easeInOutQuad',
            duration: 1000
        });
    }
    

    setInterval(changeButtonText, 3000); // Cambia cada 3 segundos
});


