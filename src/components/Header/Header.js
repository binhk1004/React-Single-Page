import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import SideMenu from "./SideMenu";
import Nav from "./Nav";
import styled from "styled-components";
import {appActions} from "../../redux/actionCreators";
import {useSelector} from "react-redux";
import cn from 'classnames';
import {ContentContainer} from "../layout/Layout.Styled";

function Header() {

    const app = useSelector(state => state.app);
    return (
        <Container className={cn({openSideMenu: app.openSideMenu,showHeader:app.showHeader})}>
            <ContentContainer className={'container'}>
                <Logo>Logo</Logo>
                <Nav/>
                <Button onClick={() => appActions.handlesidemenu(true)}>메뉴</Button>
                <SideMenu/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
    height: 76px;
    background:#ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1500 ;
    opacity: 0;
    transform: translateY(-100%);
    transition: 0.4s;
    &.showHeader{
      opacity: 1;
      transform: none;
    }
    .container{
    display: flex;
    }
`;

const Logo = styled.div`
    display:flex;
    align-items:center;
    cursor:pointer;
`;

const Button = styled.div`
    color:#333333;
    cursor:pointer;
    padding: 20px;
    display: flex;
    align-items:center;
`;


export default withRouter(Header);

