import React from 'react'
import { FiArrowLeft} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import './styles.css'


export default function Register(){
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Logo" />

                    <h1>Faça seu cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas encontrar os casos de sua ONG.</p>

                    <Link className='back-link'to='/'><FiArrowLeft color='#e02041' size={16}/> Voltar para login</Link>
                </section>
                <form>
                    <input type="text" placeholder='Nome da ONG' />
                    <input type="email" placeholder='E-mail' />
                    <input type="text" placeholder='WhatsApp' />
                    <div className="input-group">
                        <input type="text" placeholder='Cidade' />
                        <input type="text" placeholder='Uf' style={{width: 80}}/>
                    </div>
                    <button className='button'>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}


