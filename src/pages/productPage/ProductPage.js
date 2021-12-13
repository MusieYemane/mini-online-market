import "./ProductPage.css";

export default function ProductPage() {
  return (
    <div class="productDetailCard">
      <div className="r1">
        <img
          src="https://www.esafety.gov.au/sites/default/files/2019-08/Remove%20images%20and%20video.jpg"
          alt="Denim Jeans"
          id="prodImg"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <h1>Tailored Jeans</h1>
        <p class="price">$19.99</p>
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
