function openPopup(imageSrc) {
    const popupImage = document.querySelector('.popup-image');
    popupImage.src = imageSrc;
    const enlargedImagePopup = new bootstrap.Modal(document.getElementById('enlargedImagePopup'));
    enlargedImagePopup.show();
}

function closePopup() {
    const modal = document.getElementById('enlargedImagePopup');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling on the body
    var backdrop = document.getElementsByClassName('modal-backdrop');
    for (var i = 0; i < backdrop.length; i++) {
        backdrop[i].parentNode.removeChild(backdrop[i]);
    }
}

document.addEventListener("DOMContentLoaded", function () {

    // Initialize carousels
    const firstCarousel = new bootstrap.Carousel(document.querySelector('#carouselExampleFeatured'), {
        interval: 5000, // Adjust interval as needed
        wrap: true
    });

    const secondCarousel = new bootstrap.Carousel(document.querySelector('#carouselExampleControls'), {
        interval: 5000, // Adjust interval as needed
        wrap: true
    });

    const thirdCarousel = new bootstrap.Carousel(document.querySelector('#carouselExampleIndicators'), {
        interval: 5000, // Adjust interval as needed
        wrap: true
    });

    // Attach click event to artwork containers
    const artworkContainers = document.querySelectorAll('.artwork-container');
    artworkContainers.forEach(container => {
        container.addEventListener('click', () => {
            const artworkImage = container.querySelector('.card-img-top').src;
            openPopup(artworkImage);
        });
    });

    // Attach close event to the close button inside the modal
    const closeButton = document.querySelector('#enlargedImagePopup .close');
    closeButton.addEventListener('click', closePopup);
});
