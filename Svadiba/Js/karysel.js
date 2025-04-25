document.querySelectorAll('.carousel-container').forEach(container => {
    const track = container.querySelector('.carousel-track');
    const images = track.querySelectorAll('img');
    const dotsContainer = container.querySelector('.dots');
  
    // Очищаем на всякий случай
    dotsContainer.innerHTML = '';
  
    let currentIndex = 0;  // Текущий индекс изображения
  
    images.forEach((_, index) => {
      const dot = document.createElement('div');
      if (index === 0) dot.classList.add('active');  // Начальная активная точка
      dotsContainer.appendChild(dot);
  
      // Перелистывание по клику на точку
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
      });
    });
  
    // Обновление активной точки
    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`; // Переключаем карусель на нужную картинку
      const dots = dotsContainer.querySelectorAll('div');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);  // Меняем активную точку
      });
    }
  
    // Добавление функционала свайпа для мобильных устройств
    let startX = 0;
    let endX = 0;
  
    container.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX; // Запоминаем начальную позицию свайпа
    });
  
    container.addEventListener('touchmove', (e) => {
      endX = e.touches[0].clientX; // Запоминаем позицию при движении
    });
  
    container.addEventListener('touchend', () => {
      const diff = startX - endX; // Разница между начальной и конечной позицией свайпа
  
      if (diff > 50) {
        // Если свайп влево, переключаем карусель
        if (currentIndex < images.length - 1) {
          currentIndex++;
        }
      } else if (diff < -50) {
        // Если свайп вправо, переключаем карусель
        if (currentIndex > 0) {
          currentIndex--;
        }
      }
      updateCarousel();
    });
  });
  