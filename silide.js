let currentIndex = 0;

function changeSlide() {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    if (currentIndex >= totalSlides  -3) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    document.querySelector('.testimonials_content').style.transform = `translateX(-${currentIndex * (100 / 2.9)}%)`;
}

setInterval(changeSlide, 3000); 
