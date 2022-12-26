import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../actions/userActions'
import Navbar from '../components/navbar/Navbar'
import './form.css'
import {useNavigate} from 'react-router-dom';


const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conformPassword, setConformPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function registerHandler() {
        if (password !== conformPassword) {
            alert('Password not mached')
        } else {
            const users = {
                name,
                email,
                password
            }
            console.log(users);
            dispatch(register(users));
            navigate('/login');
        }
    }

  return (
    <div>
        <div className="form-container">
            <Navbar />
            <div className="form-row">
                <div className="form-col">
                    <div className="form">
                        <input type="text" required placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="email" required placeholder='E-mail' value={email}  onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" required placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input type="password" required placeholder='Confirm Password'  value={conformPassword} onChange={(e) => setConformPassword(e.target.value)} />
                        <button className="form-btn" onClick={registerHandler} >Register</button>
                        <a href='/login' className='form-other-link' >For Login </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register