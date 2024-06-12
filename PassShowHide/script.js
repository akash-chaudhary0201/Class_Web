let pass = document.querySelector(".pass");
let eye = document.querySelector(".ey");

eye.addEventListener("click", () => {
  pass.type = pass.type === "password" ? "text" : "password";

  eye.className = `fa-solid fa-eye${pass.type === "password" ? "" : "-slash"}`;
});
