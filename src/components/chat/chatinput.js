import React from 'react';
import './chat.css';
import db from '../../firebase';
import firebase from 'firebase';
import { Values } from '../../context';

export default function ChatInput({ channelName, channelId }){
    const [input, setInput] = React.useState('');
    const [{user}] = Values();
    const sendMessage = (e) => {
        e.preventDefault();
        if(channelId){
            db.collection('rooms').doc(channelId)
            .collection('messages')
            .add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL,
            });
        }
        setInput('');
    }
    return (
        <div className="chatInput">
            <form>
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Message # ${channelName}`} />
                <button type="submit" onClick={sendMessage}>SEND</button>
            </form>
        </div>
    );
}