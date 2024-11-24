var minifigure = document.querySelector('.minifigure');
var faces = document.querySelector('.faces');
var upperbody = document.querySelector('.upper-body');
var lowerbody = document.querySelector('.lower-body');
var explode =document.querySelector('.explode');
var randomize =document.querySelector('.randomize');
var darkmode = document.querySelector('.darkmode');
var expressionRangeInput = document.querySelector('.expression-range');
var colorRange = document.querySelectorAll('.color-range');
var upperHue = document.getElementById('upper-hue');
var upperSaturation = document.getElementById('upper-saturation');
var upperLightness = document.getElementById('upper-lightness');
var lowerHue = document.getElementById('lower-hue');
var lowerSaturation = document.getElementById('lower-saturation');
var lowerLightness = document.getElementById('lower-lightness');
var buttonval = document.querySelectorAll('.button');
var controlval = document.querySelector('.controls');
var bodyval =document.querySelector('body'); 

explode.addEventListener('click',explodeMinifigure);
randomize.addEventListener('click',randomizeInputs);
darkmode.addEventListener('click',godark);
expressionRangeInput.addEventListener('input',setExpression);

function godark(){
    
    for (var i=0 ; i<buttonval.length ; i++){
        buttonval[i].classList.toggle('newButton');
    }

    controlval.classList.toggle('darkmode');
    bodyval.classList.toggle('newBody');

    if(controlval.classList.contains('darkmode')){
        darkmode.innerHTML = 'Light Mode';
    }else {
        darkmode.innerHTML = 'Dark Mode';
    }
}

for (var i=0 ; i<colorRange.length ; i++){
    colorRange[i].addEventListener('input',setColors);
}

function getRandom(min,max){
    return Math.random()*(max-min)+min;
}

function explodeMinifigure(){
    minifigure.classList.toggle('explode');

    if(minifigure.classList.contains('explode')){
        explode.innerHTML = 'Rebuild';
    }else {
        explode.innerHTML = 'Explode';
    }
};

function randomizeInputs(){
    var randomExp = getRandom(0,5);
    var randomUpperHue = getRandom(0,360);
    var randomUpperSat = getRandom(0,100);
    var randomUpperLight = getRandom(0,90);
    var randomLowerHue = getRandom(0,360);
    var randomLowerSat = getRandom(0,100);
    var randomLowerLight = getRandom(0,90);

    expressionRangeInput.value = randomExp * 100;
    upperHue.value = randomUpperHue;
    upperSaturation.value = randomUpperSat;
    upperLightness.value = randomUpperLight;
    lowerHue.value = randomLowerHue;
    lowerSaturation.value = randomLowerSat;
    lowerLightness.value = randomLowerLight;

    setExpression();
    setColors();
}

function setExpression(){
    var expressionval = parseInt(expressionRangeInput.value);
    faces.style.transform = 'translateX(-' + expressionval +'%)';
};

function setColors(){
    var upperHueval = parseInt(upperHue.value);
    var upperSaturationval = parseInt(upperSaturation.value);
    var upperLightnessval = parseInt(upperLightness.value);
    var lowerHueval = parseInt(lowerHue.value);
    var lowerSaturationval = parseInt(lowerSaturation.value);
    var lowerLightnessval = parseInt(lowerLightness.value);

    upperbody.style.color = 'hsl(' + upperHueval + ',' + upperSaturationval +
    '%,' + upperLightnessval + '%)';
    lowerbody.style.color = 'hsl(' + lowerHueval + ',' + lowerSaturationval +
    '%,' + lowerLightnessval + '%)';
};