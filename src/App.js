import React, { useState ,useEffect} from "react";
import {Button,FormControl,Input,InputLabel}from "@mui/material";
import Todo from './Todo'
import "./App.css";
import db from "./firebase";
import firebase from "firebase/compat/app";


function App() {
  const [todos, setTodos] = useState([

  ]);

  useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot( snapshot=>{
      setTodos(snapshot.docs.map(doc=>({id:doc.id , todo:doc.data().todo})))
    })
  },[]);

  const [input, setInput] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
      
    db.collection('todos').add({
      todo:input,
       timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
      setTodos([...todos, input]);
      setInput("");
    
  };

  return ( 
    <div className="App" >
      <h1>Hello Hardworking Person</h1>
      
      <form action="">
        <FormControl>
          <InputLabel style={{marginLeft:"20px"}} >Write a todo !!</InputLabel>
          <Input style={{margin:"25px 20px"}}
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          ></Input>
        </FormControl>
        <Button style={{margin:"15px 20px"}}
          disabled={!input}
          variant="contained"
          type="submit"
          onClick={addTodo}
        >
          Add Todo
        </Button>
      </form>

      <ul style={{marginLeft:"25%"}}>
        {todos.map((item) => (
          
          <Todo item={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;

