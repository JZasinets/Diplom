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
            displayName: 'Anonim',
            userName: 'anonimchik',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            userId: user.uid,
            arrayLike: [],
            // postId: id,
            createAt: firebase.firestore.FieldValue.serverTimestamp(),
            avatar: "https://thumbs.dreamstime.com/b/%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D1%82%D0%B0%D0%B9%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B0%D0%B3%D0%B5%D0%BD%D1%82%D0%B0-%D1%88%D0%BF%D0%B8%D0%BE%D0%BD%D0%BA%D0%B0-%D0%B4%D0%B6%D0%B5%D0%BD%D1%82%D0%BB%D1%8C%D0%BC%D0%B5%D0%BD%D0%B0-%D1%80%D0%B0%D0%B7%D0%B2%D0%B5%D0%B4%D1%8B%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9-%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D1%8B-118835238.jpg"
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
                    <Avatar src="https://thumbs.dreamstime.com/b/%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D1%82%D0%B0%D0%B9%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B0%D0%B3%D0%B5%D0%BD%D1%82%D0%B0-%D1%88%D0%BF%D0%B8%D0%BE%D0%BD%D0%BA%D0%B0-%D0%B4%D0%B6%D0%B5%D0%BD%D1%82%D0%BB%D1%8C%D0%BC%D0%B5%D0%BD%D0%B0-%D1%80%D0%B0%D0%B7%D0%B2%D0%B5%D0%B4%D1%8B%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9-%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D1%8B-118835238.jpg" />
                    <textarea onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="Что происходит? Опишите ваше событие" type="text" rowsMax={2} />
                </div>
                <input onChange={e => setTweetImage(e.target.value)} value={tweetImage} className="tweetBox__imageInput" placeholder="Добавьте ссылку на изображение" type="text" />
                <Button onClick={sendTweet} className="tweetBox__button" type="submit" >Твитнуть</Button>
            </form>

        </div>
    )
}

export default TweetBox;