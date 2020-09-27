var buildingBlock = document.querySelector("#currentDay");

buildingBlock.innerHTML = moment();

var saveButtons = document.querySelectorAll(".save")

for(i=0;i<saveButtons.length;i++){
    saveButtons[i].addEventListener("click",function(event){
        event.preventDefault();
       var savedValue= event.target.PreviousElementSibling.value
       localStorage.setItem(event.target.parentElement.id,savedValue)

    })
}

/*
instructions:

1. build out all of the divs in the HTML file, from 9am to 5pm

2. save the value of the textareas into the corresponding localstorage

3. set up a for loop that automatically fills the textareas with the information from localstorage, if it exists. hint: 
var lcoalStarageData = localStorage.getItem("data") || []

4. set up if statements for if the current time is less than or greater than the time in the id of the div. if it's the past, add the past class. if the future, add the future class
how to do this:
document.querySelector("#insertNameOfElementHere").classList.add("past") OR .classList.remove("past"), future, whatever



*/