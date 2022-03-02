import React from "react"
import { Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import Logo from '../../assets/logo.png'

import {
    Container,
    Header,
    LogoImg,
    Incident,
    IncidentProperty,
    IncidentValue,
    ContactBox,
    HeroTitle,
    HeroDescription,
    Actions,
    Action,ActionText
} from './styles'

export default function Details(){

    const navigation = useNavigation()

    function navigateBack(){
        navigation.goBack()
    }

    return(
        <Container>
             <Header>
                <LogoImg source={Logo} />
                <Feather onPress={()=>{navigateBack()}} name="arrow-left" size={26} color="#e02041" />
            </Header>

            <Incident>
                    <IncidentProperty>CASO:</IncidentProperty>
                    <IncidentValue>Cachorrinha atropelada</IncidentValue>

                    <IncidentProperty>ONG:</IncidentProperty>
                    <IncidentValue>APAD</IncidentValue>
                    
                    <IncidentProperty>VALOR:</IncidentProperty>
                    <IncidentValue>R$ 120,00</IncidentValue>
            </Incident> 

            <ContactBox>
                <HeroTitle>Salve o dia!</HeroTitle>
                <HeroTitle>Seja o herói desse caso.</HeroTitle>

                <HeroDescription>Entre em contato:</HeroDescription>

                <Actions>
                    <Action onPress={()=>{}} ><ActionText>WhatsApp</ActionText></Action>
                    <Action onPress={()=>{}} ><ActionText>E-mail</ActionText></Action>
                </Actions>
            </ContactBox>

        </Container>
    )
}