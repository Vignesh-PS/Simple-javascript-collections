$(document).ready(function() {
  function init() {
    if (localStorage["name"]) {
      $("#name").val(localStorage["name"]);
    }
    if (localStorage["email"]) {
      $("#email").val(localStorage["email"]);
    }
    if (localStorage["message"]) {
      $("#message").val(localStorage["message"]);
    }
  }
  init();
});

$("#contactForm").submit(submit);

function submit() {
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#message").val();

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("message", message);

  $("#name").val("");
  $("#email").val("");
  $("#message").val("");

  alert('Contact form saved in your local storage, Please check');
  return false;
}
