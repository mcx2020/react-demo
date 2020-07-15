import React, {useEffect} from 'react'
import styled from "styled-components"
import {useState} from 'react'

const Wrapper = styled.button`
  background-color: transparent;
  border: 1px solid #555;
  width:60px;
  height:60px;
  outline:none;
  font-size:22px;
`

function Button(props){
  const [n,setN] = useState(1)
  useEffect(()=>{
    setN(n+1)
  },[n])
  return (
    <Wrapper>{props.value}</Wrapper>
  )
}

export {Button}