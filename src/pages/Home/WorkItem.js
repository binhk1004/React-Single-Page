import React, {useState, useEffect} from "react";
import styled from 'styled-components'

function WorkItem(props) {

  const {
      work
  } = props;

  return (
      <Container className="grid-item">
          <Poster href={work.to}>
              <img src={work.thumb} alt=""/>
          </Poster>
          <Description>
              <h3><a href={work.to}>{work.title}</a></h3>
              <p>
                  {
                      work.skills.map((skill,index) => {
                          return <span key={index}>{skill}</span>
                      })
                  }
              </p>
          </Description>
      </Container>
  )

}

const Container = styled.div`
  border-radius: 6px;
  overflow: hidden;
  transition: 0.4s;
  &:hover{
      box-shadow:  1px 2px 30px rgba(0,0,0,0.2);
   }

`;

const Poster = styled.a`
    height: 170px;
    display:block;
    background: #eee;
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    
`;

const Description = styled.div`
  padding: 18px;
  background: #ffffff;
    h3{
    font-size: 20px;
    text-transform:capitalize;
    font-weight: 500;
    margin-bottom: 10px;
    }
    a{
      color: #333;
      &:hover{
        color: #037fea;
      }
    }
    p{
      span{
        font-size: 12px;
        font-weight:400;
        color: #666;
        margin-right: 8px;
        text-transform: uppercase;
        }
     }
`;
export default WorkItem;