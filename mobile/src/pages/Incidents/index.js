import React from "react"
import { View, Text } from "react-native"
import { Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

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

    return(
        <Container>
            <Header>
                <LogoImg source={Logo} />
                <HeaderText> Total de <HeaderTextBold>0 casos</HeaderTextBold></HeaderText>
            </Header>

            <Title>Bem Vindo!</Title>
            <Description>Escolha um dos casos abaixo e salve o dia.</Description>

            <IncidentList
                data={[1,2,3,4,5]}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={()=>(
                    <Incident>
                    <IncidentProperty>CASO:</IncidentProperty>
                    <IncidentValue>Cachorrinha atropelada</IncidentValue>

                    <IncidentProperty>ONG:</IncidentProperty>
                    <IncidentValue>APAD</IncidentValue>
                    
                    <IncidentProperty>VALOR:</IncidentProperty>
                    <IncidentValue>R$ 120,00</IncidentValue>

                    <DetailsButton onPress={()=> navigation.navigate('Details')}>
                        <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
                        <Feather name="arrow-right" size={16} color="#e02041" />
                    </DetailsButton>

                </Incident>    
                )}
            />

        </Container>
    )
}