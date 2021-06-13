import React from 'react';
import Sidebar from './partsHome/sidebar';


export const Lists = () => {
    return (
        <div className="app">
            <Sidebar />
            <div className="body_Lists">
                <div className="feed__header">
                    <h2>Список</h2>
                </div>
                <div className="info_lists">
                    Вы пока не создали и не начали читать ни одного Списка. Когда вы это сделаете, они появятся здесь.
                    P.s. в следующей релизе
                </div>
            </div>
        </div>
    )
}
