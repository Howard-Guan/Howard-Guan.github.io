let expandFour = document.getElementById('detail-of-introduction');
let expandFive = document.getElementById('detail-of-education');
let expandSix = document.getElementById('detail-of-personality');

let portfolioButton = document.getElementById('portfolio-button');
let educationButton = document.getElementById('education-button');
let personalityButton = document.getElementById('personality-button');

expandFour.hidden = true;
expandFive.hidden = true;
expandSix.hidden = true;

portfolioButton.onclick = function(){
    if(expandFour.hidden === false){
        expandFour.hidden = true;
    }else{
        expandFour.hidden = false;
    }
}

educationButton.onclick = function(){
    if(expandFive.hidden === false){
        expandFive.hidden = true;
    }else{
        expandFive.hidden = false;
    }
}

personalityButton.onclick = function(){
    if(expandSix.hidden === false){
        expandSix.hidden = true;
    }else{
        expandSix.hidden = false;
    }
}