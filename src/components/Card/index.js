import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import Images from "../../images/Images";

function Card (props) {
    const {
        poster,
        title,
        author,
        onClick = () => {},
    } = props;
    return (

          <Container onClick={onClick} className={"list-item"}>
              <Poster>
                  <LazyLoad height={160}>
                      <img src={poster} alt={`${title}의 콘텐츠 이미지`}/>
                  </LazyLoad>
              </Poster>
              <Content>
                  <div className="title">{title}</div>
                  <div className="author">{author}</div>
              </Content>
          </Container>
      )
}

const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 330px;
    height: 380px;
    background:#fff;
    border-radius: 6px;
    overflow:hidden;
    box-shadow: 0 6px 25px rgba(23,25,29,.05);
    transition: .3s;
    &:hover {
        box-shadow: 0 6px 35px rgba(23,25,29,.15);
        transform: translateY(-4px);
    }
`;

const Poster = styled.div`
    position:relative;
    height: 160px;
    overflow:hidden;
    background: #eee url(${Images.dot_row}) 50% no-repeat;
    cursor:pointer;
    ${props => props.big && `
        height: 220px;    
    `};    
    img {
      position:absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`;

const Content = styled.div`
    padding: 15px 18px;
    flex: 1;
    display:flex;
    flex-direction: column;
    .title {
      font-size: 18px;
      font-weight: 500;
      color:#333;
    }
    .author {
    
    }  
`;


export default Card;
