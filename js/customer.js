function mailSend() {
  window.confirm("Email sent!")
};



function counter(text, length) {
  var limit = length;
  var str = text.value.length;

  if (str > limit) {
    document.getElementById('messagecount').innerHTML = "You ran out of all of characters";
    text.value = text.value.substring(0, limit);
    text.focus();
  }

  document.getElementById('messagecount').innerHTML = text.value.length;
}