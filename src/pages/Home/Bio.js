import React from "react";
import styled from 'styled-components'
import {ContentContainer} from "../../components/layout/Layout.Styled";
import {FaInstagramSquare} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaBlogger} from "react-icons/fa";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {useSelector} from "react-redux";
import cn from  'classnames'

function Bio(props) {

    const app = useSelector(state => state.app);


    return (
        <Container className={cn("", {showBio:app.showBio})}>
            <ContentContainer>
                <BioContainer>
                    <div className="text">
                        <h2>About Me</h2>
                        <p>궁금한게 너무나 많고 책읽고, 공부하기를 즐겨하는 개발자가 되고 싶은 '김빈현' 이라고 합니다!</p>
                        <div className="links">
                            <a href="https://www.instagram.com/bin_89_hyun/?hl=ko">
                                <FaInstagramSquare/>
                            </a>
                            <a href="https://www.linkedin.com/in/bin-hyun-kim-4b8289b6/">
                                <FaLinkedin/>
                            </a>
                            <a href="https://github.com/binhk1004">
                                <FaGithub/>
                            </a>
                            <a href="https://velog.io/@binhk1004">
                                <FaBlogger/>
                            </a>
                        </div>
                    </div>
                    <div className="photo">
                        <img src="https://ifh.cc/g/5nB7L9.jpg" alt=""/>
                    </div>

                </BioContainer>
            </ContentContainer>
        </Container>
    )

}

const Container = styled.div`
  margin-top: -200px;
  position:relative;
  transform: translateY(40px);
  opacity: 0;
  transition: 0.4s;
  &.showBio{
    opacity: 1;
    transform: none;
  }
`;

const BioContainer = styled.div`
  align-items: center;
  max-width: 950px;
  background: #ffffff;
  border-radius: 6px;
  padding: 50px;
  display: flex;
  margin: auto;
  .text{
  flex: 5;
      h2{
        font-size: 32px;
        color: #333333;
        font-weight: 500;
        margin-bottom: 30px;
        text-transform:capitalize;
      }
      p{
        font-size: 20px;
        color: #6666 ;
        line-height: 1.6;
        max-width: 90%;
        margin-bottom: 25px;
      }
      .links{
          a{
              margin-right: 15px;
              font-size: 20px;
          }
      }
  }
  .photo{
    flex: 4;
    text-align:center;
    img{
      width: 300px;
      height: 300px;
      border-radius: 50%;
    }
  }

`;

export default Bio;