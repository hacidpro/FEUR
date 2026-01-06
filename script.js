const input = document.getElementById("textInput");
const rickrollBtn = document.getElementById("rickrollBtn");
const output = document.getElementById("output");
document.addEventListener("DOMContentLoaded", () => {
  rickrollBtn.addEventListener("click", () => {
    window.open(
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "_blank",
      "noopener,noreferrer"
    );
  });

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
      } else {
        textInput.value = textInput.dataset.original;
        delete textInput.dataset.original;
        inputElement2.textContent = "convertir en binaire";
      }
    }
  });

  function encoderTexteEnBase64(texte) {
    // Gestion correcte des caractères accentués (UTF-8)
    const utf8Bytes = new TextEncoder().encode(texte);
    let b64 = "";
    const len = utf8Bytes.length;

    const alphabet =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    for (let i = 0; i < len; i += 3) {
      const a = utf8Bytes[i];
      const b = i + 1 < len ? utf8Bytes[i + 1] : 0;
      const c = i + 2 < len ? utf8Bytes[i + 2] : 0;

      const triple = (a << 16) + (b << 8) + c;

      b64 += alphabet.charAt((triple >> 18) & 0x3f);
      b64 += alphabet.charAt((triple >> 12) & 0x3f);
      b64 += i + 1 < len ? alphabet.charAt((triple >> 6) & 0x3f) : "=";
      b64 += i + 2 < len ? alphabet.charAt(triple & 0x3f) : "=";
    }

    return b64;
  }
});
