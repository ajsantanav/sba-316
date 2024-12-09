// Object to make 
const xmasObj = {
    season: "winter",
    christmas: ["Ornaments", "Pine trees", "Gift", "Snow", "Coca Cola", "lights"],
    foods: ["Eggnog", "Candy cane", "Gingerbread cookies", "Ham", "Christmas Bread"]
}

// Variables
let slideIdx = 0;
const navEl = document.querySelector('nav');

// //Nav Bar
navEl.style.backgroundColor = "#00243F";

// //Body

// for() {

// }

//calls function otherwise wont show images
slideShow()

// SlideShow Function
function slideShow() { 
    //calls variables
    let i;
    let slides = document.getElementsByClassName('slideShow');
    //sets i to 0, counters the length of how many 'slideShow' exist', increases by 1
    for(i = 0; i < slides.length; i++) {
        //sets the slide display to none for all in a loop
        slides[i].style.display = "none";
    }
    //
    slideIdx++;
    // checks if the number is bigger than 2 so send it back to the beginning
    if (slideIdx > slides.length) {
        slideIdx = 1
    }
    //sets the image in order of div index 1st lights 1 - 1 = 0, then spirits, last trees styles to block
    slides[slideIdx - 1].style.display = "block";
    setTimeout(slideShow, 8000)
}