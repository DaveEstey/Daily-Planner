
$(function () {

  $(".saveBtn").on("click", function (event) {   // TODO: Add a listener for click events on the save button.
    event.preventDefault();
    var textAreaEl = $(this).siblings(".description").val();
    var blockNum = $(this).parents().attr("id");

    localStorage.setItem(blockNum, textAreaEl);

  });
   // TODO: Add code to get any user input that was saved in localStorage and set
  for (var i = 8; i < $(".time-block").length + 8; i++) {
    $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i));
 
    }
 setInterval(function () { // TODO: Add code to display the current date in the header of the page.
    $("#currentDay").text(dayjs());  
    var currentTime = (dayjs().format("H"));
    console.log(currentTime)
    $(".time-block").each(function(index){  // TODO: Add code to apply the past, present, or future class to each time
    if (currentTime > (index+8)) {
      $(this).addClass("past");
      $(this).removeClass("future present");
    } else if (currentTime == (index+8)) {
      $(this).addClass("present");
      $(this).removeClass("future past");
    } else {
      $(this).addClass("future");
      $(this).removeClass("present past");
    }
    });
    
  }, 1000);  

});


  


