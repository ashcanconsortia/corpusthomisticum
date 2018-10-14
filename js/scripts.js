function navMenu(){
  var page = document.getElementById('menu').value;
  window.location.href = page;
}

//font size
function fontMenu(){
  var choice = document.getElementById("font-size-menu").value;
  var textbox = document.getElementById("content");
  textbox.style.fontSize = choice;
}
