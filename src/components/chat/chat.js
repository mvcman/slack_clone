import React, { useEffect } from "react";
import './chat.css';
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../../firebase';
import Message from './message';
import ChatInput from './chatinput';

export default function Chat(){
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = React.useState(null);
    const [roomMessages, setRoomMessages] = React.useState([]);
    useEffect(() => {
        if(roomId){
            db.collection("rooms").doc(roomId).onSnapshot(snapshot => {
                setRoomDetails(snapshot.data())
            });
        }
        db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => {
            setRoomMessages(snapshot.docs.map(doc => doc.data()));
        })
    }, [roomId]);

    console.log(roomMessages);
    return (
        <div className="chat">
            <div className="chat_header">
                <div className="chat_headerLeft">
                    <h4 className="chat_channelName">
                        <strong># {roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat_headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
            <div className="chat_messages">
                {/* Message component */}
                {
                    roomMessages.map((msg, i) => (
                        <Message 
                            key={i}
                            message={msg.message}
                            timestamp={msg.timestamp}
                            username={msg.username}
                            userImage={msg.userImage} 
                        />
                    ))
                }
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </div>
    )
}