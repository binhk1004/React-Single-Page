import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import {Overlay} from "../../components/layout/Layout.Styled";

function Visual(props) {

  const {} = props;

  return (
      <Container>
          <Overlay alpha={0.3}/>
          <Text>
          <p>만나서 반가워요!</p>
          <h1>빈현이에요!</h1>
          </Text>

      </Container>
  )

}

const Container = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  position:relative;
  height: 100vh;
  background: #fff url('https://ifh.cc/g/OpzvgV.jpg') 50% 50% / cover no-repeat;
 

`;
const Text = styled.div`

  position:relative;
  text-align: center;
 p{
      font-size: 20px;
      color: #f0fff4;
      font-weight: 400;
      margin-bottom: 30px;
  }
  h1{
      font-size: 57px;
      color: #f0fff4;
      font-weight: 400;
  }
`;
export default Visual;