import React from "react"
import { FiArrowLeft} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import './styles.css'

export default function NewIncident(){
    return(
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logo} alt="Logo" />

                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>

                <Link className='back-link'to='/profile'><FiArrowLeft color='#e02041' size={16}/> Voltar para Home</Link>
            </section>
            <form>
                <input type="text" placeholder='Título do caso' />
                <textarea placeholder='Descrição' />
                <input type="text" placeholder='Valor em reais' />
            
                <button className='button'>Cadastrar</button>
            </form>
        </div>
    </div>
    )
}





