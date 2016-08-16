var input1 = document.querySelector(".title");
var input2 = document.querySelector(".description");

function createTodo() {
  var newDiv = document.createElement("div");
  newDiv.className = "todo"
  var currentDiv = document.getElementById("div");
  document.body.insertBefore(newDiv, currentDiv);

    function addText() {
      var text1 = input1.value;
      var text2 = input2.value;
      console.log(text1);
      console.log(text2);
      return text1 + "\n" + text2;
    }
    addText();
}
