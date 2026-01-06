const input = document.getElementById("textInput");
const submitBtn = document.getElementById("submitBtn");
const rickrollBtn = document.getElementById("rickrollBtn");
const output = document.getElementById("output");

function syncButtonState() {
  submitBtn.disabled = input.value.trim() === "";
}

function onSubmit() {
  const value = input.value.trim();
  if (!value) return;
  output.textContent = `Tu as validé : "${value}"`;
}

input.addEventListener("input", syncButtonState);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    if (!submitBtn.disabled) {
      onSubmit();
    }
  }
});

submitBtn.addEventListener("click", onSubmit);

rickrollBtn.addEventListener("click", () => {
  window.open(
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "_blank",
    "noopener,noreferrer"
  );
});

syncButtonState();
