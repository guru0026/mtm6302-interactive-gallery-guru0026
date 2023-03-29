const images = [
    {
        src: "images/1.jpg",
        alt: "This is sneaker 1"
    },

    {
        src: "images/2.jpg",
        alt: "This is sneaker 2"
    },
    
    {
        src: "images/3.jpg",
        alt: "This is sneaker 3"
    },

    {
        src: "images/4.jpg",
        alt: "This is sneaker 4"
    },

    {
        src: "images/5.jpg",
        alt: "This is sneaker 5"
    },

    {
        src: "images/6.jpg",
        alt: "This is sneaker 6"
    },

    {
        src: "images/7.jpg",
        alt: "This is sneaker 7"
    },

    {
        src: "images/8.jpg",
        alt: "This is sneaker 8"
    },

    {
        src: "images/9.jpg",
        alt: "This is sneaker 9"
    },

    {
        src: "images/10.jpg",
        alt: "This is sneaker 10"
    },

    {
        src: "images/11.jpg",
        alt: "This is sneaker 11"
    },

    {
        src: "images/12.jpg",
        alt: "This is sneaker 12"
    },

    {
        src: "images/13.jpg",
        alt: "This is sneaker 13"
    },

    {
        src: "images/14.jpg",
        alt: "This is sneaker 14"
    }
]

document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').getElementsByClassName.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
})

document.querySelector('.popup-image img').onclick = () =>{
    document.querySelector('.popup-image').getElementsByClassName.display = 'none';
}