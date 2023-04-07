import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { registerUser } from '../services/registerUser';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';


export const Register = () => {
    const navigate = useNavigate()
    const { values, changeHandler } = useForm({
        email: '',
        password: '',
        re_password: ''
    })

    const { useLocalStorage, updateUser } = useContext(UserContext)
    const [, setUser] = useLocalStorage()

    const onSubmit = async (e) => {
        try {
            const result = await registerUser(e)
            if (result.hasOwnProperty('accessToken')) {
                setUser(result)
                updateUser(result)
                navigate('/')
            }
        } catch {
            updateUser({})
        }
    }


    return (
        <form className="form" id="login" onSubmit={onSubmit}>

            <input type="email" name="email" value={values.email} onChange={changeHandler} placeholder="Email"></input>

            <input type="password" name="password" value={values.password} onChange={changeHandler} placeholder="Password"></input>

            <input type="password" name="re_password" value={values.re_password} onChange={changeHandler} placeholder="Confirm Password"></input>

            <input type="submit" className="button" value="Register"></input>
            <p>
                <span>If you already have profile click <Link to="/users/login">here</Link></span>
            </p>
        </form>
    );
}