document.addEventListener('DOMContentLoaded', function() {
    const signupContainer = document.getElementById('signup-container');
    const pageHeading = document.querySelector('.page-heading');

    pageHeading.addEventListener('click', function() {
        signupContainer.classList.toggle('expanded');
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     const signupContainer = document.getElementById('signup-container');
//     const pageHeading = document.querySelector('.page-heading');

//     pageHeading.addEventListener('click', function() {
//         signupContainer.classList.toggle('expanded');
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const container = document.getElementById('container');
//     const loginButton = document.getElementById('login');
//     const signupButton = document.getElementById('signup');

//     loginButton.addEventListener('click', function() {
//         container.classList.remove('right-panel-active');
//     });

//     signupButton.addEventListener('click', function() {
//         container.classList.add('right-panel-active');
//     });
// });
