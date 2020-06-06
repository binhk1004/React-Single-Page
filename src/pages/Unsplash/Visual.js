import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {ContentContainer} from "../../components/layout/Layout.Styled";

function Visual(props) {

    const {} = props;

    return (
        <Container>
            <ContentContainer>

            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
    min-height: 500px;  
    background: url(https://images.unsplash.com/photo-1589269406432-7b2f971f1783?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80) 50% / cover no-repeat;
`;

export default Visual;
