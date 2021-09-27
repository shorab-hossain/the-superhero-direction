import React from 'react';
import {useState,useEffect} from 'react';
import './Cart.css';
import Card from '../Card-data/Card';
import Total from './Total/Total';



const Cart = () => {
 const [details, setDetails] = useState([]);
const [total, setTotal] =useState([]);
  useEffect(() =>{
                fetch('./data.json')
                .then(res => res.json())
                .then(data => setDetails(data))
  },[]);
  const buttonHandler = detail =>{
      const newTotal =[... total,detail];
      setTotal(newTotal)
  }
    return (
 <div className="container">
     <div className="row">
        <div className="col-lg-8">
            <div className="detail">
            {
                    details.map(detail => <Card key={detail.key} detail={detail} buttonHandler={buttonHandler}></Card>)
    
                }
            </div>
        </div>

         <div className="col-lg-4">
                     <Total total={total}></Total>
                   </div>
               </div>
            </div>
    );
};

export default Cart;