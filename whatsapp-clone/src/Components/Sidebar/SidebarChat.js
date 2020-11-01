import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar, IconButton } from "@material-ui/core";
import db from "../../firebase";
import { NavLink, Link } from "react-router-dom";

function SidebarChat({ addNewChat, id, name }) {
  const [seed, setSeed] = useState(0);
  const [messages, setMessages] = useState("");
  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 500000));
  }, []);
  const createChat = () => {
    const roomName = prompt("Please Enter Name Of The Chat Room");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };
  const deleteChat = () => {
    alert("Delete it");
  };
  return !addNewChat ? (
    <NavLink to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`} />
        <div className="sidebarChat__info">
          <div className="core">
            <h3>{name}</h3>
            <p>{messages[0]?.message}</p>
          </div>
          {/* <div className="del">
            <p onClick={deleteChat}>x</p>
          </div> */}
        </div>
      </div>
    </NavLink>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;
