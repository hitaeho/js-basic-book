function Book(title, author, volume, price){
    this.title = title;
    this.author = author;
    this.volume = volume;
    this.price = price;

}
var html = new Book("웹 표준의 정석", "Ko", "608", "25,000");
var youtube = new Book("유튜브 영상 만들기", "킴", "368", "22,000");
var python = new Book("점프 투 파이썬", "박", "468", "24,000");

var boolList = [html, youtube, python]

document.write("<h1>책 제목 출력하기</h1>");
for(var i=0; i<boolList.length; i++){
    document.write("<p>" + boolList[i].title + "</p>");
}