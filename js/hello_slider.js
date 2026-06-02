const images = [
    "images/img_hello/pic1.png",
    "images/img_hello/pic2.png",
    "images/img_hello/pic3.png",
    "images/img_hello/pic4.png"
];

let current = 0;
const heroImage = document.getElementById("hero-image");

setInterval(() => {
    current = (current + 1) % images.length;
    heroImage.src = images[current];
}, 5000); // 5000 ms = 5 seconds
