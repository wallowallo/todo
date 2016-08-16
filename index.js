var input1 = document.querySelector(".title");
var input2 = document.querySelector(".description");

function createTodo() {
  var newDiv = document.createElement("div");
  newDiv.className = "todoList"
  var currentDiv = document.getElementById("div");
  document.body.insertBefore(newDiv, currentDiv);

  var text1 = input1.value;
  var text2 = input2.value;
  console.log(text1);
  console.log(text2);
  var result = document.querySelector("div.todoList").innerHTML = text1 + "\n" + text2;

  var currentDiv = document.getElementById("div");
  document.body.insertBefore(newDiv, currentDiv);
}
