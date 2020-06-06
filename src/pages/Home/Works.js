import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import {ShadowLine, TitleArea} from "../../components/layout/Layout.Styled";
import {works} from "../../mock";
import WorkItem from "./WorkItem";

function Works(props) {

  const {} = props;

  return (
      <Container>

            <TitleArea>
                <p>따란</p>

                <h2>
                   My works
                    <ShadowLine mt={30}/>
                </h2>

            </TitleArea>
            <div className="grid">
                <div className="grid-row">
                    {
                        works.map((work,index) => {
                            return(
                                <div key={index} className="grid-col">
                                    <WorkItem work={work}/>

                                </div>
                            )
                        })
                    }
                </div>
            </div>

      </Container>
  )

}

const Container = styled.div`
  padding: 80px 0;
`;

export default Works;