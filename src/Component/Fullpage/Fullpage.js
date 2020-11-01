import React, { useState } from 'react';
import './Fullpage.css'
import userInfo from '../../fakeData/info';
import User from '../User/User';
import Total from '../Total/Total';

const Fullpage = () => {
    const [users, setUsers] = useState(userInfo);
    const [count, setCount] = useState([]);

    const connectUser = (user) => {
        if (count.indexOf(user) === -1) {
            const counter = [...count, user];
            setCount(counter);
            console.log(user);
        }
    }

    return (
        <div className="full-area">
            <div className="user-container">
                <h1>{users.map(user => <User connectUser={connectUser} user={user}></User>)}</h1>
            </div>
            <div className="total-container">
                <Total count={count}></Total>
            </div>
        </div>
    );
};

export default Fullpage;