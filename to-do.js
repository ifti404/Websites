// Selection Part
const inputBox = document.querySelector(".inputBox");
const addButton = document.querySelector(".addButton");
const taskContainer = document.querySelector(".taskContainer");
const checked = document.querySelector(".checked");

// function for adding a task

const addTask = () => {
  if (inputBox.value === "") {
    alert("Please add your text first!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    inputBox.value = "";
    saveData();
  }
};

// function of marking the task when clicked

taskContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

// local storage api for saving the data for the user

const saveData = () => {
  localStorage.setItem("data", taskContainer.innerHTML);
};
const loadData = () => {
  taskContainer.innerHTML = localStorage.getItem("data");
};
loadData();
