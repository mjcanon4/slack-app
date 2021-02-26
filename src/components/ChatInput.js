import React, { useRef, useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { db } from "../firebase";
import firebase from "firebase";
import { selectRoomId } from "../features/appSlice";
import { useSelector } from "react-redux";
import { useDocument, useCollection } from "react-firebase-hooks/firestore";
import Chat from "./Chat";

function ChatInput(channelName, channelId) {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault(); // prevents refresh

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Michael Canon",
    });

    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`message # ${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > Button {
    display: none !important;
  }
`;
