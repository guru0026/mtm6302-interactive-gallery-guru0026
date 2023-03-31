

const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
const selectedIndex = null;
const caption = document.getElementById('caption');

imageIndexes.forEach (i => {
    // const thumbnail = gallery.innerHTML = (`<div class="thumb"><img src="/images/${i}.jpg" alt="Image of sneaker ${i}"></div>`);
    // const thumbnail = gallery.innerHTML = (`<div class="thumb"></div>`);
    // gallery.appendChild(thumbnail)
    const image = document.createElement('img');
    image.alt = `This is an enlarged image of sneaker ${i}`;
    image.src = `/images/${i}.jpg`;
    image.classList.add('galleryImg');
    // image.class = `thumb`
    image.addEventListener('click', () => {
        popup.style.transform = `translateY(0)`;
        selectedImage.src = `/images/${i}.jpg`;
        selectedImage.alt = `This is an enlarged image of sneaker ${i}`;
        caption.textContent = selectedImage.alt;
    });
    gallery.appendChild(image);
});

popup.addEventListener('click', () => {
    popup.style.transform = `translateY(-500%)`;
    // popup.style.display = `none`;
    popup.src = '';
    popup.alt = '';
    // caption.textContent = '';
});

