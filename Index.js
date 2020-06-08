
//LogIn button Handler 
const loginbtn=document.getElementById("login");
loginbtn.addEventListener("click" ,function(){
   const loginarea=document.getElementById("logIn-area");
   loginarea.style.display="none";
   const transactionArea=document.getElementById("transaction-area");
   transactionArea.style.display="block";

})

//Deposit button event Handler
const depositbtn=document.getElementById("Deposit");
depositbtn.addEventListener("click",function(){

 const  DepositAmount =document.getElementById("DepositAmount").value;
 const  Depositnumber=parseFloat(DepositAmount);  

//  const currentDeposite=document.getElementById("currentDeposit").innerText;
//  const currentDepositNumber=parseFloat(currentDeposite);
//  const totalNumber=Depositnumber+currentDepositNumber;
//  console.log(totalNumber);

 updateSpain("currentDeposit",Depositnumber);

//document.getElementById("currentDeposit").innerText=totalNumber;

 updateSpain("currentBalance",Depositnumber);
 
 document.getElementById("DepositAmount").value="";

})
//Widthdra button 
const withdraw=document.getElementById("withdraw");
withdraw.addEventListener("click",function(){
    
    const withdrawnNumber=getInpuNumber("withdrawAmount");
    const withdrawConvart=parseFloat(withdrawnNumber);
    updateSpain("currentWithdraw",withdrawConvart);
    subSpain("currentBalance",withdrawConvart);




})



function getInpuNumber(id){
    const withdrawAmount=document.getElementById(id).value;
     const withdrawNumber=parseFloat(withdrawAmount);

     return withdrawNumber;

}


function updateSpain(id,Depositnumber)
{

const currentBalance=document.getElementById(id).innerText;
const currentBalanceNumber=parseFloat(currentBalance);
 

const totalBalance=Depositnumber+currentBalanceNumber; 
document.getElementById(id).innerText=totalBalance;
 console.log(totalBalance);
 
}


function subSpain(id,Depositnumber)
{

const currentBalance=document.getElementById(id).innerText;
const currentBalanceNumber=parseFloat(currentBalance);
 

const totalBalance=currentBalanceNumber -Depositnumber; 
document.getElementById(id).innerText=totalBalance;
 console.log(totalBalance);
 
}
