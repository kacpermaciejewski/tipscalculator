const form = document.querySelector(".calculator__form");
const price = document.getElementById("price");
const tip = document.getElementById("tip");
const people = document.getElementById("people");
const total = document.querySelector(".calculator__total");
const perPerson = document.querySelector(".calculator__perperson")
const spanTotal = document.querySelector(".totalNr");
const spanPerPerson = document.querySelector(".perpersonNr");
const error = document.querySelector(".error");



const calcTip = e=>{
    e.preventDefault()

    if(parseInt(price.value) == "NaN" || parseInt(tip.value) == "NaN" || parseInt(people.value) == "Nan"
     || parseInt(price.value) <1 || parseInt(tip.value) <1 || parseInt(people.value) <1 ){
        error.classList.add(active)
        return
    }
else{
    if(error.classList.contains("active")){
        error.classList.remove("active")
    }
}
   
    if(parseInt(people.value) == 1){
        let totalTip = price.value * tip.value/100;
        spanTotal.innerHTML = Math.round(totalTip);
        total.classList.add("active");
    }
    else{
        let totalTip = price.value * tip.value/100;
        let ppTip = price.value * tip.value/100/parseInt(people.value)  
        spanTotal.innerHTML = Math.round(totalTip);
        total.classList.add("active");
        spanPerPerson.innerHTML = Math.round(ppTip);
        perPerson.classList.add("active");
    }

}


form.addEventListener("submit", e =>{
    calcTip(e)
    
})