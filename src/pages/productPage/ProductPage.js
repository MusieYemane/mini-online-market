import { useLocation } from "react-router-dom";
import Seller from "../seller/Seller";
import "./ProductPage.css";

export default function ProductPage() {
 
  //get the state obj passed via link, it contains the product
  const location = useLocation()
  const { product } = location.state


  return (
    <div class="productDetailCard">
      <div className="r1">
        <img
          src={product.image}
          alt={product.name}
          id="prodImg"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <h1>{product.name}</h1>
        <p class="price">${product.price}</p>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <br/>
        <button className="btn">Add to Cart</button>
      </div>

      <div className="r2">
        <h2>About this item</h2>
        <p>
          Some text about the jeans.. Some text about the jeans..Some text about
          the jeans.. Some text about the jeans..Some text about the jeans.
          .Some text about the jeans..
        </p>
    
        <h2>Seller information</h2>
        <p>{product.seller}</p>
        <button className="btn">Follow Seller</button>
      </div>


      <div className='r3'>
        <h2>Add Reviews</h2>
        <textArea></textArea> <br />
        <button className="btn">Add Review</button>
      </div>

      <div>
        <h2> Reviews</h2>
        <p>Such a beautiful product: Musie</p>
      </div>
    </div>
  );
}
