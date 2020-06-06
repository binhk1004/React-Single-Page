import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";


function Nav(props) {

    const {} = props;

    return (
        <Container>
            <ul>
                <li>
                    <Link to={'/'}>
                        home
                    </Link>
                </li>
            </ul>

        </Container>
    )
}

const Container = styled.nav`
    flex: 1;
    display:flex;
    justify-content: flex-end;
    ul {
        display:flex;
        li {
            a{
            height: 76px;
              color: #333333;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 15px;
              text-transform:capitalize;
            }
        }
    }
`;

export default Nav;
