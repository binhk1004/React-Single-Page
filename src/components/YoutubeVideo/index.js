import React, {useState, useEffect} from "react";
import styled from 'styled-components'

function YoutubeVideo(props) {

  const {
      video
  } = props;
  
  return (
      <Container className="grid-item">
        <div className="thum">
            <img src={video.snippet.thumbnails.default.url} alt=""/>
        </div>
          <div className="desc">
              <h3>{video.snippet.title}</h3>
          </div>
      </Container>
  )

}

const Container = styled.div`
  height: 300px;

`;

export default YoutubeVideo;