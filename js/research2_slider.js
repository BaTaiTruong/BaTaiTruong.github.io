(() => {
const images2re = [
    "images/img_research/pic2_1.png",
    "images/img_research/pic2_2.png",
    "images/img_research/pic2_3.png",
    "images/img_research/pic2_4.png",
    "images/img_research/pic2_5.png",
     "images/img_research/pic2_6.png",
];

let current = 0;
const Research2Image = document.getElementById("research-image2");

setInterval(() => {
    current = (current + 1) % images2re.length;
    Research2Image.src = images2re[current];
}, 10000); // 5000 ms = 5 seconds

})();