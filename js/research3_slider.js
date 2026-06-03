(() => {
const images = [
    "images/img_research/pic3_1.png",
    "images/img_research/pic3_2.png",
    "images/img_research/pic3_3.png",
    "images/img_research/pic3_4.png",
    "images/img_research/pic3_5.png",
     "images/img_research/pic3_6.png",
];

let current = 0;
const Research3Image = document.getElementById("research-image3");

setInterval(() => {
    current = (current + 1) % images.length;
    Research3Image.src = images[current];
}, 7000); // 5000 ms = 5 seconds
})();