import React from "react";
import { useNavigate } from "react-router-dom";
import db from "../../../firebase";
import "./SidebarOption.css";
function SidebarOption({ Icon, title, id, addChannelOption }) {
  const navigate = useNavigate();

  const selectChannel = () => {
    if (id) {
      navigate(`/rooms/${id}`);
    } else {
      navigate("title");
    }
  };

  const addChannel = () => {
    const channelName = prompt("Enter Channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption_icon" />}
      {/*render <Icon/> if Icon is true*/}
      {Icon ? (
        <h3 className="sidebarOption_channel">{title}</h3>
      ) : (
        <h3 className="sidebarOption_channel">
          <span className="sidebarOption_hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
