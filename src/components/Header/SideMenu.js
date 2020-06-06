import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {AiOutlineClose} from "react-icons/ai";
import {Action} from "../../redux/app/redux";
import {useDispatch} from "react-redux";

function SideMenu(props) {

    const {} = props;
    const dispatch = useDispatch();

    return (
        <Container>
            Logo
            <ul>
                <li>sidemenu</li>
                <li>sidemenu</li>
                <li>sidemenu</li>
                <li>sidemenu</li>
                <li>sidemenu</li>
            </ul>

            <Close onClick={()=>dispatch(Action.Creators.handlesidemenu(false))}>
                <AiOutlineClose/>
            </Close>
            
        </Container>
    )
}

const Container = styled.div`
    position:fixed;
    top: 0;
    bottom: 0;
    left: -300px;
    z-index: 1000;
    background:#fff;
    width: 300px;
    padding: 50px 30px;
    color:#333;
    transition: .4s;
    .openSideMenu & {
        left: 0;
    }
    ul {
        margin-top: 40px;
        li {
           margin-bottom: 10px;
           cursor:pointer;
        }
    }
`;

const Close = styled.div`
    position: absolute;
    padding: 15px;
    right: 0;
    top: 0;
    cursor: pointer;
    font-size: 20px;
`;

export default SideMenu;
