// UI
const signIn = document.querySelector('.sign-in');
const signUp = document.querySelector('.sign-up');
const signInB = document.querySelector('.sign-in_btn');
const signUpB = document.querySelector('.sign-up_btn');

// Events
signUpB.addEventListener('click', sIn);
signInB.addEventListener('click', sOut);

// Functions
// Sign up
function sIn(e){
    signIn.className += ' hidden';
    signUp.classList.remove('hidden');

    e.preventDefault();
}
// Sign up
function sOut(e){
    signUp.className += ' hidden';
    signIn.classList.remove('hidden');

    e.preventDefault();
}

