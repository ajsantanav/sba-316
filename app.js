// Object to make 
const xmasObj = {
    season: "winter",
    christmas: ["Ornaments", "Pine trees", "Gift", "Snow", "Coca Cola", "Lights"],
    foods: ["Eggnog", "Candy cane", "Gingerbread cookies", "Ham", "Christmas Bread"]
}

const navObj = {
    nav: ["Home"],
}
//regular variables
let slideIdx = 0;
// DOM Variables
const navEl = document.querySelector('nav');
const populateList = document.getElementById('list-id');
const buttonPo = document.getElementById('btn-id');
const clearBtn = document.getElementById('clr-id');
const radios = document.getElementById('foods');
const radios2 = document.getElementById('christmas');
const darkMode = document.getElementById('colorChange');
// //Nav Bar
//Button actions
buttonPo.addEventListener('click', getXmas)
clearBtn.addEventListener('click', clearData);
//calls function otherwise wont show images
slideShow()

// navObj.nav.forEach(elm => {
//     const navLi = document.createElement('li');
//     navLi.textContent = elm;
//     navEl.appendChild(navLi)
// })

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
    if(darkMode.textContent === "Dark Mode") {
        darkMode.textContent = "Light Mode";
    }
    else {
        darkMode.textContent = "Dark Mode";
    }
})


function getXmas() {
    populateList.innerHTML = null;
    if(radios.checked) {
        xmasObj.foods.forEach(element => {
            const li = document.createElement('li');
            li.textContent = element;
            console.log(li);
            populateList.appendChild(li)
        });
    }
    else if (radios2.checked) {
        xmasObj.christmas.forEach(element => {
            const li = document.createElement('li');
            li.textContent = element;
            console.log(li);
            populateList.appendChild(li)
        });
    }
    else {
        populateList.innerHTML = null;
    }

}

function clearData() {

    populateList.innerHTML = null;
}

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