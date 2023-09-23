document.addEventListener("DOMContentLoaded", function () {
    const rotators = document.querySelectorAll(".rotator__case");
  
    rotators.forEach(function (rotator) {
      const speed = parseInt(rotator.getAttribute("data-speed")) || 1000;
      const color = rotator.getAttribute("data-color") || "black";
  
      // Функция для смены активного класса между элементами
      function rotate() {
        const activeRotator = document.querySelector(".rotator__case_active");
        activeRotator.classList.remove("rotator__case_active");
  
        // Найти следующий элемент для активации
        const nextRotator =
          activeRotator.nextElementSibling || rotators[0];
        nextRotator.classList.add("rotator__case_active");
  
        // Применить цвет и установить таймер для следующей смены
        activeRotator.style.color = color;
        setTimeout(rotate, speed);
      }
  
      setTimeout(rotate, speed);
    });
  });