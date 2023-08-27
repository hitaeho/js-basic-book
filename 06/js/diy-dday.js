var firstDay = new Date("2023-08-01");
var now = new Date();

var toNow = firstDay.getTime();
var toFirst = now.getTime();

var PassedDay = Math.round((toFirst - toNow) / (60*60*24*1000));

document.querySelector("#accent").innerText = PassedDay + "일";

function calcDate(days){
    var future = days*(24*60*60*1000) + toFirst;
    var someDay = new Date(future);
    var year = someDay.getFullYear();
    var month = someDay.getMonth()+1;
    var date = someDay.getDay();

    document.querySelector("#date" + days).innerText = year + "년" + month + "월" + date + "일";
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

console.log(toNow);
console.log(toFirst);

