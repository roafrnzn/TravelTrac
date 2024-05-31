    var popupViews = document.querySelectorAll('.popup-view');
    var popupBtns = document.querySelectorAll('.popup-btn');
    var closeBtns = document.querySelectorAll('.close-btn');

    //Javascript for quick view button
    var popup = function(popupClick){
        popupViews[popupClick].classList.add('active');
    }

    popupBtns.forEach((popupBtn, i) => {
        popupBtn.addEventListener("click", () => {
            popup(i);
        });
    });

    //Javascript for close button
    closeBtns.forEach((closeBtn) => {
        closeBtn.addEventListener("click", () => {
            popupViews.forEach((popupView) => {
                popupView.classList.remove('active');
            });
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const sliders = document.querySelectorAll('.slider');
    
        sliders.forEach(slider => {
            const slides = slider.querySelector('.slides');
            const prevButton = slider.querySelector('.prev');
            const nextButton = slider.querySelector('.next');
            let index = 0;
    
            const showSlide = (i) => {
                index = (i + slides.children.length) % slides.children.length;
                slides.style.transform = `translateX(${-index * 100}%)`;
            };
    
            prevButton.addEventListener('click', () => showSlide(index - 1));
            nextButton.addEventListener('click', () => showSlide(index + 1));
        });
    });
