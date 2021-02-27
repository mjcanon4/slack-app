import React, { useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { db } from "../firebase";
import firebase from "firebase";

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
      userImage:
        "https://media-exp1.licdn.com/dms/image/C4D03AQFCsQf4MV6l1Q/profile-displayphoto-shrink_800_800/0/1598564472862?e=1619654400&v=beta&t=Wtumk2kw2VHmBnc9tw5k_sZO_UhZ19pE_RK23lf6T1c",
    });

    setInput(" ");
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
