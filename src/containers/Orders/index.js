
import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom"

import axios from "axios" 

import Pedido from '../../assets/sacola.svg'
import Trash from '../../assets/lixo.svg'

import {
  Container,
  Image,
  H1,
  Button,
  ContainerOrder,
  ContainerItens2,

} from "./styles";

function Orders() {

  const [order, setOrder] = useState([]);
  const navigate = useNavigate();
 
  useEffect(() => {
    async function fetchOrder() {
      const { data: newOrder } = await axios.get("http://localhost:3001/orders")
      setOrder(newOrder);
    }
    fetchOrder()
  }, [])

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/orders/${orderId}`)

    const newOrder = order.filter(order => order.id !== orderId)
    setOrder(newOrder)
  }

  function goBackPage(){
    navigate("/")
  }

  return (
    <Container>
      <Image alt='Logo-Hamburgueria' src={Pedido} />
      <H1>Pedidos</H1>
      <ul>

        {order.map(order => (
          <ContainerOrder key={order.id}>
            <ContainerItens2>
              <p>{order.pedido}</p>
              <p className="pName">{order.name}</p>
            </ContainerItens2>
            <button onClick={() => deleteOrder(order.id)} className='Trash'><img src={Trash} alt="trash" /></button>
          </ContainerOrder>
        ))
        }

      </ul>

      <Button to="/" >Home</Button>
    </Container>

  )

}
export default Orders 
