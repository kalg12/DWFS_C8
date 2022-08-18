const dataBase = {
    email: "luciano19940@hotmail.com",
    password: "123456",
}

const getData = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const dataUser = {
        email: email,
        password: password
    }

    if(email === '' || password === '') {
        alert("Please enter data")
    }else{
        if(dataUser.email === dataBase.email && dataUser.password === dataBase.password) {
            alert("Login successful")
        }else{
            alert("Login failed: email or password is incorrect")
        }
    }
}