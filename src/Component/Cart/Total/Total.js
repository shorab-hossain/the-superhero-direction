import React from 'react';
import ('./Total.css')

const Total = (props) => {
    const {total} = props;
    let totalCost = 0;
    for(const ttl of total){
         totalCost += ttl.Salary;
    }
    return (
        <div className="ms-5">
            <h4 className="text-light">Hero Added :{total.length}</h4>
            <h4 className="text-light">Total Cost : ${totalCost}</h4>
            <div>
                {
                    total.map(ttl =><li className="text-light" key={ttl.key+Math.random(0.21)}>{ttl.name}</li>)
                }
            </div>
            <button className="btn btn-primary mt-4">Buy Now</button>
        </div>
    );
};

export default Total;