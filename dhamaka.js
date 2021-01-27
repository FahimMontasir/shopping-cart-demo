const iphonePrice = 1200;
const casePrice = 50;
//for iphone
document.getElementById('plusBtn').addEventListener('click', function () {
    getPlusBtnValue('iphoneAmount','iphoneAmountDoller',iphonePrice);
   
    addToCart('iphoneAmountDoller','caseAmountDoller','total','subTotal')
})
document.getElementById('minusBtn').addEventListener('click', function () {
    getMinusBtnValue('iphoneAmount','iphoneAmountDoller',iphonePrice)
   
    addToCart('iphoneAmountDoller','caseAmountDoller','total','subTotal')
})
//for mobile case 
document.getElementById('plusBtn2').addEventListener('click', function () {
    getPlusBtnValue('caseAmount','caseAmountDoller',casePrice);
   
    addToCart('iphoneAmountDoller','caseAmountDoller','total','subTotal')
})
document.getElementById('minusBtn2').addEventListener('click', function () {
    getMinusBtnValue('caseAmount','caseAmountDoller',casePrice);
   
    addToCart('iphoneAmountDoller','caseAmountDoller','total','subTotal')
})



//function for plus button
function getPlusBtnValue(amount,doller,price) {
    const inputNum = parseInt(document.getElementById(amount).value);
    const textNum = parseInt(document.getElementById(doller).innerText);
    const currentInputNum = inputNum + 1 ;
    const currentTextNum = currentInputNum* price;
    document.getElementById(amount).value =currentInputNum ;
    document.getElementById(doller).innerText = currentTextNum;
}
//function for minus button
function getMinusBtnValue(amount,doller,price) {
    const inputNum = parseInt(document.getElementById(amount).value);
    const textNum = parseInt(document.getElementById(doller).innerText);
    const currentInputNum = inputNum - 1 ;
    const currentTextNum = currentInputNum* price;
    document.getElementById(amount).value =currentInputNum ;
    document.getElementById(doller).innerText = currentTextNum;
}
//function for add to cart 
function addToCart(iphonAmountDoller,caseAmountDoller,total,subTotal) {
   const iphonePrice = parseInt(document.getElementById(iphonAmountDoller).innerText);
   const casePrice =  parseInt(document.getElementById(caseAmountDoller).innerText);
   const totalPrice = iphonePrice + casePrice;
   document.getElementById(subTotal).innerText = totalPrice;
   document.getElementById(total).innerText = totalPrice;
}