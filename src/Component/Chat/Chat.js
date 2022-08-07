import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import "./Chat.css";
import ChatInput from "./ChatInput/ChatInput";
import db from "../../firebase";
import Message from "./Message/Message";

function Chat() {
  const { roomId } = useParams();
  if (!roomId) {
    roomId = "fUviUxh0Yy5ANk1adiTp";
  }

  const [RoomDetails, setRoomDetails] = useState(null);
  const [RoomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  console.log(RoomDetails);
  console.log(RoomMessages);

  return (
    <div className="chat">
      <div className="chat_header">
        <div className="chat_headerLeft">
          <h4 className="channel_name">
            <strong>{RoomDetails?.name}</strong>
            <StarOutlineIcon />
          </h4>
        </div>
        <div className="chat_headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>

      <div className="chat_message">
        {RoomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
      <ChatInput channelName={RoomDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
