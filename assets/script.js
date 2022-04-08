// shows current date
$("#currentDay").text(moment().format("MMM Do YY"));
// set button function
$(".saveBtn").on("click", function(){
// variables for time and text input
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
// save items to local storage
    localStorage.setItem(time, text);
})
// Get saved data from local storage
$("#time9 .description").val(localStorage.getItem("time9"));
$("#time10 .description").val(localStorage.getItem("time10"));
$("#time11 .description").val(localStorage.getItem("time11"));
$("#time12 .description").val(localStorage.getItem("time12"));
$("#time13 .description").val(localStorage.getItem("time13"));
$("#time14 .description").val(localStorage.getItem("time14"));
$("#time15 .description").val(localStorage.getItem("time15"));
$("#time16 .description").val(localStorage.getItem("time16"));
$("#time17 .description").val(localStorage.getItem("time17"));

// function to implement hour identifier
function checkHours() {
    var currentHour = moment().hour();
    $(".time-block").each(function() {
        var hourBlock = parseInt($(this).attr("id").split("time")[1]);
// if/else statements to style hour blocks
        if (hourBlock < currentHour){
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (hourBlock == currentHour){
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
checkHours();