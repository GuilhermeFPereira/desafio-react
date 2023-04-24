import React, { useState, useRef, } from 'react'

import { useNavigate } from "react-router-dom"

import axios from 'axios'

import Burger from '../../assets/burger.svg'

import {
  Container,
  H1,
  Image,
  ContainerItems,
  InputLabel,
  Input,
  Button,

} from './styles'

// JSX
// toda vez que coloco o {} - ele ja espera codigo javaScript
const App = () => {
  // const users = []
  const [orders, setOrders] = useState([]); // hooks // toda vez que eu estava digitando , ele pegava a informacao
  const navigate = useNavigate();


  const inputPedido = useRef() // so pega a informacao quando clikar no button
  const inputName = useRef()

  async function addNewOrder() {

   const { data: newOrder } = await axios.post("http://localhost:3001/orders", { 
      pedido: inputPedido.current.value,
       name: inputName.current.value 
      })

    setOrders([...orders, newOrder ]);

    navigate("/orders")

  }


  return (
    <Container>
      <Image alt='logo-burger' src={Burger} />
      <H1> Faca seu pedido!</H1>
      <ContainerItems>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputPedido} placeholder='Seu pedido?' />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder='Nome' />

        <Button to="/orders" onClick={addNewOrder} >Novo Pedido</Button>

    
      </ContainerItems>



    </Container>
  )
}

export default App