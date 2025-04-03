const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


document.getElementById("add-btn").addEventListener("click", addTask);

function addTask() {
    
    if (inputBox.value === "") {
        alert("You must write something!!!");
    } else {
        
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

       
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerHTML = "<i class='fa-solid fa-trash'></i>"; 
        li.appendChild(deleteBtn); 

        
        listContainer.appendChild(li);
    }
    inputBox.value = ""; 
    saveData(); 
}


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}


listContainer.addEventListener("click", (e) => {
    
    if (e.target.tagName.toUpperCase() === "LI") {
        e.target.classList.toggle("checked");
        saveData(); 
    }

    
    if (e.target.classList.contains("delete-btn") || e.target.closest(".delete-btn")) {
        const taskItem = e.target.closest("li"); 
        taskItem.remove(); 
        saveData(); 
    }
});


function showTask() {
    const data = localStorage.getItem("data");
    if (data) {
        listContainer.innerHTML = data; 

        
        const deleteButtons = document.querySelectorAll(".delete-btn");
        deleteButtons.forEach((button) => {
            button.addEventListener("click", (e) => {
                const taskItem = e.target.closest("li"); 
                taskItem.remove(); 
                saveData(); 
            });
        });
    }
}

// Show tasks on page load
showTask();