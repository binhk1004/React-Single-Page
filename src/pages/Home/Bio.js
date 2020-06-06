import React from "react";
import styled from 'styled-components'
import {ContentContainer} from "../../components/layout/Layout.Styled";
import {FaFacebookSquare} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
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
                        <p>아직은 서툴지만 코딩을 너무 좋아해서 개발자로 전직하기 위해 열심히 공부했어요!</p>
                        <div className="links">
                            <a href="">
                                <FaFacebookSquare/>
                            </a>
                            <a href="https://www.linkedin.com/in/bin-hyun-kim-4b8289b6/">
                                <FaLinkedin/>
                            </a>
                            <a href="https://github.com/binhk1004">
                                <FaGithub/>
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