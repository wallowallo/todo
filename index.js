function createTodo(){
  var newDiv = document.createElement("div");
    newDiv.className = "todo"
    var newContent = document.querySelector("input").value;
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    var currentDiv = document.getElementById("div");
    document.body.insertBefore(newDiv, currentDiv);
}
