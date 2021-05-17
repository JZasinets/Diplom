import react, { useState, useEffect } from 'react';
import db from "./firebase";
import firebase from '../services/firebaseService';

export const Twits = ({ twits )} => {
    const [twits, setTwits] = useState([])

    useEffect(() => {
        db.collection("twits").onSnapshot((snapshot) =>
          setPosts(snapshot.docs.map((doc) => doc.data()))
        );
      }, []);

    return (
        <ul className='twit-list'>
            {twits.map(twit => (
                <li className='twit-item' key={twit.id}>
                    {
                        twits.map((twit) => {
                            <Twit
                                key={twit.text}
                                fullName={twit.fullName}
                                userName={twit.userName}
                                date={twit.date}
                                verified={twit.verified}
                                text={twit.text}
                                photo={twit.photo}
                                image={twit.image}
                            />
                        })
                    }
                </li>
            ))}
        </ul>
    )
}