document.getElementById("btn-deposit").addEventListener("click",function(){
    const depositField = document.getElementById("deposit-field");
    const deposit = depositField.value;

    const depositTotalElement = document.getElementById("deposit-total");
    const depositTotal = depositTotalElement.innerText;
    
    newDeposit = parseFloat(depositTotal) +parseFloat(deposit);
    depositTotalElement.innerText = newDeposit;
    depositField.value=""
    if(isNaN(deposit) || deposit=='' || parseFloat(deposit)<=0){
        alert("please provide a Positive number");
    }
    const previousBalanceField = document.getElementById("balance");
    const previousBalance = previousBalanceField.innerText;

    const newBalance = parseFloat(previousBalance)+parseFloat(deposit);
    previousBalanceField.innerText = newBalance;
})

document.getElementById("btn-withdraw").addEventListener("click",function(){
    const withdrawField = document.getElementById("withdraw");
    const withdraw = withdrawField.value;
    const withdrawAmountElement = document.getElementById("withdraw-field");
    const withdrawAmount = withdrawAmountElement.innerText;

    
    const previousBalanceField = document.getElementById("balance");
    const previousBalance = previousBalanceField.innerText;
    withdrawField.value='';
    if(isNaN(withdraw) || withdraw==''){
        alert("please provide a number");
    }
    else if(parseFloat(previousBalance) <= 0 || parseFloat(withdraw)>parseFloat(previousBalance)){
        alert("You have no ammount in your account")
    }

    else{
    newWithdrawAmount = parseFloat(withdraw)+parseFloat(withdrawAmount);
    withdrawAmountElement.innerText = newWithdrawAmount;



    const newBalance = parseFloat(previousBalance)-parseFloat(withdraw);
    previousBalanceField.innerText = newBalance;
   
    }
    
})