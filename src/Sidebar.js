import React from 'react';
import {Avatar, IconButton} from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ChatIcon from '@material-ui/icons/Chat';
import {SearchOutlined} from "@material-ui/icons";
import Sidechat from "./Sidechat";
import db from "./firebase";
import "./Sidebar.css";
import {useEffect, useState} from 'react';
function Sidebar() {
    const [rooms, setRooms] = useState([]);
 

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe();
    };
  }, []);
    return (
        <div className="sidebar">
            <div className="side_header">
            <Avatar />
            <div className="side_headerright">
            <IconButton>
            <DonutLargeIcon />
            </IconButton>
            <IconButton>
            <ChatIcon />
            </IconButton>
            <IconButton>
            <MoreVertIcon />
            </IconButton>
            </div>
            </div>
            <div className="side_search">
            <div className="search_continer">
            <SearchOutlined/>
            <input placeholder="Search or start new chat" type="text">
            </input>
            </div>
            </div>
            <div className="side_list">
            <Sidechat addNewChat />
            {rooms.map((room) => (
              <Sidechat key={room.id} id={room.id} name={room.data.name} />
            ))}
            </div>
        </div>
    )
}

export default Sidebar
