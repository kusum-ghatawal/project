const alertContainer = document.querySelector(".alert-container");
const closeBtn = document.querySelector("#close-btn");

closeBtn.addEventListener("click", () => {
  console.log(alertContainer.classList);
  alertContainer.classList.add("hide");
});
