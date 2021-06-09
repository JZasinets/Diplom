import React, {useState} from 'react';
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

function Post({ displayName, userName, verified, text, image, avatar }) {
    const [editId, setEditId] = useState('')

    const deleteTweet = async () => {
        try {
            await firebase.firestore().collection("posts").doc().delete()
            console.log('del')
        } catch(e) {
            console.error(e)
            console.log('eror')
        }
    }

    const handleEdit = async (item) => {
        try {
            await firebase.firestore().collection("posts").doc(editId).update({
                name: item.value
            })
        } catch(e) {
            console.error(e)
        } finally {
            setEditId('')
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
                        {/* <EditIcon onClick={handleEdit} fontSize="small"/> */}
                        <Button onClick={handleEdit}><EditIcon fontSize="small"/></Button>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                    <Button onClick={deleteTweet}><DeleteIcon fontSize="small" /></Button>
                    {/* <Button onClick={deleteTweet}><DeleteIcon fontSize="small" /></Button> */}
                </div>
            </div>
        </div>
    )
}

export default Post;
