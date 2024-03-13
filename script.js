document.addEventListener("DOMContentLoaded", function () {
    var firstCarousel = document.querySelector('#carouselExampleFeatured');
    var firstCarouselInstance = new bootstrap.Carousel(firstCarousel, {
        interval: 5000,
        wrap: true 
    });

    var secondCarousel = document.querySelector('#carouselExampleControls');
    var secondCarouselInstance = new bootstrap.Carousel(secondCarousel, {
        interval: 5000,
        wrap: true 
    });
});
