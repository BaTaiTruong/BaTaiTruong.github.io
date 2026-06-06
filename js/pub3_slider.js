(() => {
const images3pub = [
    "images/img_publication/pic3_1.png",
    "images/img_publication/pic3_2.png",
    "images/img_publication/pic3_3.png",
    "images/img_publication/pic3_4.png",
    "images/img_publication/pic3_5.png",
];

let current = 0;
const Pub3Image = document.getElementById("publication-image3");

setInterval(() => {
    current = (current + 1) % images3pub.length;
    Pub3Image.src = images3pub[current];
}, 13000); // 5000 ms = 5 seconds

})();
