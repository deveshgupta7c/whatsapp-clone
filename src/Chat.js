import React, {useEffect, useState} from 'react';
import "./Chat.css";
import {Avatar, IconButton} from "@material-ui/core";
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ChatIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
function Chat() {

        const [input,setInput]=useState("");
        const [seed,setSeed] = useState("");
        
        useEffect(() => {
            setSeed(""+Math.floor(Math.random()*5000));
        
        }, []);
        
        const sendMessage = (event) => {
            event.preventDefault();
            console.log("You type >>>", input);
            setInput("");
  };
    
    return (
        <div className="chat">

        <div className="header">
        <Avatar src={'https://avatars.dicebear.com/api/human/${seed}.svg'}/>
        <div className="headerInfo">
        <h3>Room Name</h3>
        <p>Last seen at ....</p>
        </div>
        <div className="chath_right">
        <div className="headerIcons">
        <IconButton>
            <SearchOutlined />
            </IconButton>
            <IconButton>
            <ChatIcon />
            </IconButton>
            <IconButton>
            <MoreVertIcon />
            </IconButton>
        
        </div>
        </div>
        </div>
        <div className="chatting">
        <p className={'message ${true && "chatUser"}'}>
        <span className="timestamp">3:52pm</span>
        </p>
        
        </div>
        <div className="footer">
        <InsertEmoticonIcon></InsertEmoticonIcon>
        <form>
        <input type= "text" value={input} onChange={(e)=>{
            setInput(e.target.value)
        }} placeholder="Enter message" />
        <button> Send a message</button>
        
        </form>
        <MicIcon/>
        </div>
        </div>
    )
}

export default Chat;
