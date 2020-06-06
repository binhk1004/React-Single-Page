import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import Visual from "./Visual";
import Bio from "./Bio";
import Works from "./Works";
import Resume from "./Resume";
import Location from "./Location";


function Home(props) {

    const {} = props;



    return (
        <Container>
            <Visual/>
            <Bio/>
            <Works/>
            <Resume/>
            <Location/>
        </Container>
    )
}

const Container = styled.div`
   
`;

export default Home;
