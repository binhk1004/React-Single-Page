import React, {useState, useEffect} from "react";
import styled from 'styled-components'

function List(props) {

  const {
      data,
      render
  } = props;

  return (
      <Container className={'grid'}>
        <div className="grid-row">
            {
                data.map((item,i) => render(item,i))
            }

        </div>
      </Container>
  )

}

const Container = styled.div`

`;

export default List;