const SRO = {
  init: function() {
    this.configureMobileNavTogglerButtons();
  },
  configureMobileNavTogglerButtons: function() {
    document.querySelectorAll('#sro-mobile-toggler a').forEach(function(toggler) {
      toggler.addEventListener('click', function(event) {
        event.preventDefault();
        const targetElement = document.getElementById("sro-logo-nav");
        if (targetElement.classList.contains('sro-open')) {
          targetElement.classList.add('sro-closed');
          targetElement.classList.remove('sro-open');
        } else {
          targetElement.classList.add('sro-open');
          targetElement.classList.remove('sro-closed');
        }
      });
    });
  }
};

window.addEventListener('load', function() { SRO.init(); });