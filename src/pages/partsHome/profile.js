import React, {useState, useEffect, useContext} from 'react';
import TweetBox from './tweetBox';
import Post from './post';
import db from '../../services/firebase';
import '../../styles/feed.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../../index";
import Loader from '../../components/Loader';

function ProfileTwits() {
    const [posts, setPosts] = useState([]);
    const { auth } = useContext(Context)
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => doc.data()).filter(el => el.userId === user.uid))
        );
    }, []);
  
    if (loading) {
      return < Loader />
    }

    return (
        <div className="feed">            
            <div className="feed__header">
                <h2>Профиль</h2>
            </div>
            
            <TweetBox />

            {posts.map((post) => (
            <Post 
                displayName={post.displayName} 
                userName={post.userName} 
                verified={post.verified}
                text={post.text}
                avatar={post.avatar}
                image={post.image}
                key={post.id}
                id={post.id}
                arrayLike={post.arrayLike}
            />
            ))}
        </div>
    );
}

export default ProfileTwits;