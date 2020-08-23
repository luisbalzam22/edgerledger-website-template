// Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
      document.querySelector('.fixed-navigation').style.opacity = 0.9;
    } else {
      document.querySelector('.fixed-navigation').style.opacity = 1;
    }
  });
  
  
  // Smooth Scrolling

  jQuery('#navbar a, a.btn, a.logo-link').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      jQuery('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 55
        },
        600
      );
    }
  });