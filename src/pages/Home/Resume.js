import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ContentContainer, ShadowLine, TitleArea} from "../../components/layout/Layout.Styled";
import ProgressBar from "react-bootstrap/ProgressBar";
import Gauge from "../../components/Gauge";




function Resume(props) {

  const {} = props;

  return (
      <Container>
          <ContentContainer>
          <TitleArea>
              <p>MY RESUME</p>
              <h2>
                  MY EXPERTISES
                  <ShadowLine mt={30}/>
              </h2>
          </TitleArea>
              <div className="expertises">
                  <div className="item col-half">
                      <h3>My Experience</h3>
                      <ul>
                          <li>
                              <div className="card-item">
                                  <h5>국내API팀 | 팀원</h5>
                                  <h6>2018. 05 - 2019. 03 | 온다</h6>
                                  <p>판매 플랫폼과의 협업</p>
                              </div>
                          </li>
                          <li>
                              <div className="card-item">
                                  <h5>상품운영팀 | 팀원</h5>
                                  <h6>2016. 10 - 2018. 04 | 헬로네이처</h6>
                                  <p>증가하는 상품 수에 따른 상품관리 업무의 효율화 및 안전 관리 프로세스 수립</p>
                              </div>
                          </li>
                          <li>
                              <div className="card-item">
                                  <h5>운영팀 | 사원</h5>
                                  <h6>2015. 12 - 2016. 09 | 내담네트웍스</h6>
                                  <p>서비스 론칭 전 대량의 상품을 단기간 내에 정확하게 등록하기 위해 꼼꼼하게 검수 업무를 진행함</p>
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div className="item col-half">
                      <h3>My Education</h3>
                      <ul>
                          <li>
                              <div className="card-item">
                                  <h5>ALMA - La Scuola Internazionale di Cucina Italiana</h5>
                                  <h6>2011 - 2014 | 졸업</h6>
                                  <p>이탈리아 조리 전공</p>
                              </div>
                          </li>
                          <li>
                              <div className="card-item">
                                  <h5>문화고등학교</h5>
                                  <h6>2005 - 2008 | 졸업</h6>
                                  <p>인문계</p>
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div className="item col-full">
                      <h3>coding skills</h3>
                      <ul className={'skill-list'}>
                          <li>
                              <div className="skill">
                                  <Gauge title={'Html'} percentage={60} label={'html'}/>
                              </div>
                          </li>
                          <li>
                              <div className="skill">
                                  <Gauge title={'Scss'} percentage={40} label={'scss'}/>
                              </div>
                          </li>
                          <li>
                              <div className="skill">
                                  <Gauge title={'Javascript'} percentage={40} label={'Javascript'}/>
                              </div>
                          </li>
                          <li>
                              <div className="skill">
                                  <Gauge title={'React'} percentage={30} label={'React'}/>
                              </div>
                          </li>
                      </ul>
                  </div>

              </div>
          </ContentContainer>


      </Container>
  )

}

const Container = styled.div`

  .expertises{
      display: flex;
      flex-wrap: wrap;
      margin-left: -15px;
      margin-right: -15px;
      ul{
        
        li{
            margin-top: 30px;
        }
      }
      .skill-list{
        background:#fff;
        padding: 24px;
        }
      .col-half{
          width: 50%;
          padding: 15px;
      }
      .col-full{
          width: 100%;
          padding: 15px;
      }
      
      .card-item{
          background:#fff;
          padding: 24px;
          border: #ddd;
          h5{
              font-size: 18px;
              color: #333;
              margin-bottom: 15px;
          }
          h6{
              font-size: 12px;
              background-color: #fd735a;
              display: inline-block;
              color: #ffff;
              padding: 2px 8px 0;
              border-radius: 3px;
              font-weight: 600;
              margin-bottom: 20px;
          }
          p{
          
          }
      }
  }
  
`;

export default Resume;