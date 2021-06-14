import React, { useState, useEffect, useReducer, useContext } from 'react';
import { initState, reducer } from "../../services/reducer";
import '../../styles/post.css';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Button } from '@material-ui/core';
import db from '../../services/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../../index";

function Post({ displayName, userName, verified, text, image, avatar, id, arrayLike, userId, editId }) {
    const [state, dispatch] = useReducer(reducer, initState);
    // const [editId, setEditId] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [like, setLike] = useState(0);
    const { auth } = useContext(Context)
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const { docs } = await db.collection('posts')
                .orderBy("createAt", "asc")
                .get()
            const twits = docs.map(doc => ({ ...doc.data(), id: doc.id }))
            dispatch({ type: 'GET_POSTS', data: twits })
            console.log(twits)


        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false);
        }
    }

    const deleteTweet = async () => {
        try {
            await db.collection("posts").doc(id).delete()
            await getData()
        } catch (e) {
            console.error(e)
            console.log('eror')
        }

    }

    const handleEdit = async () => {
        console.log(text)
        try {
            await db.collection("posts").doc(id).update({
                text: text
            })
            await getData()
        } catch (e) {
            console.error(e)
        }
    }

    const AddLikes = async () => {

        if (arrayLike.includes(user.uid)) {
            arrayLike.splice(user.uid, 1);
        } else {
            arrayLike.push(user.uid);
        }

        try {
            await db.collection("posts").doc(id).update({
                arrayLike: arrayLike
            })

            await getData()
        } catch (e) {
            console.error(e)
        } 
    }

    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>{displayName}{" "}
                            <span className="post__headerSpecial">
                                {verified && <VerifiedUserIcon className="post__badge" />}
                                @{userName}
                            </span>
                        </h3>
                        <Button onClick={handleEdit}><EditIcon fontSize="small" /></Button>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <div className="likes">
                        <FavoriteBorderIcon fontSize="small" onClick={AddLikes} 
                            style={{ color: arrayLike.includes(user.uid) ? 'var(--twitter-color)' : 'black'}}
                        />
                        <p id='likesAmount'>{arrayLike.length}</p>
                    </div>
                    <PublishIcon fontSize="small" />
                    <Button type="button" onClick={deleteTweet}><DeleteIcon fontSize="small" /></Button>
                </div>
            </div>
        </div>
    )
}

export default Post;
