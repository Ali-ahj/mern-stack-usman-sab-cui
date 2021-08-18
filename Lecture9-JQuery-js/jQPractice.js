$(function () {
  //JQ will execute this function after page load
  //So do your bindings
  $("#addButton").click(handleBtnClick);
  $("#todos li ").click(removeMe);
  $();
});

function handleBtnClick() {
  // alert("btn clicked");
  var newTodo = $("#newTodo").val();
  if (!newTodo) { 
    $("#newTodo").addClass("error");
    return;
  }
  $("#newTodo").removeClass("error");

  $("#newTodo").val(" ");
  $("#todos").append("<li>" + newTodo + "</li>");
  $("#todos li ").click(removeMe);
  return;
}

function removeMe() {
  $(this).fadeOut();
  // .remove();
}
