const accordionContainer = document.getElementById("accordionContainer");

accordionContainer.addEventListener("click", function (event) {
   if (event.target.classList.contains("accordion")) {
      const panel = event.target.nextElementSibling;
      panel.style.display = panel.style.display === "block" ? "none" : "block";
   }
});

function submitForm(button) {
   let panel = button.parentNode;
   let spinner = panel.querySelector('.spinner');

   // Показываем спиннер
   spinner.style.display = 'block';

   // Запускаем таймер для скрытия спиннера через 2 секунды
   setTimeout(function () {
      alert('отправлено')
      spinner.style.display = 'none';
   }, 2000);
}
document.addEventListener("DOMContentLoaded", function () {
   let slider = document.querySelector(".slider");
   let slides = slider.querySelectorAll(".slides li");
   let prevButton = slider.querySelector(".prev-button");
   let nextButton = slider.querySelector(".next-button");

   // Индекс текущего слайда
   let currentSlide = 0;
   // Количество отображаемых слайдов
   let visibleSlides = 3;

   // Функция для обновления видимости слайдов
   function updateSlidesVisibility() {
      for (var i = 0; i < slides.length; i++) {
         if (i >= currentSlide && i < currentSlide + visibleSlides) {
            slides[i].style.display = "block";
         } else {
            slides[i].style.display = "none";
         }
      }
   }

   // Обработчик события нажатия на кнопку "Вперед"
   nextButton.addEventListener("click", function () {
      if (currentSlide < slides.length - visibleSlides) {
         currentSlide++;
         updateSlidesVisibility();
      }
   });

   // Обработчик события нажатия на кнопку "Назад"
   prevButton.addEventListener("click", function () {
      if (currentSlide > 0) {
         currentSlide--;
         updateSlidesVisibility();
      }
   });

   // Изначально обновляем видимость слайдов
   updateSlidesVisibility();
});
// Функция для смены цвета машины
function changeCarColor(color) {
   var carPhoto = document.getElementById('carPhoto');

   // Меняем фото машины и обновляем заголовок и описание в зависимости от выбранного цвета
   switch (color) {
      case 'red':
         carPhoto.src = 'car_red.jpg';
         carTitle.textContent = 'Машина красного цвета';
         carDescription.textContent = 'Это машина красного цвета.';
         break;
      case 'blue':
         carPhoto.src = 'car_blue.jpg';
         carTitle.textContent = 'Машина синего цвета';
         carDescription.textContent = 'Это машина синего цвета.';
         break;
      case 'green':
         carPhoto.src = 'car_green.jpg';
         carTitle.textContent = 'Машина зеленого цвета';
         carDescription.textContent = 'Это машина зеленого цвета.';
         break;
      case 'white':
         carPhoto.src = 'car_white.jpg';
         carTitle.textContent = 'Машина белого цвета';
         carDescription.textContent = 'Это машина белого цвета.';
         break;
   }
}

// Функция для обновления текста при изменении слайда салона
interiorSlider.on('afterChange', function (event, slick, currentSlide) {
   switch (currentSlide) {
      case 0:
         carDescription.textContent = 'Это машина красного цвета.';
         break;
      case 1:
         carDescription.textContent = 'Это машина синего цвета.';
         break;
      case 2:
         carDescription.textContent = 'Это машина зеленого цвета.';
         break;
   }
});