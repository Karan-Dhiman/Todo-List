document.addEventListener("DOMContentLoaded", () => {
     const inputField = document.querySelector(".todo-input");
     const addButton = document.querySelector(".addTaskBtn");
     const taskList = document.querySelector(".todo-list");

     addButton.addEventListener("click", addTask);

     inputField.addEventListener("keypress", (event) => {
          if (event.key === "Enter") {
               addTask();
          }
     });

function addTask() {
     const taskText = inputField.value.trim();
     if (taskText === "") return;

     const taskItem = document.createElement("li");
     taskItem.classList.add("todo-item");

     const taskSpan = document.createElement("span");
     taskSpan.textContent = taskText;

     const completeBtn = document.createElement("button");
     completeBtn.textContent = "!";
     completeBtn.classList.add("complete-btn");
     completeBtn.addEventListener("click", () => {
          taskSpan.classList.toggle("complete");
     });

     const deleteBtn = document.createElement("button");
     deleteBtn.textContent = "X";
     deleteBtn.classList.add("delete-btn");
     deleteBtn.addEventListener("click", () => {
          taskItem.remove();
     });

     taskItem.appendChild(taskSpan);
     taskItem.appendChild(completeBtn);
     taskItem.appendChild(deleteBtn);
     taskList.appendChild(taskItem);

     inputField.value = " ";
}
});