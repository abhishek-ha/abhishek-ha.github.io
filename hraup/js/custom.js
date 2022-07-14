var currentTab = 0;
var prevButton = document.getElementById("prevBtn");
var nextButton = document.getElementById("nextBtn");

showTab(currentTab);

function showTab(n){
    var x = document.getElementsByClassName("tab");

    x[n].style.display = "block";
    if (n == 0) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "inline-block";
    }

    if (n == (x.length - 2)) {
        nextButton.innerHTML = "Submit";
    } else {
        nextButton.innerHTML = "Next";
    }
    if(n == (x.length-1)){
        nextButton.style.display = "none";
        document.getElementById("prevBtn").style.display = "none";
    }
}



function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    showTab(currentTab);
}




// function skipBtn(n) {
//     var x = document.getElementsByClassName("tab");
//     x[currentTab].style.display = "none";
//     // Increase or decrease the current tab by 1:
//     currentTab = currentTab + 2;
//     showTab(currentTab);
// }




function rangeInc(value){
    document.getElementById('showAge').innerHTML = value+1;
}


function rangeSlide(value, min, max) {
    document.getElementById('showAge').innerHTML = value;
    // document.getElementById('showHeight').innerHTML = value;
    applyFill(value, min, max, 'showAgeSlider');
}

const settings={
    fill: '#FFFFFF',
    background: '#969696'
} 

function applyFill(value, min, max, ele) {
    // Let's turn our value into a percentage to figure out how far it is in between the min and max of our input
    const percentage = 100*(value-min)/(max-min);
    // now we'll create a linear gradient that separates at the above point
    // Our background color will change here
    const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
    document.getElementById(ele).style.background = bg;
    console.log("ewewew",ele )
}
  



function weightSlide(value, min, max){
    document.getElementById('showWeight').innerHTML = value;
    applyFill(value, min, max, 'showWeightSlider');
}

function addInSlider(id, min, max){
    let range = document.getElementById(`${id}Slider`);
    let value = parseInt(range.value);
    let finalValue = value+1 > max ? max : value+1;
    console.log("valyes", value, max, finalValue)
    range.value = finalValue;
    document.getElementById(id).innerHTML = finalValue; 
    applyFill(finalValue, min, max, `${id}Slider`);
}

function decInSlider(id, min, max){
    let range = document.getElementById(`${id}Slider`);
    let value = parseInt(range.value);
    let finalValue = value-1 < min ? min : value-1;
    console.log("valyes", value, max, finalValue)
    range.value = finalValue;
    document.getElementById(id).innerHTML = finalValue; 
    applyFill(finalValue, min, max, `${id}Slider`);
}
function addInHeight(){
    let range = document.getElementById(`showHeightSlider`);
    let value = parseInt(range.value);
    let finalValue = value+1 > 120 ? 120 : value+1;
    console.log("valyes", value, 120, finalValue)
    range.value = finalValue;
    document.getElementById('showFeet').innerHTML = Math.floor(finalValue/12);
    document.getElementById('showInch').innerHTML = finalValue%12;  
    applyFill(finalValue, 12, 120, `showHeightSlider`);
}

function decInHeight(){
    let range = document.getElementById(`showHeightSlider`);
    let value = parseInt(range.value);
    let finalValue = value-1 < 12 ? 12 : value-1;
    console.log("valyes", value, finalValue)
    range.value = finalValue;
    document.getElementById('showFeet').innerHTML = Math.floor(finalValue/12);
    document.getElementById('showInch').innerHTML = finalValue%12; 
    applyFill(finalValue, 12, 120, `showHeightSlider`);
}


function heightSlide(value, min, max) {
    var feet = Math.floor(value/12);
    var inch = value%12;
    document.getElementById('showFeet').innerHTML = feet;
    document.getElementById('showInch').innerHTML = inch;
    applyFill(value, min, max, 'showHeightSlider');
}




