
let myLeads = []

//turn string into an array
//myLeads = JSON.parse(myLeads)

//push a new value to the array
//myLeads.push("www.newstore.com")

//turn an array into string again
//myLeads = JSON.stringify(myLeads)

//localStorage.setItem(myLeads, JSON.stringify)
const newButton = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el") 
const ulEl = document.getElementById("ul-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)
//localStorage.setItem("myName", "Shweta")
//let name = localStorage.getItem("myName")
//console.log(name)

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}

newButton.addEventListener("click", function(){
//    myLeads.push("www.awesomelead.com")
     myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
     renderLeads()
})

// const is used as let in modern javascript
// but const cannot be reassign

function renderLeads(){

let listItems = ""

for( let i=0 ; i<myLeads.length ; i++){
  //ulEl.innerHTML += "<li>" +  myLeads[i] + "</li>"
   // listItems  += "<li><a target ='_blank' href ='' + myLeads[i] + "'>" +  myLeads[i] + "</a>"
   listItems  += `
      <li>
     <a target ='_blank' href ="${myLeads[i]}">
     ${myLeads[i]}
     </a>
     </li>
   `
} 
ulEl.innerHTML = listItems
}

//innertext 

// const container = document.getElementById("container")
// container.innerHTML = "<button>Buy!</button>"

//  ------------addEventListner practice---------
// function buttonClick(){
//     console.log("button clicked from onclick attribute")
// }
// let inputbtn = document.getElementById("input-btn")

// inputbtn.addEventListener("click", function(){
//       console.log("Button clicked")
// })
// let newBox = document.getElementById("box-el")

// newBox.addEventListener("click", function(){
//     console.log("button")
// })