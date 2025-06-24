javascript
function changeMessage() {
  const message = document.getElementById("message");
  message.innerText = "You just ran your first JavaScript function! 🚀";
}

let count = 0;

function incrementCount() {
  count += 1;
  document.getElementById("count").innerText = count;
}