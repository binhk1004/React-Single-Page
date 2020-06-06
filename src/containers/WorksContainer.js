import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

function WorksContainer(props) {

    const {
        data,
        render = () => {},
    } = props;

    return (
        <Container>
            <div className="list-grid">
                <div className="list-row">
                    {
                        data.map((item, i) => {
                            return render(item, i)
                        })
                    }
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    
`;

export default WorksContainer;
