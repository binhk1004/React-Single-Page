import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import {appActions} from "../../redux/actionCreators";

function Search(props) {

  const {} = props;

  const [value, setValue] = useState()

  return (
      <Container>
        <input type='text'
               onChange={(e)=>{
            setValue(e.target.value)

        }}
            onKeyPress={(e)=>{
                if(e.key === 'Enter'){
                    appActions.youtubeSearch({
                        key:'AIzaSyDhkSzaIHhqyPv0cahVvb5WqqoPTHqaiaU',
                        part:'id, snippet',
                        type:'video',
                        maxResults:50,
                        q:value
                    })


                }
            }}

        />
      </Container>
  )

}

const Container = styled.div`

`;

export default Search;