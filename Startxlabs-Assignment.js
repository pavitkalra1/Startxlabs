
// QUESTION 1

// Get number of hours, minutes and seconds from number of seconds.
// For example :  If number of seconds provided are 129 , then number of hours will be 0 , minutes 2, seconds 9.
// Input :  Number of seconds.
// Output : “Hours = ‘number of hours’, minutes = ‘number of minutes’ , seconds = ‘number of seconds’ ”


var totalSeconds = prompt("Please enter number of seconds", "<seconds go here>");

if(totalSeconds!=null)
{
var hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
var minutes = Math.floor(totalSeconds / 60);
var seconds = totalSeconds % 60;
console.log("Hours="+hours+" "+"Minutes="+minutes+" "+"Seconds="+seconds);
}



