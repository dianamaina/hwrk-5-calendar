function hourUpdater() {  var currentHour = moment().hours();

// loop over time blocks
$(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
    // check if we've moved past this time
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } 
    else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } 
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
  }
var buildingBlock = document.querySelector("#presentDay");
var buildingBlock = document.querySelector("#Past");
var buildingBlock = document.querySelector("#present");
var buildingBlock = document.querySelector("#future");

buildingBlock.innerHTML = moment();

var saveButtons = document.querySelectorAll(".save")

for(i=0;i<saveButtons.length;i++){
    saveButtons[i].addEventListener("click",function(event){
        event.preventDefault();
       var savedValue= event.target.PreviousElementSibling.value
       localStorage.setItem(event.target.parentElement.id,savedValue)

    })
}
hourUpdater();

$(document).ready(function() {listen for save button clicks $(".saveBtn").on("click", function() {get nearby values var value = $(this).siblings(".description").val(); var time = $(this).parent().attr("id");

// save in localStorage
var lcoalStarageData = localStorage.getItem("data")
localStorage.setItem(time, value);
});
$("#hour-9 .description").val(localStorage.getItem("hour-9")); 
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13")); 
$("#hour-14 .description").val(localStorage.getItem("hour-14")); 
$("#hour-15 .description").val(localStorage.getItem("hour-15")); 
$("#hour-16 .description").val(localStorage.getItem("hour-16"));   
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

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