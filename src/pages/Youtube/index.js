import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import {appActions} from "../../redux/actionCreators";
import {useSelector} from "react-redux";
import YoutubeVideo from "../../components/YoutubeVideo";
import Search from "../../components/Search";
import List from "../../components/List";

function Youtube(props) {

  const {} = props;

  const state = useSelector(state => state);
  console.log('@@ state', state)

  useEffect(()=>{
      appActions.youtubeSearch({
          key:'AIzaSyDhkSzaIHhqyPv0cahVvb5WqqoPTHqaiaU',
          part:'id, snippet',
          type:'video',
          maxResults:50,
          q:'트와이스'
      })

  },[])
    if (!state.app.youtubeVideos){
        return 'loading....'
    }
    const videos = state.app.youtubeVideos.items

  return (
      <Container>
          <Search/>
          <List data={videos}
                render={(item,i)=>{
                    return (<div key={i} className='grid-col'>
                        <YoutubeVideo   video={item}/>
                    </div>)
                }}/>



      </Container>
  )

}

const Container = styled.div`
 
`;

export default Youtube;