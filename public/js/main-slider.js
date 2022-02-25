window.addEventListener('DOMContentLoaded', function() {

    //////MAIN SLIDER//////

    const slide = document.querySelectorAll('.slide');

    let active = 0;

    function changeSlide() {
        slide[active].classList.remove('slide_active');
        if (active + 1 === slide.length) {
            active = 0;
        } else {
            active++;
        }
        slide[active].classList.add('slide_active');
    }

    setInterval(changeSlide,7000);
    //////// /.MAIN SLIDER  ////////////

});