import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import {todoActions} from "../../redux/actionCreators";
import {useSelector} from "react-redux";
import List from "../../components/List";

function Todo(props) {

  const {} = props;

  useEffect(()=> {
      todoActions.getTodos()
  }, [])
const todo = useSelector(state => state.todo);
  console.log(todo)

  return (
      <Container>
        <List data={todo.list}
              render={(item) => <div>{item.title}</div>}
        />

      </Container>
  )

}

const Container = styled.div`

`;

export default Todo;