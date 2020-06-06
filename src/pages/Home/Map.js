/*global kakao*/
import React, { Component } from "react";
import styled from 'styled-components'

class MapContent extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src =
            "https://dapi.kakao.com/v2/maps/sdk.js?appkey=38855c080dfabb21341c5175aa9f3338&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                let container = document.getElementById("Mymap");
                let options = {
                    center: new kakao.maps.LatLng(37.2772562,127.1135857),
                    level: 4
                };

                const map = new window.kakao.maps.Map(container, options);

            });
        };

    }
    render() {
        return <MapContents id="Mymap"></MapContents>
    }
}
const MapContents = styled.div`
  height: 500px;
`;

export default MapContent;
