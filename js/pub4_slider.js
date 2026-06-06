(() => {
const images4pub = [
    "images/img_publication/pic4_1.png",
    "images/img_publication/pic4_2.png",
    "images/img_publication/pic4_3.png",
    "images/img_publication/pic4_4.png",
    "images/img_publication/pic4_5.png",
];

let current = 0;
const Pub4Image = document.getElementById("publication-image4");

setInterval(() => {
    current = (current + 1) % images4pub.length;
    Pub4Image.src = images4pub[current];
}, 5000); // 5000 ms = 5 seconds

})();
