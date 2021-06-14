import React, { useState, useContext } from 'react';
import '../../styles/tweetbox.css';
import { Avatar, Button } from '@material-ui/core';
import db from '../../services/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../../index";
import firebase from 'firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const [id, setId] = useState("");
    const [arrayLike, setArrayLike] = useState("");
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Julia Zasinets',
            userName: 'jzasinets',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            userId: user.uid,
            arrayLike: [],
            postId: id,
            createAt: firebase.firestore.FieldValue.serverTimestamp(),
            avatar: "https://www.meme-arsenal.com/memes/c6c1a140ac1e472bf48bd6022e691237.jpg"
        });

        setTweetMessage('');
        setTweetImage('');
        setArrayLike([]);
        console.log(user)
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://sun9-1.userapi.com/impf/c824501/v824501032/710fb/2eSUl0b1rx8.jpg?size=951x960&quality=96&sign=932172050d7054d2b028a24e38359501&type=album" />
                    <textarea onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="Что происходит? Опишите ваше событие" type="text" rowsMax={2} />
                </div>
                <input onChange={e => setTweetImage(e.target.value)} value={tweetImage} className="tweetBox__imageInput" placeholder="Добавьте ссылку на изображение" type="text" />
                <Button onClick={sendTweet} className="tweetBox__button" type="submit" >Твитнуть</Button>
            </form>

        </div>
    )
}

export default TweetBox;