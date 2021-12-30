let btnTranslate = document.querySelector("#btn-translate");
let textInput = document.querySelector("#text-input");
let result = document.querySelector("#result");
let serverUrl = "https://api.funtranslations.com/translate/doge.json";

function translation(text) {
  return serverUrl + "?text=" + text;
}

function errorCatch() {
  alert("something wrong with the server");
}

function theEvent() {
  fetch(translation(textInput.value))
    .then((response) => response.json())
    .then((json) => {
      result.textContent = json.contents.translated;
    })
    .catch(errorCatch);
}

btnTranslate.addEventListener("click", theEvent);
