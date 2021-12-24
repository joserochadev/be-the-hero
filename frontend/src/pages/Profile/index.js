import React, {useEffect, useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { FiPower, FiTrash2} from 'react-icons/fi'

import api from '../../services/api'

import Logo from '../../assets/logo.svg'
import './styles.css'

export default function Profile(){
    const navigate = useNavigate()

    const ongName = localStorage.getItem('ongName')
    const ongId = localStorage.getItem('ongId')

    const [incidents, setIncidents] = useState([])

    useEffect(()=>{

        api.get('profile',{
            headers:{
                authorization: ongId
            }
        }).then(response => {setIncidents(response.data)})

    },[])

    // deletar incident
    async function handleDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`, {
                headers:{ authorization: ongId }
            })

            // filtrando todos os incidents e deixando apenas aqueles com id deferente do que foi deletado
            setIncidents(incidents.filter( incidents => incidents.id !== id))
        } catch (error) {
            alert('Erro ao deletar o caso, tente novamente')
        }
    }

    // LogOut da ong
    function handlelogout(){
        localStorage.clear()
        navigate('/')
    }

    return(
        <div className="profile-container">
            <header>
                <img src={Logo} alt="Logo" />
                <span>Bem vinda, {ongName}</span>

                <Link to='/incident/new' className='button'>Cadastrar novo caso</Link>
                <button onClick={handlelogout} type='button'>
                    <FiPower size={18} color='#e02041'/>
                </button>
            </header>


            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                <li>
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{incident.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                    <button onClick={()=> handleDeleteIncident(incident.id)} type='button'>
                        <FiTrash2 size={20} color='#a8a8b3'/>
                    </button> 
                </li>
                ))}
            </ul>
        </div>
    )
}







