const signUpBtnRef = document.querySelector("[data-modal-auth-open]");
const userAuthBtnRef = document.querySelector(".user-authorized__btn");
const userAuthNameBtnRef = document.querySelector(".user-authorized__btn div");
const userAuthImgBtnRef = document.querySelector(".user-authorized__btn img");

function headerUserBtnAuthHandler(name, img) {
  signUpBtnRef.style.display = "none";
  userAuthBtnRef.style.display = "flex";

  if (name) {
    userAuthNameBtnRef.textContent = name;
  }

  if (img) {
    userAuthImgBtnRef.setAttribute("src", img);
  }
}

function headerUserBtnLogOutHandler() {
  signUpBtnRef.style.display = "flex";
  userAuthBtnRef.style.display = "none";
}

export { headerUserBtnAuthHandler, headerUserBtnLogOutHandler };
