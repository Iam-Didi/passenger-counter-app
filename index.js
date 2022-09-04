



 let countEl = document.getElementById("count-el")
 console.log(countEl)
 let count = 0

 function increment() {
     count = count + 1
     countEl.innerText = count
     console.log(count)
 }

 function save() {
     console.log(count)
} 

save()

let welcomeEl = document.getElementById("welcome-el")
let Name = "Hi Divine 👋, "
let greeting = "Welcome To The Train Station"


welcomeEl.innerText = Name + greeting 

welcomeEl.innerText = welcomeEl.innerText + "👋"






