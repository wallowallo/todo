function createTodo() {
  var newDiv = document.createElement("div");
    newDiv.className = "todo"
    function addText() {
      document.getElementById("todo").innerHTML = document.querySelector("input[type=text]").value;
    }

    // add the newly created element and its content into the DOM
    var currentDiv = document.getElementById("div");
    document.body.insertBefore(newDiv, currentDiv);
}
