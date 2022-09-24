let saveButton = $(".saveBtn");

$(document).ready(function() {
    currentDay = moment().format("MMM/DD/YYYY");
    $("#currentDay").text(currentDay);
  
    function currentTime() {
      var current = moment().hours();
      var time = $(".time-block");
  
      time.each(function(){
          var hour= parseInt($(this).attr('id'))
          if (hour===current){
              $(this).children('.col-sm-10').attr("class", "present col-sm-10 description")
          } else if (current > hour){
            $(this).children('.col-sm-10').attr("class", "past col-sm-10 description")
          } else {
            $(this).children('.col-sm-10').attr("class", "future col-sm-10 description")
          }
      })
    }
    currentTime();
    saveButton.on("click",function(event){
        event.preventDefault()
        var text= $(this).siblings(".col-sm-10").val().replace(key)
        var key = $(this).parent().attr("id")

        localStorage.setItem(key, JSON.stringify(text))
    })
    $("#9 textarea").val(JSON.parse(localStorage.getItem("9")))
    $("#10 textarea").val(JSON.parse(localStorage.getItem("10")))
    $("#11 textarea").val(JSON.parse(localStorage.getItem("11")))
    $("#12 textarea").val(JSON.parse(localStorage.getItem("12")))
    $("#13 textarea").val(JSON.parse(localStorage.getItem("13")))
    $("#14 textarea").val(JSON.parse(localStorage.getItem("14")))
    $("#15 textarea").val(JSON.parse(localStorage.getItem("15")))
    $("#16 textarea").val(JSON.parse(localStorage.getItem("16")))
    $("#17 textarea").val(JSON.parse(localStorage.getItem("17")))
})



// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
