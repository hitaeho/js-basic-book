var toyRobot = {
    productId:"2188",
    name:"m2",
    price:"25,000",
    madeIn:"Korea",
    quantity:10,
    showStock:function(){
        document.querySelector("#display").innerHTML = this.name + " 제품은 " + this.quantity + " 개 남아있습니다. ";
    },
    showPrice:function(){
        document.querySelector("#display").innerHTML = this.name + " 제품 가격은 " + this.price + " 입니다. ";
    }
}
// toyRobot.showStock();
toyRobot.showPrice();