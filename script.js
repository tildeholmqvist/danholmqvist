function openPopup(imageSrc) {
    const popupImage = document.querySelector('.popup-image');
    popupImage.src = imageSrc;
    const enlargedImagePopup = new bootstrap.Modal(document.getElementById('enlargedImagePopup'));
    enlargedImagePopup.show();
}

function closePopup() {
    document.getElementById('enlargedImagePopup').style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling on the body
    var backdrop = document.getElementsByClassName('modal-backdrop');
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].parentNode.removeChild(backdrop[i]);
    }
}


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

    var thirdCarousel = document.querySelector('#carouselExampleIndicators');
    var thirdCarouselInstance = new bootstrap.Carousel(thirdCarousel, {
        interval: 5000,
        wrap: true
    });

const artworkContainers = document.querySelectorAll('.artwork-container');

artworkContainers.forEach(container => {
    container.addEventListener('click', () => {
        const artworkImage = container.querySelector('.card-img-top').src;
        openPopup(artworkImage);
    });
});
});