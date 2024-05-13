function openPopup(imageSrc) {
    const modal = document.getElementById('enlargedImagePopup');
    const popupImage = document.querySelector('.popup-image');
    popupImage.src = imageSrc;
    modal.style.display = 'block';
}

// Function to close the popup modal
function closePopup() {
    const modal = document.getElementById('enlargedImagePopup');
    modal.style.display = 'none';
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

    const artworkContainers = document.querySelectorAll('.artwork-container');
    artworkContainers.forEach(container => {
        container.addEventListener('click', () => {
            const artworkImage = container.querySelector('.card-img-top').src;
            openPopup(artworkImage);
        });
    });

    const closeButton = document.querySelector('#enlargedImagePopup .close');
    closeButton.addEventListener('click', closePopup);
});