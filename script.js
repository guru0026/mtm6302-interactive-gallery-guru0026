

const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
const selectedIndex = null;

imageIndexes.forEach (i => {
    // const thumbnail = gallery.innerHTML = (`<div class="thumb"><img src="/images/${i}.jpg" alt="Image of sneaker ${i}"></div>`);
    // const thumbnail = gallery.innerHTML = (`<div class="thumb"></div>`);
    // gallery.appendChild(thumbnail)
    const image = document.createElement('img');
    image.alt = `Image of sneaker ${i}`;
    image.src = `/images/${i}.jpg`;
    image.classList.add('galleryImg');
    // image.class = `thumb`
    image.addEventListener('click', () => {
        selectedImage.src = `/images/${i}.jpg`;
        selectedImage.alt = `Image of sneaker ${i}`;
    });
    gallery.appendChild(image);
});

popup.addEventListener('click', () => {
    // popup.style.transform = `translateY(-100%)`;
    popup.style.display = `none`;
    popup.src = '';
    popup.alt = '';
});

