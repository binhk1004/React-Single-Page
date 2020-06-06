import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import {ContentContainer, ShadowLine, TitleArea} from "../../components/layout/Layout.Styled";
import MapContent from "./Map";
import{FaMapMarkedAlt} from "react-icons/fa";
import {FaMobileAlt} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";
import LocationGroup from "./LocationGroup";

function Location() {



  return (
      <Container>
          <ContentContainer size={'small'}>
              <TitleArea>
                  <p>SAY HELLO</p>
                  <h2>
                      CONTACT
                      <ShadowLine mt={30}/>
                  </h2>
              </TitleArea>
              <LocationGroup title={'My location'}>
                  <MapContent/>
              </LocationGroup>
              <LocationGroup title={'Get in Touch'} className={'get-in-touch'}>
                  <ul>
                      <li>
                          <div className="boxs">
                              <div className="links">
                                  <a href="">
                                      <FaMapMarkedAlt/>
                                  </a>
                              </div>
                              <h4>경기도 용인시 기흥구 구갈동</h4>
                              <h3>Address</h3>
                          </div>
                      </li>
                      <li>
                          <div className="boxs">
                              <div className="links">
                                  <a href="">
                                      <FaMobileAlt/>
                                  </a>
                              </div>
                              <h4>010-7310-8057</h4>
                              <h3>Call Us</h3>
                          </div>
                      </li>
                      <li>
                          <div className="boxs">
                              <div className="links">
                                  <a href="">
                                      <FaEnvelope/>
                                  </a>
                              </div>
                              <h4>binhk1004@gmail.com</h4>
                              <h3>Email Us</h3>
                          </div>
                      </li>
                  </ul>

              </LocationGroup>
              <LocationGroup title={'Contact Form'} className={'contact-form'}>
                  <form>
                      <div className="form-container">
                          <div className="form-item col-half">
                              <label>
                                  <input type="text"
                                  placeholder={'Your name*'}/>
                              </label>
                          </div>
                          <div className="form-item col-half">
                              <label>
                                  <input type="text"
                                         placeholder={'Your email*'}/>
                              </label>
                          </div>
                          <div className="form-item col-full">
                              <label>
                                  <input type="text"
                                         placeholder={'Your subject*'}/>
                              </label>
                          </div>
                          <div className="form-item col-full">
                              <label>
                                  <textarea placeholder={'Your message*'}/>
                              </label>
                          </div>
                      </div>
                      <button type={'submit'}>
                          submit
                      </button>
                  </form>
              </LocationGroup>
          </ContentContainer>
      </Container>
  )

}

const Container = styled.div`
  padding-bottom: 100px;
.contact-form{
    button{
        background:#fd735a;
        width: 158px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        text-transform:uppercase;
        border: 0px;
        margin: 30px auto 0;
    }
}

.form-container{
      display: flex;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;
          .form-item {
            label {
              display: flex;
              align-items: center;
              width: 100%;
              background-color: #fff;
              padding: 0 10px;
              input{
                display: inline-block;
                border: none;
                background: none;
                height: 56px;
              }
              textarea{
                display: inline-block;
                width: 100%;
                border: none;
                background:none;
                resize: none;
                
              }
            }
          }
          .col-half{
              width: 50%;
              padding: 15px;
          }
          .col-full{
              width: 100%;
              padding: 15px;
          }
    }
    
.get-in-touch{
    ul{
      display: flex;
      margin-right: -15px;
      margin-left: -15px;
      li{
          width: 33.33%;
          padding: 15px;
      }
    .boxs{
            text-align: center;
            background:#ffffff;
            padding: 24px;
            overflow: hidden;
            transition: 0.4s;
            &:hover{
                box-shadow:  1px 2px 30px rgba(0,0,0,0.2);
                  }
            .links{
                font-size: 35px;
                margin: 0 0 24px;
              }
            h4{
                font-size: 18px;
            }
            h3{
                font-size: 14px;
                font-weight: bold;
                margin: 4px 0 0;
        }

    }
}

    .contact-form{
    
    }
    
    



.contact{
    
    
      h5{
      margin: 0 0 24px;
      padding: 48px 0 0;
      font-size: 20px;
      }
        .contact-box{
          display: flex;
          width: 100%;
          
          
         .outline{
          padding: 0 15px;
          display: flex;
         
         
}
}
}
}



`;



export default Location;