import { requestServer } from './requestServer';

export const registerUser = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    
    if (data.email === '' || data.password === '') { 
        alert ('Enter a value in all fields')
        throw new Error ('Enter a value in all fields')
    }

    if (data.password !== data.re_password){
        alert ('The passwords don\'t match')
        throw new Error ('The passwords don\'t match')
    }


    const result = await requestServer(`/users/register`, 'POST', data)

    return result
}