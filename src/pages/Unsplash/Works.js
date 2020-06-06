import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {useSelector} from "react-redux";
import WorksContainer from "../../containers/WorksContainer";
import Card from "../../components/Card";

function Works(props) {

    const {} = props;

    const {app} = useSelector(state => state);
    const data = app.photos || [];

    console.log("@@ data", data);

    return (
        <Container>
            <WorksContainer data={data}
                            render={(item, i) => (
                                <div className="list-col" key={i}>
                                    <Card
                                          poster={item.urls.small}
                                          title={item.alt_description}
                                          author={item.user.username}
                                    />
                                </div>
                            )}
            />
        </Container>
    )
}

const Container = styled.div`
    min-height: 300px;
`;

export default Works;
