import React from 'react';
import './Total.css'

const Total = (props) => {
    const count = props.count;
    let total = 0;
    for (let i = 0; i < count.length; i++) {
        let value = count[i];
        total = total + value.salary;
    }

    return (
        <div className="total-container">
            <h3>User connected:  {count.length}</h3>
            <h4>Total Salary:  ${total}</h4>

        </div>
    );
};
export default Total;