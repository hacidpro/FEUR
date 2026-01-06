const input = document.getElementById("textInput");
const rickrollBtn = document.getElementById("rickrollBtn");
const output = document.getElementById("output");

rickrollBtn.addEventListener("click", () => {
  window.open(
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "_blank",
    "noopener,noreferrer"
  );
});


document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("textInput");
  const rickrollBtn = document.getElementById("rickrollBtn");

  // Rickroll 😄
  rickrollBtn.addEventListener("click", () => {
    window.open(
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "_blank",
      "noopener,noreferrer"
    );
  });

  function textToBin(text) {
    return text
      .split("")
      .map((char) => {
        return char.charCodeAt(0).toString(2).padStart(8, "0");
      })
      .join(" ");
  }

  const inputElement2 = document.getElementById("convBin");
  inputElement2?.addEventListener("click", () => {
    if (textInput) {
      if (!textInput.dataset.original) {
        textInput.dataset.original = textInput.value;
        textInput.value = textToBin(textInput.value);
        inputElement2.textContent = "convertir en  texte";
        textInput.readOnly = true;
      }
      else {
        textInput.value = textInput.dataset.original;
        delete textInput.dataset.original;
        inputElement2.textContent = "convertir en binaire";
      }
    }
  });
});