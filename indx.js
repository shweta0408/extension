
let myLeads = []
let oldLeads = []
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
const tabButton = document.getElementById("tab-btn")
const delbtn =  document.getElementById("del-el")   
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


//console.log(leadsFromLocalStorage)
//localStorage.setItem("myName", "Shweta")
//let name = localStorage.getItem("myName")
//console.log(name)


if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabButton.addEventListener("click", function(){
    chrome.tabs.query({active: true},function(tabs){
          myLeads.push(tabs[0].url)
          localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)

       })  
       })
       

     

function render(leads){

    let listItems = ""
    
    for( let i=0 ; i<leads.length ; i++){
      //ulEl.innerHTML += "<li>" +  myLeads[i] + "</li>"
       // listItems  += "<li><a target ='_blank' href ='' + myLeads[i] + "'>" +  myLeads[i] + "</a>"
       listItems  += `
          <li>
         <a target ='_blank' href ="${leads[i]}">
         ${leads[i]}
         </a>
         </li>
       `
    } 
    ulEl.innerHTML = listItems
    }

    delbtn.addEventListener("dblclick", function(){
    
        localStorage.clear()
        myLeads = []
        render(myLeads)
    })
    
       

    newButton.addEventListener("click", function(){
     myLeads.push(inputEl.value)
     inputEl.value = ""
     localStorage.setItem("myLeads", JSON.stringify(myLeads))
     render(myLeads)
})

// const is used as let in modern javascript
// but const cannot be reassign



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
