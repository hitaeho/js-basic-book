var now = new Date();
var nowMili = now.getTime();
console.log(nowMili);

var fDay = new Date("1990-01-09");
var fDayMili = fDay.getTime();
console.log(fDayMili);

var passedTime = nowMili - fDayMili;
console.log(passedTime);
var passedDay = Math.round(passedTime/(1000*60*60*24));
document.querySelector("#accent").innerText = passedDay + "일";

function calcDate(days){
    var future = 
}