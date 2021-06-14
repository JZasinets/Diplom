import React, {useState, useEffect} from 'react';
import TweetBox from './tweetBox';
import Post from './post';
import db from '../../services/firebase';
import '../../styles/feed.css';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("createAt", "desc").onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }) ))
            console.log(setPosts);
        });
    }, []);

    return (
        <div className="feed">            
            <div className="feed__header">
                <h2>Главная</h2>
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
                editId={post.editId}
                id={post.id}
                arrayLike={post.arrayLike}
            />
            ))}
        </div>
    );
}

export default Feed;