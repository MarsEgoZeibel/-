document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      const targetClass = this.getAttribute('data-target');
      const targetElement = document.querySelector(`.${targetClass}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  