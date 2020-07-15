import React from 'react'
import {Board} from './Board'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 100px;
  display:flex;
  justify-content:center;
  align-items:center;
  border:1px solid red;
`

function Game(){
  return (
    <Wrapper>
      <Board />
    </Wrapper>

  )
}

export {Game}

