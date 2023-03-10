const form = document.getElementById("myForm");
const textarea = document.getElementById("myTextarea");

const savedMessage = localStorage.getItem("message");
if (savedMessage) {
    textarea.value = savedMessage;
}
form.addEventListener("submit", function(event) {
    event.preventDefault();

const message = textarea.value;
localStorage.setItem("message", message);
location.reload();
});   
