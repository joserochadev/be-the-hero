import React, { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

import heroImg from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'

import api from '../../services/api'

import './styles.css'

export default function Login(){
    const [id, setId] = useState('')

    const navigate = useNavigate()

    async function handleLogin(e){
        e.preventDefault()

        try {
            const response = await api.post('sessions', {id})

            localStorage.setItem('ongName', response.data.name)
            localStorage.setItem('ongId', id)

            navigate('/profile')
            
        } catch (error) {
            alert('Erro no login, tente novamente')
        }
    }


    return(
        <div className="login-container">
            <section className="form">
                <img src={logo} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Login</h1>
                    <input 
                    placeholder='Sua ID' 
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />
                    <button className='button'>Entrar</button>

                    <Link className='back-link' to="/register"> <FiLogIn size={16} color='#e02041' /> Não tenho cadastro</Link>
                </form>
            </section>
                <img src={heroImg} alt="Heroes" />
        </div>
    )
}



