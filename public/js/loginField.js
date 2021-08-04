const signupEl = document.getElementById('signup');
const loginEl = document.getElementById('login');

signupEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const signupData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,

    }

    fetch("/api/user/signup", {
        method: 'POST',
        body: JSON.stringify(signupData),
        //use for put post or delete
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        if (response.status === 200) location.reload()
    })

})

loginEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const loginData = {
        username: document.getElementById('loginUsername').value,
        password: document.getElementById('loginPassword').value,
    }

    fetch("/api/user/login", {
        method: 'POST',
        body: JSON.stringify(loginData),
        //use for put post or delete
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        if (response.status === 200) location.reload()
    })


})