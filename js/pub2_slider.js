(() => {
const images2pub = [
    "images/img_publication/pic2_1.png",
    "images/img_publication/pic2_2.png",
    "images/img_publication/pic2_3.png",
    "images/img_publication/pic2_4.png",
    "images/img_publication/pic2_5.png",
];

let current = 0;
const Pub2Image = document.getElementById("publication-image2");

setInterval(() => {
    current = (current + 1) % images2pub.length;
    Pub2Image.src = images2pub[current];
}, 10000); // 5000 ms = 5 seconds

})();
