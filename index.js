

/*                           */
const inputBox = document.getElementById("input-box")
const listeContainer =document.getElementById("iste-container")


/* */
function addTask() {
    if(inputBox.value === "") {
        alert("You must write something!")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listeContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "&#10005;"
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData()
}
 /* */

listeContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("check")
        saveData()
    }
else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
}, false)


function saveData(){
    localStorage.setItem("data",listeContainer.innerHTML);
}

function showTask() {
    listeContainer.innerHTML= localStorage.getItem("data")
}
showTask()