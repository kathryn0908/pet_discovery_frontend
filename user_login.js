
const isLoggedIn = document.querySelector('.is-logged-in');
const loginForm = document.querySelector('#login-form');
const submitLoginButton = document.querySelector('.submit')
const signUpForm = document.querySelector('#signup-form');
const submitSignUpButton = document.querySelector('#signup-submit')
const logoutButton = document.querySelector('#logout-button')



signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target)
    const username = formData.get('username')
    const password = formData.get('password')
    
        
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {'Content-Type': 'Application/Json'},
        body: JSON.stringify({ user: { username, password } })
    }).then(() => {
        window.location.reload()
    })
})

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target)
    const username = formData.get('username')
    const password = formData.get('password')
    
 
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {'Content-Type': 'Application/Json'},
        body: JSON.stringify( { username, password } )
    })
        .then(response => response.json())
        .then(response => {
            const { token } = response
            localStorage.setItem('token', token)
            LoggedIn();
        })
})

function LoggedIn(){
    isLoggedIn.textContent = localStorage.getItem('token')
    ? "You are logged in!"
    : "You are not logged in!"
}

logoutButton.addEventListener('click', (event) => {
    logout();
    LoggedIn();
})

function logout(){
    localStorage.removeItem('token')
}