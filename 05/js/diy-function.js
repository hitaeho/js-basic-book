
var input1 = prompt("값을 입력하세요.");
var input2 = prompt("더할값을 입력하세요.");

result = diySum(input1, input2);

document.write(result);

function diySum(a, b){
    var sum = 0;
    sum = parseInt(a) + parseInt(b);
    return sum;
}