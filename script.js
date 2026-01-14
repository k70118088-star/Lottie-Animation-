const button = document.getElementById("btn");
const loader = document.getElementById("loader");

button.addEventListener("click", async () => {
  button.classList.add("hidden");
  loader.classList.remove("hidden");

  await customElements.whenDefined("dotlottie-wc");
  loader.play();

});