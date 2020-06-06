import React, {useState, useEffect} from "react";
import styled from 'styled-components'

function Gauge(props) {

  const {
      percentage,
      label,
      title
  } = props;

  return (
      <Container>
          <Title>{title}</Title>
          <GaugeContainer>
              <Inner percentage={percentage}>
                  {
                      label &&
                      <Label>{label}</Label>
                  }

              </Inner>
          </GaugeContainer>
      </Container>
  )

}

const Container = styled.div`
  
`;

const Title = styled.div`
    
    font-size: 16px;
    font-weight: 500;
    color: #333;
    text-transform:uppercase;
`;

const GaugeContainer = styled.div`
    background:#e9e9e9;
    border-radius: 3px;
`;

const Inner = styled.div`
    position:relative;;
    height: 7px;
    background:#fd735a;
    border-radius: 3px;
    width: ${props => props.percentage || 0}%;
    transition: 0.4s;
    // .isCurrent li :nth-child(2)&{
    // transition: 0.4s 0.1s;
    // }
    // .isCurrent li :nth-child(3)&{
    // transition: 0.4s 0.1s;
    // }
    // .isCurrent li :nth-child(4)&{
    // transition: 0.4s 0.1s;
    // }
    // .isCurrent & {
    //   width: ${props => props.percentage || 0}%;
    // }
`;

const Label = styled.div`
    position: absolute;
    right: 0;
    bottom: 110%;
    color: #fff;
    background:#fd735a;
    padding: 2px 4px 0;
    font-size: 11px;
    border-radius: 2px;
    
`;
export default Gauge;