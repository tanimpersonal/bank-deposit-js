const depositAmount= document.getElementById('deposit-amount');
const depositInput= document.getElementById('deposit-value');
const depositButton= document.getElementById('deposit-button');
const currentBalance= document.getElementById('current-amount');
const withdrawAmount= document.getElementById('withdraw-amount');
const withdrawInput= document.getElementById('withdraw-value');
const withdrawButton= document.getElementById('withdraw-button');
let totalDeposit=0;
let totalWithdrawAmount=0;
depositButton.addEventListener('click',function(event){
    // let depositInputValue= depositInput.value;
    let newDepositAmount= depositInput.value;
    depositAmount.innerText= deposit(newDepositAmount);
    depositInput.value= '';
    currentBalance.innerText= depositAmount.innerText;
})
function deposit(newDepositAmount){
    totalDeposit= parseFloat(totalDeposit)+parseFloat(newDepositAmount);
    return totalDeposit;
}

withdrawButton.addEventListener('click',function(event){
    let newWithdrawAmount=withdrawInput.value;
    withdrawAmount.innerText= withdraw(newWithdrawAmount);
    currentBalance.innerText=current(parseFloat(withdrawAmount.innerText));
    withdrawInput.value='';
})

function withdraw(newWithdrawAmount){
    totalWithdrawAmount=parseFloat(totalWithdrawAmount)+parseFloat(newWithdrawAmount);
    return totalWithdrawAmount;
}

function current(withdrawAmount){
    let myCurrentBalance=parseFloat(currentBalance.innerText)-withdrawAmount;
    return myCurrentBalance;
}