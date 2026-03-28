// === INICIALIZAR EL CARRUSEL SLICK ===
$(document).ready(function(){
  $('.carousel-aesthetic').slick({
    dots: false, // Sin puntitos de navegación abajo
    infinite: true, // Bucle infinito
    speed: 5000, // Velocidad del movimiento
    autoplay: true, // Se mueve solo
    autoplaySpeed: 0, // Movimiento continuo suave
    cssEase: 'linear', // Efecto lineal de desplazamiento continuo
    slidesToShow: 5, // Cantidad de imágenes que se muestran a la vez en PC
    slidesToScroll: 1, 
    pauseOnHover: true, // Se detiene al pasar el mouse por encima
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 }
      }
    ]
  });
});

