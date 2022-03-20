import axios from "axios";

export const signUp = async ({ name, email, age, password, password_confirmation }) => {
    const response = await axios.post(`http://artgal-amigos-bg.site/api/register`, {
        'name' : name,
        'email' : email,
        'age' : age,
        'password' : password,
        'password_confirmation' : password_confirmation,
    });
    const token = await response.data.token;
    sessionStorage.setItem('token', token);
}

export const logIn = async ({ email, password }) => {
    const response = await axios.post(`http://artgal-amigos-bg.site/api/login`, {
        'email' : email,
        'password' : password,
    });
    const token = await response.data.token;
    sessionStorage.setItem('token', token);
}

export const logOut = async () => {
    const token = sessionStorage.getItem('token');
    console.log('token', token);
    const response = await axios.post(`http://artgal-amigos-bg.site/api/logout`,{}, {
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    });
    sessionStorage.removeItem('token');
}
