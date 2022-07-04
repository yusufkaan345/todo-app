import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Modal,
  Input,
} from "@mui/material";
import "./Todo.css";
import db from "./firebase";
import DeleteIcon from "@mui/icons-material/Delete";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function Todo(props) {
    
  const [open, setOpen] = useState(false);

  const [input, setInput] = useState("");

  function deleteItem(e) {
    db.collection("todos").doc(props.item.id).delete();
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function updateTodo() {
    setOpen(false);
    db.collection("todos").doc(props.item.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
  }
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div style={style}>
          <h1 style={{ textAlign: "center", color: "white" }}>I am a modal</h1>
          <Input
            style={{ textAlign: "center", marginLeft: "25%", color: "white" }}
            placeholder={props.item.todo}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></Input>

          <Button
            style={{
              textAlign: "center",
              marginLeft: "35%",
              marginTop: "15%",
              marginBottom: "5%",
            }}
            variant="contained"
            onClick={updateTodo}
          >
            Update Todo
          </Button>
        </div>
      </Modal>

      <List className="todo_list">
        <ListItem>
        
          <ListItemText
            primary={props.item.todo}
            secondary="Deadline : x hours"
            style={{border: "1px solid black",padding:"10px" ,borderRadius:"8px",backgroundColor:"#F5E26A"}}
          >
           
          </ListItemText>
          
          <div style={{ marginRight: "35%" }}>

          <Button
              style={{ marginRight: "10px",marginLeft: "10px",backgroundColor: "green", color:"white"}}
              variant="outlined"
              onClick={handleOpen}
            >
              Edit
            </Button>
            <Button style={{ backgroundColor: "red" }} variant="contained" onClick={deleteItem}>
              <DeleteIcon></DeleteIcon> Delete Me
            </Button>

            
          </div>
        </ListItem>
      </List>
    </div>
  );
}
