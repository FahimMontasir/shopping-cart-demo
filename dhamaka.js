const iphonePrice = 1200;
const casePrice = 50;
//for iphone
document.getElementById('plusBtn').addEventListener('click', function () {
    getPlusBtnValue('iphoneAmount', 'iphoneAmountdollar', iphonePrice);

    addToCart('iphoneAmountdollar', 'caseAmountdollar', 'total', 'subTotal')
})
document.getElementById('minusBtn').addEventListener('click', function () {
    getMinusBtnValue('iphoneAmount', 'iphoneAmountdollar', iphonePrice)

    addToCart('iphoneAmountdollar', 'caseAmountdollar', 'total', 'subTotal')
})
//for mobile case 
document.getElementById('plusBtn2').addEventListener('click', function () {
    getPlusBtnValue('caseAmount', 'caseAmountdollar', casePrice);

    addToCart('iphoneAmountdollar', 'caseAmountdollar', 'total', 'subTotal')
})
document.getElementById('minusBtn2').addEventListener('click', function () {
    getMinusBtnValue('caseAmount', 'caseAmountdollar', casePrice);

    addToCart('iphoneAmountdollar', 'caseAmountdollar', 'total', 'subTotal')
})



//function for plus button
function getPlusBtnValue(amount, dollar, price) {
    const inputNum = parseInt(document.getElementById(amount).value);
    const currentInputNum = inputNum + 1;
    const currentTextNum = currentInputNum * price;
    document.getElementById(amount).value = currentInputNum;
    document.getElementById(dollar).innerText = currentTextNum;
}
//function for minus button
function getMinusBtnValue(amount, dollar, price) {
    const inputNum = parseInt(document.getElementById(amount).value);
    const currentInputNum = inputNum - 1;
    const currentTextNum = currentInputNum * price;
    document.getElementById(amount).value = currentInputNum;
    document.getElementById(dollar).innerText = currentTextNum;
}
//function for add to cart 
function addToCart(iphoneAmountdollar, caseAmountdollar, total, subTotal) {
    const iphonePrice = parseInt(document.getElementById(iphoneAmountdollar).innerText);
    const casePrice = parseInt(document.getElementById(caseAmountdollar).innerText);
    const totalPrice = iphonePrice + casePrice;
    document.getElementById(subTotal).innerText = totalPrice;
    document.getElementById(total).innerText = totalPrice;
}