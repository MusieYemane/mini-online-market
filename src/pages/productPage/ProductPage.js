import { useLocation } from "react-router-dom";
import "./ProductPage.css";

const ProductPage = () => {
 
  //get the state obj passed via link, it contains the product
  const location = useLocation()
  const { product } = location.state


  return (
    <div className="productDetailCard">
      
      <div className="r1">
        <img
          src={product.images[0].imageUri}
          alt={product.name}
          id="prodImg"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <h1>{product.name}</h1>
        <p className="price">${product.price}</p>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        {/* <br/>
        <button className="btn">Add to Cart</button> */}
      </div>

      <div className="r2">
        <h2>About this item</h2>
        <p>
          {product.description}
        </p>
    
        <h2>Seller information</h2>
        <p>{product.seller}</p>
        <button className="btn">Follow Seller</button>
      </div>


      <div className='r3'>
        <h2>Add Reviews</h2>
        <textArea placeholder="Enter your review here ..."></textArea> <br />
        <button className="btn">Add Review</button>
      </div>

      <div className="r4">
        <h2> Reviews</h2>
        {
        
          product.reviews.map(rev=>(
            rev.approved?
              <div className="reviewCard">
                <h4>{rev.user.fname +" "+ rev.user.lname +": "+rev.user.email}</h4> 
                <p>{rev.comment}</p>
              </div>
            : ""
          )
      
          )
        }
        
      </div>
    </div>
  );
}

export default ProductPage;

// [
//   {
//     "id": 1,
//     "name": "Galaxy S20 FE 5G",
//     "price": 500,
//     "description": "SM-G781B, SM-G781B/DS, SM-G781U, SM-G781U1, SM-G781W, SM-G7810, SM-G781N, Cloud Navy, SM-G781V 0.50 W/kg 1.35 W/kg",
//     "quantity": 4,
//     "images": [
//       {
//         "id": 6,
//         "name": "home",
//         "imageUri": "https://m-cdn.phonearena.com/images/article/126868-wide-two_1200/Samsungs-Galaxy-S20-FE-5G-gets-two-vastly-different-rumored-prices.jpg",
//         "productId": 1
//       },
//       {
//         "id": 7,
//         "name": "home-2",
//         "imageUri": "https://m-cdn.phonearena.com/images/article/126868-wide-two_1200/Samsungs-Galaxy-S20-FE-5G-gets-two-vastly-different-rumored-prices.jpg",
//         "productId": 1
//       },
//       {
//         "id": 1,
//         "name": "main",
//         "imageUri": "https://images-na.ssl-images-amazon.com/images/I/71RxOftVoQL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
//         "productId": 1
//       }
//     ],
//     "reviews": [
//       {
//         "id": 1,
//         "rating": "FOUR_STAR",
//         "comment": "Excellent phone performance",
//         "productId": 1,
//         "user": {
//           "id": 3,
//           "fname": "Buyer",
//           "lname": "Buyer",
//           "email": "buyer@online-market.org"
//         },
//         "approved": false
//       },
//       {
//         "id": 2,
//         "rating": "FOUR_STAR",
//         "comment": "Good",
//         "productId": 1,
//         "user": {
//           "id": 3,
//           "fname": "Buyer",
//           "lname": "Buyer",
//           "email": "buyer@online-market.org"
//         },
//         "approved": true
//       },
//       {
//         "id": 3,
//         "rating": "FOUR_STAR",
//         "comment": "Excellent phone",
//         "productId": 1,
//         "user": {
//           "id": 3,
//           "fname": "Buyer",
//           "lname": "Buyer",
//           "email": "buyer@online-market.org"
//         },
//         "approved": true
//       }
//     ]
//   }
// ]