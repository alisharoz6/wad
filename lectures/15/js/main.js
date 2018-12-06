
// var balancee=document.getElementById("balance");

var Account=
    {title:"Ali Sharoz",
    currency:"PKRS",
    balance:324567,
    IBAN:"PKN12234567"};

document.getElementById("title").innerHTML=Account.title;
document.getElementById("currency").innerHTML=Account.currency;
document.getElementById("balance").innerHTML=Account.balance;
document.getElementById("IBAN").innerHTML=Account.IBAN;

function depositt()
    {
// var d=document.getElementById("Deposit Amount");
   if(event.keyCode===13){
       Account.balance =Account.balance + parseInt(document.getElementById("deposit").value);
       document.getElementById("balance").innerHTML=Account.balance;
   }}

function withdraww()
{
// var d=document.getElementById("Deposit Amount");
    if(event.keyCode===13){
        Account.balance =Account.balance - parseInt(document.getElementById("withdraw").value);
        document.getElementById("balance").innerHTML=Account.balance;
    }}