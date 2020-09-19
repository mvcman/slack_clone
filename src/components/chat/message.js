import React from 'react';
import './chat.css';

export default function Message({ message, timestamp, username, userImage }){
    return (
        <div className="message">
            <img src={userImage} alt={username} />
            <div className="message_info">
                <h4>
                    <span className="message_username">{username} </span>
                    <span className="message_timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    );
}
