const styleSwitchToggle = document.querySelector('.style-switcher-toggler');
const styleSwitch = document.querySelector('.style-switcher');

styleSwitchToggle.onclick = () =>{
    // alert("Hello");
    styleSwitch.classList.toggle("open");

}
// hide toggle while Scrolling
window.onscroll = () =>
{
    if(styleSwitch.classList.contains("open"))
    {
        styleSwitch.classList.remove("open");
    }
}

// Theme Colors 
const alternateStyles =  document.querySelectorAll('.alternate-style');

// console.log(alternateStyles);
function setActiveStyle(color) {

    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled",true);
        }
    });
    
}

// Dark And Light Themes
const dayNight = document.querySelector(".day-night");

dayNight.onclick = () =>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
}
window.onload = () =>{
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
}