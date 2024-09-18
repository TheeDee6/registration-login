// Select form by id
const registerForm = document.querySelector('#register-form');
// document.body.innerHTML = '<h1>I did not mess this up</h1>';
// Handle form submit event
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
     //Collect form data
const formData = new FormData(event.target);
console.log(
    formData.get('username'),
    formData.get('email'),
    formData.get('password')
);
     // Save user information
     // Send confirmation email
    //  Display success message
    const messageH1 = document.querySelector('#message');
    messageH1.textContent = 'Account registered successfully';
 });
// age variable
// const age = 44;
// // square of age
// function squareOfAge(age = 1) {
//     const squaredOfAge = age **2;
//     return squaredOfAge;
// }

// // console.log(squareOfAge(age));

// const squaredOfAge = squareOfAge(3);

// // function to get full name
// function fullname(fullName, lastName){
//     return `${firstName} ${lastName}`;
// }