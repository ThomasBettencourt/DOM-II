
// Mouse Over on nav menu --> Change to red
const nav = document.querySelector(".main-navigation");
nav.addEventListener("mouseover", () => {
    nav.style.backgroundColor = "red";
})
// Mouse Leave on nav menu --> back to white
nav.addEventListener("mouseleave", () => {
    nav.style.backgroundColor = "white";
})

// when mouse enters .intro it dissapears
// CSS .hide class added to make this work
// display: none on anything with class of hide
const header = document.querySelector('.intro');
header.addEventListener("mouseenter", e => {
    e.target.classList.add("hide");
});

// when mouse leaves the area the intro which was named
// header comes back and the display: none is removed.
header.addEventListener("mouseleave", e => {
    e.target.classList.remove("hide");
});

// when window is resized, navigation generates a random color to change to
// this is done with math.random and math.floor resulting in 1 
// which then is multiplied by the total possible colors 
// this number is then turned into a string and saved in a variable
// which is concatenated into a background style with a # and used 
// to change the color
window.addEventListener("resize", () => {
    let header = document.querySelector('.main-navigation');
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    header.style.background = `#${randomColor}`;
});

const firstImage = document.getElementById("first-image");
firstImage.addEventListener("mouseover", () => {
    firstImage.style.borderStyle = "double";
    firstImage.style.border = "2px";
    firstImage.style.borderColor = "red";
})

const bottomButtons = document.querySelector(".btn");
bottomButtons.addEventListener("click", e => {
    console.log("click", e);
    e.target.style.backgroundColor = "red";
    e.target.style.color = "lightblue";
})


const paragraphs = document.querySelectorAll(".destination p");
paragraphs.addEventListener("dblclick", () => {
    paragraphs.style.fontWeight = "bolder";
})