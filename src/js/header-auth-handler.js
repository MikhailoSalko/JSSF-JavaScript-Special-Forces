const signUpBtnRef = document.querySelector("[data-modal-auth-open]");
const userAuthBtnRef = document.querySelector(".user-authorized__btn");
const userAuthNameBtnRef = document.querySelector(".user-authorized__btn div");
const userAuthImgBtnRef = document.querySelector(".user-authorized__btn img");

//mobile menu refs
const signUpBurgerBtnRef = document.querySelector(
  "[data-burgermodal-auth-open]"
);
const userAuthBurgerBtnRef = document.querySelector(".user-mob");
// const userAuthNameBurgerBtnRef = document.querySelector(".user-mob div");
const userAuthImgBurgerBtnRef = document.querySelector(".user-mob img");
const logOutBurgerBtnRef = document.querySelector("#logOut");

function headerUserBtnAuthHandler(name, img) {
  signUpBtnRef.style.display = "none";
  signUpBurgerBtnRef.style.display = "none";
  userAuthBtnRef.style.display = "flex";
  userAuthBurgerBtnRef.style.display = "flex";
  logOutBurgerBtnRef.style.display = "flex";

  if (name) {
    userAuthNameBtnRef.textContent = name;
    // userAuthNameBurgerBtnRef.textContent = name;
  }

  if (img) {
    userAuthImgBtnRef.setAttribute("src", img);
    userAuthImgBurgerBtnRef.setAttribute("src", img);
  }
}

function headerUserBtnLogOutHandler() {
  signUpBtnRef.style.display = "flex";
  signUpBurgerBtnRef.style.display = "flex";
  userAuthBtnRef.style.display = "none";
  userAuthBurgerBtnRef.style.display = "none";
  logOutBurgerBtnRef.style.display = "none";
}

export { headerUserBtnAuthHandler, headerUserBtnLogOutHandler };
