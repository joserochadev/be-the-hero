import styled from "styled-components/native"

export const Container = styled.View`
    flex: 1;
    padding: 0 24px;
    padding-top: 30px ;
    padding-bottom: 16px;
`
export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const LogoImg = styled.Image``
export const Incident = styled.View`
    padding: 24px;
    margin-bottom: 16px;
    background-color: #fff;
    border-radius: 8px;
    margin-top: 30px;
`
export const IncidentProperty = styled.Text`
    font-weight: bold;
    color: #41414d;
    font-size: 14px;
`
export const IncidentValue = styled.Text`
    color: #737380;
    font-size: 15px;
    margin-top: 8px;
    margin-bottom: 20px;
`
export const ContactBox = styled.View`
    background-color: #fff;
    border-radius: 8px;
    padding: 24px;
    margin-top: 25px;
    margin-bottom: 16px;

`
export const HeroTitle = styled.Text`
    font-weight: bold;
    color: #13131a;
    font-size: 20px;
    line-height: 24px;
`
export const HeroDescription = styled.Text`
    color: #737380;
    margin-top: 16px;
    font-size: 15px;
`
export const Actions = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
`
export const Action = styled.TouchableOpacity`
    background-color: #e02041;
    width: 48%;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`
export const ActionText = styled.Text`
    color: #fff;
    font-size: 15px;
    font-weight: bold;
`