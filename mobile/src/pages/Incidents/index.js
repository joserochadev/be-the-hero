import React, {useEffect, useState} from "react"
import { View, Text } from "react-native"
import { Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import {api} from '../../service/api'

import Logo from '../../assets/logo.png'

import {Container,
         Header,
         LogoImg,
         HeaderText,
         HeaderTextBold,
         Title,
         Description,
         IncidentList,
         Incident,
         IncidentProperty,
         IncidentValue,
         DetailsButton,
         DetailsButtonText
        
        } from './styles'

export default function Incidents(){
    const navigation = useNavigation()

    const [incidents, setIncidents] = useState([])
    const [total, setTotal] = useState(0)

    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    async function loadIncidents(){
        if(loading){
            return
        }

        if( total > 0 && incidents.length == total){
            return
        }

        setLoading(true)

        const response = await api.get('incidents')
        console.log(response.data.length)
        

        setIncidents([...incidents, ...response.data])
        setTotal(response.data.length)
        setPage(page + 1)
        setLoading(false)
    }

    useEffect(()=>{
        loadIncidents()
    },[])

    return(
        <Container>
            <Header>
                <LogoImg source={Logo} />
                <HeaderText> Total de <HeaderTextBold>{total} casos</HeaderTextBold></HeaderText>
            </Header>

            <Title>Bem Vindo!</Title>
            <Description>Escolha um dos casos abaixo e salve o dia.</Description>

            <IncidentList
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                showsVerticalScrollIndicator={false}
                renderItem={({item: incident})=>(
                <Incident>
                    <IncidentProperty>ONG:</IncidentProperty>
                    <IncidentValue>{incident.name}</IncidentValue>

                    <IncidentProperty>CASO:</IncidentProperty>
                    <IncidentValue>{incident.title}</IncidentValue>
                    
                    <IncidentProperty>VALOR:</IncidentProperty>
                    <IncidentValue>{Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(incident.value)}</IncidentValue>

                    <DetailsButton onPress={()=> navigation.navigate('Details',{incident})}>
                        <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
                        <Feather name="arrow-right" size={16} color="#e02041" />
                    </DetailsButton>

                </Incident>    
                )}
            />

        </Container>
    )
}