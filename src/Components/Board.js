import React from 'react'
import styled from 'styled-components'
import {Button} from './Button'

const Wrapper = styled.div`
  background: #eee;
  display:flex;
  flex-wrap: wrap;
  justify-content:center;
  align-items:center;
  width:180px;
`

function Board(){
  return (
    <Wrapper>
      <div><Button value={1} /></div>
      <div><Button value={2} /></div>
      <div><Button value={3} /></div>
      <div><Button value={4} /></div>
      <div><Button value={5} /></div>
      <div><Button value={6} /></div>
      <div><Button value={7} /></div>
      <div><Button value={8} /></div>
      <div><Button value={9} /></div>
    </Wrapper>

  )
}

export {Board}