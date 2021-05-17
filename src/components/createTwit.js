import React from 'react';

export const CreateTwit = () => {
    return (
        <form>
            <div className='form-twit'>
                <input 
                    type="text" 
                    className='input-twit' 
                    placeholder='Что происходит?' />
            </div>
        </form>
    )
}