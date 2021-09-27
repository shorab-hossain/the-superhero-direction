import React from 'react';
import './Card.css';


const Card = (props) => {
    const {name,Role,Age,Country,img,Salary} = props.detail;
    return (
        <div className="card mb-4 shadow">
      <img   src={img} className="card-img-top img" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title text-primary fw-bold">Name: {name}</h5>
        <h5 className="card-title">Role: {Role}</h5>
        <h5 className="card-title">Age: {Age}</h5>
        <h5 className="card-title">Salary: {Salary}</h5>
        <h5 className="card-title mb-3">Country: {Country}</h5>
        <button onClick={()=> props.buttonHandler(props.detail)} className="btn btn-primary ms-5"><i className="fas fa-shopping-cart me-2"></i>Add to cart</button>
      </div>
    </div>
    )
};

export default Card;