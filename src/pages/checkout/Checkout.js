
import "./Checkout.css"
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Checkout(){

  const location = useLocation();
  const { cartItems } = location.state;

  const[isApprovedBuyer, setIsApprovedBuyer] = useState(false);
  const checkoutHandler=()=>{
    if(isApprovedBuyer){
      alert("proceed to check out")
    }
    else{
      alert("Proceed to login")
      // return <Navigate to='/login' />
    }

  }
  

  return (
    <div>
      <div className="rw1">
        <h2>List of Orders</h2>
        <div className="items">
        {cartItems.map((item) => (
        <div className="itemCard">
          <div>
            {item.name}{" "}
            <strong>
              {item.qty}x ${item.price}
            </strong>
          </div>

          <div>
            <img id="prodIcon" src={item.images[0].imageUri} />
          </div>
        </div>
      ))}
        </div>
          
      </div>
      <div className="rw2">
        <h2>Billing Address</h2>

        
      </div>
      <div className="rw3">
        <h2>Payment Method</h2>
      </div>

      <button className="btn">Checkout</button>
    </div>

  )


}



