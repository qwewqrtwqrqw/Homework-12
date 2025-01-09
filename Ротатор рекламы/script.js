// Инициализация всех ротаторов
document.querySelectorAll('.rotator').forEach((rotator) => {
    const cases = rotator.querySelectorAll('.rotator__case');
  
    let activeIndex = 0; // Индекс активного элемента
    let timeoutId;
  
    function activateNextCase() {
      // Убираем активный класс у текущего элемента
      const currentCase = cases[activeIndex];
      currentCase.classList.remove('rotator__case_active');
  
      // Вычисляем следующий индекс
      activeIndex = (activeIndex + 1) % cases.length;
  
      // Устанавливаем активный класс и параметры для следующего элемента
      const nextCase = cases[activeIndex];
      nextCase.classList.add('rotator__case_active');
      nextCase.style.color = nextCase.dataset.color;
  
      // Устанавливаем таймер на следующую смену
      const speed = parseInt(nextCase.dataset.speed, 10) || 1000;
      timeoutId = setTimeout(activateNextCase, speed);
    }
  
    // Запуск ротатора
    activateNextCase();
  });
  