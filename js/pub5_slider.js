(() => {
const images5pub = [
    "images/img_publication/pic5_1.png",
    "images/img_publication/pic5_2.png",
    "images/img_publication/pic5_3.png",
    "images/img_publication/pic5_4.png",
    "images/img_publication/pic5_5.png",
];

let current = 0;
const Pub5Image = document.getElementById("publication-image5");

setInterval(() => {
    current = (current + 1) % images5pub.length;
    Pub5Image.src = images5pub[current];
}, 9000); // 5000 ms = 5 seconds

})();
