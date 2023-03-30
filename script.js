

const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
const selectedIndex = null;

imageIndexes.forEach (i => {
    const image = document.createElement('img');
    image.alt = `Image of sneaker ${i}`;
    image.src = `/images/${i}.jpg`;
    // image.addEventListener('click', () => {

    // });
    gallery.appendChild(image);
})

