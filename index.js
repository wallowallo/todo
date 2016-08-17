var input1 = document.querySelector(".title");
var input2 = document.querySelector(".description");

function createTodo() {
  var newDiv = buildTodoListItemDiv(input1.value, input2.value);
  document.body.appendChild(newDiv);
}

/*
 * buildTodoListItemDiv
 * respoinsible for creating a div to be used as a todo list item
 */
function buildTodoListItemDiv(title, description) {
  var newDiv = document.createElement("div");
  newDiv.className = "todoList"
  newDiv.innerHTML = title + "<br>" + description;
  return newDiv;
}

// var input1 = document.querySelector(".title");
// var input2 = document.querySelector(".description");
// var todoList = [
//                 { title: "Hit the gym!", description: "Lift Stuff to get gains." },
//                 { title: "Eat vitamins", description: "Find some vitamins to eat, fool!" }
//               ]
//
// 
// function createTodo() {
//   var newTodo = { title: "", description: "" }
//   var text1 = input1.value;
//   var text2 = input2.value;
//   console.log(text1);
//   console.log(text2);
//
//     if (text1 === "" || text2 === "") {
//       return;
//     } else {
//       var newDiv = document.createElement("div");
//       newDiv.className = "container"
//       var newH2 = document.createElement("h2");
//       newH2.className = "newTodoTitle";
//       var newButton = document.createElement("input");
//       newButton.type = "button";
//       newButton.className = "removeTodo"
//       newButton.value = "X"
//       newButton.onClick = "removeTodo()"
//       var newP = document.createElement("p");
//       newP.className = "newTodoDescription";
//       this.todoList.push(this.newTodo)
//       this.newTodo = {
//         title: "",
//         description: ""
//       };
//
//     }
//
//   var currentDiv = document.getElementById("div");
//   document.body.insertBefore(newDiv, currentDiv);
//   document.querySelector(".container").appendChild(newH2);
//   document.querySelector(".container").appendChild(newP);
//   document.querySelector(".container").appendChild(newButton);
//
//     function reset() {
//       input1.value = "";
//       input2.value = "";
//      }
//      reset();
// }
//
// function removeTodo() {
//   this.todoList.splice(this.index);
// }
