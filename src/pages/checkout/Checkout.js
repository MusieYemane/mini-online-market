
import "./Checkout.css"
import { Profiler, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Checkout(props){

  const location = useLocation();

  const { cartItems} = location.state;

  const[sameAddress, setAddress]= useState(false);

  const[isApprovedBuyer, setIsApprovedBuyer] = useState(true); 

  const [inputData, setInputData]= useState({})

  let navigate = useNavigate();

  const addressHandler= ()=>{
    (sameAddress)? setAddress(false): setAddress(true)
    if(!sameAddress){
      setInputData({name: "Musie Yemane", emial: "mosi@gmail.com", address: "1104 Meadwallow bld 144", city: "Fairfield", state:"IA", zip:52557})
    }else{
      setInputData({name: "", emial: "", address: "", city: "", state:"", zip:0})

    }
  }
  const validPayment=()=>{
    // authenticate payment here, not done in this project
    return true;
  }
  const checkoutCart=()=>{
    // remove quantity of the product from db
    //place an order
    const url= "http://localhost:8080/orders"
    const data= {
      "id": 0,
      "price": 0,
      "orderItems": [
        {
          "id": 0,
          "quantity": 0,
          "productId": 0,
          "orderId": 0
        }
      ],
      "shippingAddressId": 0,
      "paymentMethodId": 0
    }
    axios.post(url, data).then(res=> {
      alert("Order placed!");
      navigate("/buyer-profile", { replace: true });

    } 
      ).catch(err=>{
        alert("Order Failed")
        console.log(err)
      })

    //add the transaction to buyer history
    
  }
  const checkoutHandler=()=>{
    if(isApprovedBuyer && validPayment){
      checkoutCart();

    }
    else{
      navigate("/login", { replace: true })
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

      
        <div class="row">
          <div class="col-50">
            <h2>Billing Address</h2>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" value={inputData.name} placeholder="John M. Doe"/>
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" value= {inputData.emial} placeholder="john@example.com" />
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" value= {inputData.address} placeholder="542 W. 15th Street"/>
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" value={inputData.city} placeholder="New York"/>

            <div class="row">
              <div class="col-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state" value= {inputData.state} placeholder="NY"/>
              </div>
              <div class="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" value= {inputData.zip} placeholder="10001"/>
              </div>
            </div>
          </div>

          <div class="col-50">
            <h2>Payment</h2>
            <label for="fname">Accepted Cards</label>
            <div class="icon-container">
              <i class="fa fa-cc-visa" ></i>
              <i class="fa fa-cc-amex" ></i>
              <i class="fa fa-cc-mastercard" ></i>
              <i class="fa fa-cc-discover" ></i>
            </div>
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
            <div class="row">
              <div class="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018"/>
              </div>
              <div class="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352"/>
              </div>
            </div>
          </div>
          
        </div>
        <label>
          <input type="checkbox" onChange= {addressHandler} name="sameadr"/> Shipping address same as billing
        </label>
        {/* <input type="submit" value="Continue to checkout" class="btn"/> */}
        
        <button className="btn" onClick= {checkoutHandler}>Checkout</button>

      </div>
    
    </div>

  )


}



