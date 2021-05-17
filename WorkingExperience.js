let expandOne = document.getElementById('1st-job');
let expandTwo = document.getElementById('2nd-job');
let expandThree = document.getElementById('3rd-job');

let firstButton = document.getElementById('1st-button');
let secondButton = document.getElementById('2nd-button');
let thirdButton = document.getElementById('3rd-button');

expandOne.hidden = true;
expandTwo.hidden = true;
expandThree.hidden = true;

firstButton.onclick = function(){
    if(expandOne.hidden === false){
        expandOne.hidden = true;
    }else{
        expandOne.hidden = false;
    }
}

secondButton.onclick = function(){
    if(expandTwo.hidden === false){
        expandTwo.hidden = true;
    }else{
        expandTwo.hidden = false;
    }
}

thirdButton.onclick = function(){
    if(expandThree.hidden === false){
        expandThree.hidden = true;
    }else{
        expandThree.hidden = false;
    }
}

