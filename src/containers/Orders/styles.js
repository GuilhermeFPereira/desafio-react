import styled from 'styled-components';
import { Link } from "react-router-dom" 

export const Container = styled.div`
background: #0A0A10;
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
height: 100%;  
min-height: 100vh;
`
export const Image = styled.img`
margin-top: 10px;
`
export const H1 = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 33px;
text-align: left;
color: #FFFFFF;
`
export const ContainerOrder = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 15px;
    width: 342px;
    height: 101px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 30px;
    flex-grow: 0;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
   
    p{
      color: #FFFFFF;
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
      
      margin-left: 15px;
      order:2;
      text-transform: uppercase;
    }
 .pName {
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
margin-left: 20px;
margin-left: 15px;
order:1;
text-transform: uppercase;
  } 
  button{
    background: none;
    border: none;
  }
    
`
export const Button = styled(Link)`
background: rgba(255, 255, 255, 0.14);
border-radius: 14px;
width: 342px;
height: 68px;
border: none;
margin-left: 35px;
font-style: normal;
font-weight: 900;
font-size: 17px;
line-height: 2px; 
color: white;
cursor: pointer;
margin-top: 130px;
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
`
export const ContainerItens2 = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap:10px;
`;
