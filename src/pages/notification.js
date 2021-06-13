import React from 'react';
import Sidebar from './partsHome/sidebar';


export const Notification = () => {
    return (
        <div className="app">
            <Sidebar />
            <div className="body_Notification">
                <div className="feed__header">
                    <h2>Нотификации</h2>
                </div>
                <div className="info_lists">
                    В следующей версии Вы сможете увидеть в данном окне и не пропустить все важные сообщения от Instagram.
                </div>
            </div>
        </div>
    )
}
