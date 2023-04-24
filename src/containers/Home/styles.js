import styled from 'styled-components'
import { Link } from 'react-router-dom'
 // import burguer from './assets/burger.svg'

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    background-color: black;
    height: 100vh;

`
export const Image = styled.img `
    margin-top: 11px;
    width: 342px;
    height: 354px;

`
export const ContainerItems = styled.div `
    padding: 36px;
    display: flex;
   // align-items: center;
    flex-direction: column;

`

export const H1 = styled.h1 `
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;


    text-align: center;

    color: #FFFFFF;
    margin-bottom: 20px;
   
`
export const InputLabel = styled.p`
    letter-spacing: -0.408px;
    color: #EEEEEE;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    align-self: flex-start;
    margin-left: 15px;
   

`
export const Input = styled.input `
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;

color: #FFFFFF;

background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
border: none;
width: 342px;
height: 58px;

margin-bottom: 42px;

outline: none;
 
 padding-left: 15px;
`
export const Button = styled(Link) `
  background: #D93856;
border-radius: 14px;
width: 342px;
height: 68px;
border: none;
font-style: normal;
font-weight: 900;
font-size: 17px;
line-height: 2px; 
color: white;
cursor: pointer;
margin-top: 70px;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
text-decoration: none;
&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.5;
}
`;
