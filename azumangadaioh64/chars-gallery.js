document.querySelectorAll('.carousel').forEach((carousel, index) => {
  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const prevButton = carousel.querySelector('.carousel-btn.prev');
  const nextButton = carousel.querySelector('.carousel-btn.next');

  let currentIndex = 0;
  let intervalId; // Para manejar el autoplay

  const updateSlidePosition = () => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  };

  const showNextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
  };

  const showPrevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
  };
    
  // set position and size
  window.addEventListener('resize', updateSlidePosition);

  // Función para iniciar autoplay sincronizado
  const startAutoplay = () => {
    intervalId = setInterval(() => {
      showNextSlide();
    }, 500); // interval in seconds 1000 eq 2secs
  };

  // Sincronizar autoplay para todos los carruseles
  const startGlobalAutoplay = () => {
    const autoplayEvent = new CustomEvent('syncAutoplay');
    window.dispatchEvent(autoplayEvent);
  };

  // Escucha el evento para sincronizar
  window.addEventListener('syncAutoplay', () => {
    clearInterval(intervalId); // Evita que se dupliquen intervalos
    startAutoplay();
  });

  // Iniciar autoplay al cargar
  startGlobalAutoplay();
});
