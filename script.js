let currentDay= document.getElementById("currentday")
//let hour=document.getElementsByClassName("hour")

currentDay= moment().format("MMM/DD/YYYY")
$("#currentDay").text(currentDay);


//=moment().format("h: hh A")
//$(".hour").text()