const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sideBar = document.querySelector('.sidebar');
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide'); // Получили слайды

const slidesCount = mainSlide.querySelectorAll('div').length; // Получили все слайды в виде массива для перебора

sideBar.style.top = `-${(slidesCount - 1) * 100}vh`; // 100vh на целый экран. Вычисляем небольшой математикой, и получаем слайды

let activeSlideIndex = 0;

upBtn.addEventListener('click', () => {
    changeSlide('up')
})
downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`; // Стили

    sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`; // Стили
}