const tip = document.getElementById("range");
const tit = document.querySelector(".ran");

const tipamt = document.querySelector(".tipamt");
const amt = document.querySelector(".bill");

tip.addEventListener("input", function(e){
    let inp = document.getElementById("num").value;
   let tipam=e.target.value;

   if(inp===""){
       alert("amount required");
   }else{
       tip.textContent = `${tipam}%`;
       tipamt.textContent = `${tipam}`;
       amt.textContent = tipcalc(parseFloat(inp), parseFloat(tipam))
   }
})
function tipcalc(amt,tip){
    let tipc = (amt * tip / 100);
    return tipc + amt;
}