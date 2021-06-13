import React from 'react';
import Sidebar from './partsHome/sidebar';
import '../styles/smallPages.css';

export const More = () => {
    return (
        <div className="app">
            <Sidebar />
            <div className="body_More">
                <div className="feed__header">
                    <h2>Хм.. хотите ещё???</h2>
                </div>
                <div className="more_info">
                    <h3>Ну тогда ждите в следующем релизе:</h3>
                    <ul>
                        <li>Запросы на чтение</li>
                        <li>Темы</li>
                        <li>Моменты</li>
                        <li>Новостная рассылка</li>
                        <li>Аналитика</li>
                        <li>Настройки и конфиденциальность</li>
                    </ul>
                    <div className="more_wait">
                        <h3>А вы уже ждёте?</h3>
                        <div>
                            <img src="https://moslenta.ru/imgs/2017/02/10/18/86339/05c1b5ecc53d324288a41558b25877276b159ce0.jpg" alt="А вы уже ждёте?" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
