import React from 'react';
import styled from 'styled-components';

function Page404 (props) {
    const {} = props;
    return (
          <Container>
              <img src="https://education.oracle.com/file/general/404.png" alt=""/>
          </Container>
      )
}

const Container = styled.div`
    height: 100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    img {
        max-width: 90%;
    }
`;

export default Page404;
