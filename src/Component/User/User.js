import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const User = (props) => {
    const { name, img, Profession, salary } = props.user;
    console.log(props.user.Profession);
    return (
        <div className="user">
            <img src={img} alt="" />
            <div className="user-info">
                <h4>Name: {name}</h4>
                <p>Profession: {Profession}</p>
                <p>Salary: ${salary}</p>
                <button className="connect-button" onClick={() => props.connectUser(props.user)}>Connect  <FontAwesomeIcon icon={faPlusCircle} /></button>
            </div>
        </div>
    );
};

export default User;