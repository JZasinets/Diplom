import { TextField, Grid, Button, Avatar } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from "../index";
import '../styles/chat.css';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Loader from '../components/Loader';
import firebase from 'firebase';
import { db } from '../services/firebase';

function Messages() {
    const { auth, firestore } = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');
    const [messages, loading] = useCollectionData(
       db.collection("messages").orderBy("createAt", "asc")
    )

    const sendMessage = async () => {
        db.collection('messages').add({
            userId: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    if (loading) {
        return <Loader />
    }


    return (
        <div className="chat_area">
            <div className="feed__header">
                <h2>Сообщения</h2>
            </div>
            <div className="body_chat">
            {messages.map(message =>
                    <div className="message_container" 
                        style={{ backgroundColor: user.uid === message.userId ? 'var(--twitter-backgroundcolor)' : 'var(--twitter-color)',
                                marginLeft: user.uid === message.userId ? 'auto' : '10px'}}
                        >
                        <div className="chat_name" style={{ 
                        color: user.uid === message.userId ? 'black' : 'white'
                     }}>
                            <Avatar src={message.photoURL}/>
                            <div className="chat_user_name">
                                { message.displayName === null ? 'Anonim' : message.displayName }</div>
                        </div>
                        <div className="chat_text">{message.text}</div>
                    </div>
                    )
                }
            </div>
            <div className="message_area">
                <Grid className="input_message">
                    <div className="text_area_chat">
                        <TextField variant={'outlined'} 
                                    rowsMax={2} 
                                    fullWidth
                                    value={value}
                                    onChange={e => setValue(e.target.value)}
                                    placeholder="Введите ваше сообщение" 
                        />
                    </div>
                    <div className="chat_Button">
                        <Button variant={'outlined'} onClick={sendMessage}>Отправить</Button>
                    </div>
                </Grid>
            </div>
        </div >
    )
}

export default Messages
