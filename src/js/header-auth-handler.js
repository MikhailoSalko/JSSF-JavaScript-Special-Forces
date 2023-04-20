const signUpBtnRef = document.querySelector('[data-modal-auth-open]');
const userAuthBtnRef = document.querySelector('.user-authorized__btn');
const userAuthNameBtnRef = document.querySelector('.user-authorized__btn div');

//mobile menu refs
const signUpBurgerBtnRef = document.querySelector(
  '[data-burgermodal-auth-open]'
);
const userAuthBurgerBtnRef = document.querySelector('.user-info-mob');
const userAuthNameBurgerBtnRef = document.querySelector('.user-info-mob div');
const logOutBurgerBtnRef = document.querySelector('#logOutMobMenu');

function headerUserBtnAuthHandler(name) {
  if (window.screen.width >= 768) {
    signUpBtnRef.style.display = 'none';
    userAuthBtnRef.style.display = 'flex';
    if (name) {
      userAuthNameBtnRef.textContent = name;
    }
    return;
  }

  signUpBurgerBtnRef.style.display = 'none';

  userAuthBurgerBtnRef.style.display = 'flex';
  logOutBurgerBtnRef.style.display = 'flex';
  if (name) {
    userAuthNameBurgerBtnRef.textContent = name;
  }
}

function headerUserBtnLogOutHandler() {
  if (window.screen.width >= 768) {
    signUpBtnRef.style.display = 'flex';
    userAuthBtnRef.style.display = 'none';
    logOutBurgerBtnRef.style.display = 'none';
    return;
  }

  signUpBurgerBtnRef.style.display = 'flex';

  userAuthBurgerBtnRef.style.display = 'none';
}

export { headerUserBtnAuthHandler, headerUserBtnLogOutHandler };