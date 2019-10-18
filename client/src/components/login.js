import React, {useState} from 'react'
import axios from 'axios'

const Register = props => {
    const [user, setUser] = useState({username: '', password: ''})

    const handleSubmit = event => {
        event.preventDefault()
        axios.post('http://localhost:3300/api/auth/register', user)
        .then(res => {
            console.log(res)
            props.history.push('/login')
        })
        .catch(err => console.log('error from post',err))

    }

    const handleChange = event => {
        setUser({
            ...user,
            [event.target.name]:event.target.value
        })
    }

    return (
        <form className='register' onSubmit ={event => handleSubmit(event)}>
            <h3>Sign up</h3>
            <label>Username</label>
            <input 
            name="username"
            type= 'text'
            className='input'
            value={user.username}
            onChange={event => handleChange(event)}
            />
            <label>Password</label>
            <input 
            name= 'password'
            type= 'text'
            className='input'
            value={user.password}
            onChange={event => handleChange(event)}
            />
            <button className='submit' type='submit'>submit</button>
        </form>
    )
}

export default Register;