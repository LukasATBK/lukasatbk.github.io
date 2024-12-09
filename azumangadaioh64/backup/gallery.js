    const images = [
        'imgs/screenshotsGallery/osaka1.png',
        'imgs/screenshotsGallery/osaka2.png',
        'imgs/screenshotsGallery/osaka3.png',
        'imgs/screenshotsGallery/osaka4.png',
        'imgs/screenshotsGallery/tomo1.png',
        'imgs/screenshotsGallery/tomo2.png',
        'imgs/screenshotsGallery/tomo3.png',
        'imgs/screenshotsGallery/tomo4.png',
        'imgs/screenshotsGallery/tomo5.png',
        'imgs/screenshotsGallery/kagura1.png',
        'imgs/screenshotsGallery/kagura2.png',
        'imgs/screenshotsGallery/kagura3.png',
        'imgs/screenshotsGallery/chiyo1.png',
        'imgs/screenshotsGallery/chiyo2.png',
        'imgs/screenshotsGallery/chiyo3.png',
        'imgs/screenshotsGallery/chiyo4.png',
        'imgs/screenshotsGallery/sakaki1.png',
        'imgs/screenshotsGallery/sakaki2.png',
        'imgs/screenshotsGallery/sakaki3.png',
        'imgs/screenshotsGallery/yomi1.png',
        'imgs/screenshotsGallery/yomi2.png',
        'imgs/screenshotsGallery/yomi3.png',
        'imgs/screenshotsGallery/kaori1.png',
        'imgs/screenshotsGallery/kaori2.png',
        'imgs/screenshotsGallery/kaori3.png',
        'imgs/screenshotsGallery/kaori4.png',
        'imgs/screenshotsGallery/kaori5.png',
        'imgs/screenshotsGallery/chihiro1.png',
        'imgs/screenshotsGallery/chihiro2.png',
        'imgs/screenshotsGallery/chihiro3.png',
        'imgs/screenshotsGallery/kagurasakaki1.png',
        'imgs/screenshotsGallery/chiyosakaki1.png',
        'imgs/screenshotsGallery/chiyosakaki2.png',
        'imgs/screenshotsGallery/toyomi1.png',
        'imgs/screenshotsGallery/toyomi2.png',
        'imgs/screenshotsGallery/toyomi3.png',
        'imgs/screenshotsGallery/tower1.png',
        'imgs/screenshotsGallery/tower2.png',
        'imgs/screenshotsGallery/tower3.png',
    ];

const container = document.getElementById('slideshow-container');
    const dotsContainer = document.getElementById('dots-container');

    images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.classList.add('slides');
        if (index === 0) slide.classList.add('active');
        const img = document.createElement('img');
        img.src = image;
        img.style.width = '100%';
        slide.appendChild(img);
        container.appendChild(slide);

        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active-dot');
        dot.addEventListener('click', () => currentSlide(index));
        dotsContainer.appendChild(dot);
    });

    let slideIndex = 0;

    function changeSlide(n) {
        const slides = document.getElementsByClassName('slides');
        const dots = document.getElementsByClassName('dot');
        slides[slideIndex].classList.remove('active');
        dots[slideIndex].classList.remove('active-dot');
        slideIndex = (slideIndex + n + slides.length) % slides.length;
        slides[slideIndex].classList.add('active');
        dots[slideIndex].classList.add('active-dot');
    }

    function currentSlide(n) {
        const slides = document.getElementsByClassName('slides');
        const dots = document.getElementsByClassName('dot');
        slides[slideIndex].classList.remove('active');
        dots[slideIndex].classList.remove('active-dot');
        slideIndex = n;
        slides[slideIndex].classList.add('active');
        dots[slideIndex].classList.add('active-dot');
    }
