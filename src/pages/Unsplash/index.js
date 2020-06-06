import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import Visual from "./Visual";
import Works from "./Works";
import api from "../../api";
import {appActions} from "../../redux/actionCreators";

function Unsplash(props) {

  const {} = props;
    useEffect(() => {
        api.getPhotos({page:2}).then((res) => {
            appActions.updateState({
                photos: res.data
            })
        })
    }, [])

  return (
      <Container>
          <Visual/>
          <Works/>
      </Container>
  )

}

const Container = styled.div`

`;

export default Unsplash;