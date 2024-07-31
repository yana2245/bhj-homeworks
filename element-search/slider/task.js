const sliders = Array.from(document.querySelectorAll('.slider__item'));
const prevButton = document.querySelector('.slider__arrow_prev');
const nextButton = document.querySelector('.slider__arrow_next');
const dots = Array.from(document.querySelectorAll('.slider__dot'));

let currentSlide = 0;

function updateSlides() {
    sliders.forEach((slide, index) => {
        slide.classList.toggle('slider__item_active', index === currentSlide);
    });
    updateDots();
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('slider__dot_active', index === currentSlide);
    });
}
function goToSlide(index) {
    if (index < 0) {
        currentSlide = sliders.length - 1; // возвращаемся на последний слайд
    } else if (index >= sliders.length) {
        currentSlide = 0; // переходим на первый слайд
    } else {
        currentSlide = index; // переходим на указанный слайд
    }
    updateSlides();
}

// Регистрация обработчиков событий с использованием метода onclick
prevButton.onclick = () => {
    goToSlide(currentSlide - 1);
}
nextButton.onclick = () => {
    goToSlide(currentSlide + 1);
}

dots.forEach((dot, index) => {
    dot.onclick = () => {
        currentSlide = index; // устанавливаем текущий слайд по индексу точки
        updateSlides(); // обновляем слайды и точки
    };
});