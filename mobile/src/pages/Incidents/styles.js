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
export const HeaderText = styled.Text`
    font-size: 16px;
    color: #737380;
`
export const HeaderTextBold = styled.Text`
    font-weight: bold;
    font-size: 18px;
`
export const Title = styled.Text`
    margin-top: 30px;
    font-size: 22px;
    color: #13131a;
    font-weight: bold;
    
`
export const Description = styled.Text`
    font-size: 16px;
    color: #737380;
`
export const IncidentList = styled.FlatList`
    margin-top: 32px;
    padding-bottom: 25px;
`
export const Incident = styled.View`
    padding: 24px;
    margin-bottom: 16px;
    background-color: #fff;
    border-radius: 8px;
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
export const DetailsButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const DetailsButtonText = styled.Text`
    color: #e02041;
    font-size: 15px;
    font-weight: bold;
`

