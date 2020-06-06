import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Switch, Route, Redirect} from 'react-router-dom';
import Page404 from "./pages/errors/Page404";
import Home from "./pages/Home";
import Header from "./components/Header";
import Youtube from "./pages/Youtube";
import Unsplash from "./pages/Unsplash";
import useScrollPosition from '@react-hook/window-scroll'
import {appActions} from "./redux/actionCreators";
import {useSelector} from "react-redux";
import Todo from "./pages/Todo";


function App() {


    const scrollY = useScrollPosition(60 /*fps*/)
    const app = useSelector(state => state.app)
    const setPropsByScrollTop = (point, prop) => {
        if (scrollY > point) {
            if (!app[prop]) {
                appActions.updateState({
                    [prop]: true

                })
            }
        } else {
            if (app[prop]) {
                appActions.updateState({
                    [prop]: false
                })

            }
        }
    }
    useEffect(() => {
        setPropsByScrollTop(200, 'showBio')
        setPropsByScrollTop(600, 'showHeader')
    }, [scrollY]);

    return (
        <Container>
            <Header/>
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/todo" component={Todo}/>
                <Route exact path="/unsplash" component={Unsplash}/>
                <Route exact path="/youtube" component={Youtube}/>
                <Redirect exact from='/' to='/home'/>
                <Route component={Page404}/>

            </Switch>
        </Container>
    )
}

const Container = styled.div`
    background:#f3f6f7;
    min-height: 100vh;
`;

export default App;
