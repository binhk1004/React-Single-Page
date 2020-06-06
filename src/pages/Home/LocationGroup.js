import React, {useState, useEffect} from "react";
import styled from 'styled-components'

function LocationGroup(props) {

  const {
      title,
      children,
      className
  } = props;

  return (
      <Container className={className}>
        <h3>{title}</h3>
          {children}
      </Container>
  )

}

const Container = styled.div`
    margin-top: 50px;
    h3{
        font-size: 20px;
        font-weight: 500;
        color: #333;
        text-transform:capitalize;
        margin-bottom: 24px;
    
    }
`;

export default LocationGroup;