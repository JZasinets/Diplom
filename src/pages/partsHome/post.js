import React, { useState, useEffect, useReducer } from 'react';
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
import firebase from 'firebase';
import db from '../../services/firebase';

function Post({ displayName, userName, verified, text, image, avatar, userId, id }) {
    const [editId, setEditId] = useState('');
    const [state, dispatch] = useReducer(reducer, initState);
    const [arrayLike, setArrayLike] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [like, setLike] = useState(0);

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
                // console.log(id)
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false);
        }
    }

    const deleteTweet = async ({ id }) => {
        try {
            await db.collection("posts").doc(id).delete()
            await getData()
            console.log('del')
        } catch (e) {
            console.error(e)
            console.log('eror')
        }
        console.log(id)
    }

    const handleEdit = async (item) => {
        try {
            await db.collection("posts").doc(editId).update({
                text: item.value
            })
            await getData()
        } catch (e) {
            console.error(e)
        } finally {
            setEditId('')
        }
    }

    const AddLikes = ( userId ) => {

        if (arrayLike.includes(userId)) {
            arrayLike.splice(userId, 1);  //удалить
        } else {
            arrayLike.push(userId);
        }
        console.log(arrayLike.length) //обновить
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
                        {/* <EditIcon onClick={handleEdit} fontSize="small"/> */}
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
                    <FavoriteBorderIcon fontSize="small" onClick={AddLikes} />
                    <PublishIcon fontSize="small" />
                    <Button type="button" onClick={deleteTweet}><DeleteIcon fontSize="small" /></Button>
                    {/* <Button onClick={deleteTweet}><DeleteIcon fontSize="small" /></Button> */}
                </div>
            </div>
        </div>
    )
}

export default Post;
