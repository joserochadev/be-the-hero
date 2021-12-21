import React from "react"
import { Link } from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

import heroImg from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'

import './styles.css'

export default function Login(){
    return(
        <div className="container">
            <section className="form">
                <img src={logo} alt="Be The Hero" />

                <form>
                    <h2>Faça seu Login</h2>
                    <input placeholder='Sua ID' />
                    <button className='button'>Entrar</button>

                    <Link to="/register"> <FiLogIn size={16} color='#e02041' /> Não tenho cadastro</Link>
                </form>
            </section>
                <img src={heroImg} alt="Heroes" />
        </div>
    )
}



