async function handleLogin() {
    let email = document.querySelector('.email').value
    let password = document.querySelector('.password').value

    let user = {
        email: email,
        password: password,
    }

    let request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(user),
    }

    let apiRequest = fetch('http://localhost:3000/login', request)
    let response = await apiRequest
    if (response.status === 200) {
        const data = await response.json()
        window.localStorage.setItem('jwt', data.jwt)

        setTimeout(() => {
            window.location.href = './allListings.html'
        }, 1000)
    }
}

async function handleRegister() {
    let email = document.querySelector('.email').value
    let password = document.querySelector('.password').value
    let firstName = document.querySelector('.firstName').value
    let lastName = document.querySelector('.lastName').value
    let userId = window.localStorage.getItem('id')

    let user = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        userId: userId,
    }

    let request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(user),
    }

    let apiRequest = fetch('http://localhost:3000/register', request)
    let response = await apiRequest
    console.log(response)
    if (response.status === 200) {
        console.log(response)
        window.location.href = './login.html'
    }
}
