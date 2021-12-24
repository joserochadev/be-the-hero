import React, {useState} from "react"
import { FiArrowLeft} from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import './styles.css'

import api from '../../services/api'

export default function NewIncident(){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const ongId = localStorage.getItem('ongId')

    const navigate = useNavigate()

    async function handleNewIncident(e){
        e.preventDefault()

        const data = {
            title,
            description,
            value
        }

        try{
            await api.post('incidents', data, {
                headers: { authorization: ongId }
            })

            navigate('/profile')
        }catch(error){
            alert('Erro ao cadastrar novo caso, tente novamente')
        }
    }

    return(
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logo} alt="Logo" />

                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>

                <Link className='back-link'to='/profile'><FiArrowLeft color='#e02041' size={16}/> Voltar para Home</Link>
            </section>
            <form onSubmit={handleNewIncident}>
                <input 
                    placeholder='Título do caso'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea 
                    placeholder='Descrição'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <input 
                    placeholder='Valor em reais'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            
                <button className='button'>Cadastrar</button>
            </form>
        </div>
    </div>
    )
}





