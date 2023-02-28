let option1Button = document.querySelector(".button-one");
let option2Button = document.querySelector(".button-two");
let option3Button = document.querySelector(".button-three");
let option1Answer = document.querySelector(".answer-one");
let option2Answer = document.querySelector(".answer-two");
let option3Answer = document.querySelector(".answer-three");

option1Button = function() {
    option1Answer.style.display = "block";
};

option2Button = function() {
    option2Answer.style.display = "block";
};

option3Button = function() {
    option3Answer.style = "background-color:blue";
    option3Answer.style.display = "block";

};