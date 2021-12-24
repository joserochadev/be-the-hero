import React, { useState} from 'react'
import { FiArrowLeft} from 'react-icons/fi'
import { Link, useNavigate} from 'react-router-dom'

import logo from '../../assets/logo.svg'
import './styles.css'
import api from '../../services/api'


export default function Register(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, seWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')

    const navigate = useNavigate()

    async function handleRegister(e){
        e.preventDefault()

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }

        try{
            const response = await api.post('ongs', data)
            alert(`Seu ID de acesso: ${response.data.id}`)

            navigate('/')
            
        }catch(error){
            alert('Erro de cadastro, tente novamente')
        }
    }


    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Logo" />

                    <h1>Faça seu cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas encontrar os casos de sua ONG.</p>

                    <Link className='back-link'to='/'><FiArrowLeft color='#e02041' size={16}/> Voltar para login</Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                    type="text" 
                    placeholder='Nome da ONG'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />

                    <input 
                    type="email" 
                    placeholder='E-mail' 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <input 
                    type="text" 
                    placeholder='WhatsApp' 
                    value={whatsapp}
                    onChange={e => seWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                        type="text" 
                        placeholder='Cidade' 
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />

                        <input 
                        type="text" 
                        placeholder='Uf' 
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        style={{width: 80}}/>
                    </div>
                    <button className='button' type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}


