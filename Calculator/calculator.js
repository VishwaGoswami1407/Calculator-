const input = document.querySelector("input[type='text']");

document.querySelector("form").addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  const value = e.target.textContent;

  if (value === "AC") {
    input.value = "";
  } else if (value === "Clear") {
    input.value = input.value.slice(0, -1);
  } else if (value === "=") {
    try {
      input.value = eval(input.value);
    } catch {
      input.value = "Error";
    }
  } else {
    input.value += value;
  }
});
