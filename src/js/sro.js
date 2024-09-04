const SRO = {
  init: function() {
    this.configureMobileNavTogglerButtons();
  },
  configureMobileNavTogglerButtons: function() {
    document.querySelectorAll('#sro-mobile-toggler button').forEach(function(toggler) {
      toggler.addEventListener('click', function() {
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