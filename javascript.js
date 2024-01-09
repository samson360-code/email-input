var form = document.getElementsByTagName("form")[0];
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", emailValidator);
function emailValidator(event) {
    event.preventDefault();
    var form = document.getElementsByTagName("form")[0];
    var inputValue = document.getElementById("input").value;
    var error = document.getElementsByClassName("error")[0];
    var errorTEXT = document.getElementsByClassName("error-text")[0];
    inputValue = inputValue.toString();
    inputValue=inputValue.trim();
        if(emailRegex.test(inputValue)!=true) {
            error.classList.add("appear");
            errorTEXT.classList.add('appear');
        }
        else {
            form.submit();
        }
    return
}
