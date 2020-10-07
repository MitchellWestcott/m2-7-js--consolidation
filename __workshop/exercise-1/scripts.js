// 😋


//on mousedown:
//yearnumber text to 2019 with 2019 click
//
//topTenList with associated parameters linked to buttons
//on hover don't display the button text
//items to get:
//id 2018 id 2019 displayarea numID foodID hoverWarning
//numID.innerText = topTenList.2018/2019.[id] ?

let backgroundYear = document.getElementById("bgYear");
let hoverWarn = document.getElementById("hoverWarning");
let yearSelector =  document.getElementById("yearArea");
let theButtons = Array.from(document.getElementsByClassName("numbers"));
let foodName = document.getElementById("foodtype");
foodName.style.display = "none";
let foodNumber = document.getElementById("foodnum");
foodNumber.style.display = "none";

console.log(theButtons);
//logs

document.getElementById("yearone").onclick = function() {
    backgroundYear.innerHTML = 2018;
}

document.getElementById("yeartwo").onclick = function() {
    backgroundYear.innerHTML = 2019;
}

theButtons.forEach((num, index) => {
    num.addEventListener("mouseover", function() {
        hoverWarn.style.display = "none"
        foodName.style.display = "block";
        foodNumber.style.display = "flex";
        foodNumber.innerText = `${index + 1}`;
        foodName.innerText = topTenList[backgroundYear.innerText][index].name;
        
    })
    num.addEventListener("mouseout", function() {
        hoverWarn.style.display = "flex";
        foodNumber.style.display = "none";
        foodName.style.display = "none";
    })
});