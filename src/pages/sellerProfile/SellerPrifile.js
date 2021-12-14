import react, { useEffect, useRef, useState } from 'react';
import './SellerProfile.css';
import axios from 'axios';
import store from '../../reduxStore';
import { Link } from 'react-router-dom';
import Product from '../../components/product/Product';

function SellerProfile() {

    const [seller, setSeller] = useState({});
    const [sellerRole, setSellerRole] = useState('');
    const [products, setProducts] = useState([]);
    const [oreders, setOrders] = useState([]);

    const status = useRef();

    const fetchSeller = () => {
        axios.get('http://localhost:8080/auth/profile/' + '2')
            .then(response => {
                console.log('userId', localStorage.getItem('userId'));
                setSeller(response.data);
                setSellerRole(response.data.authorities[0].authority);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });

        axios.get('http://localhost:8080/products/my-products')
            .then(response => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        axios.get('http://localhost:8080/orders/seller-orders')
            .then(response => {
                console.log(response.data);
                setOrders(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(fetchSeller, []);

    const deleteHandler = (id) => {
        axios.delete('http://localhost:8080/products/' + id)
            .then(response => {
                console.log(response);
                fetchSeller();
            })
            .catch(error => {
                console.log(error);
            });
    };

    const updateHandler = (id, status) => {
        axios.put('http://localhost:8080/orders/change-order-status/' + id + '/' + status)
            .then(response => {
                console.log(response);
                fetchSeller();
            })
            .catch(error => {
                console.log(error);
            });
    };


    return (
        <div className="sellerProfile">
            <div className="sellerProfile-container-left-name">
                <h1>{seller.fname} {seller.lname}</h1>
            </div>
            <div className="sellerProfile-container-left-name">
                <p>Email: {seller.email}</p>
                <p>Role: {sellerRole}</p>
            </div>
            {/* <Link to="/seller/products" className='button'>Show Products</Link> */}
            <div>
                <h2>My Products</h2>
                <div>
                    {products.map((product) => (
                        <div className="productCard" key={product.id}>
                            <Link to="/productPage" state={{ product: product }}> <img className="small" src={product.images[0].imageUri} alt={product.name} /></Link>

                            <h4>{product.name}</h4>
                            <div>
                                <link
                                    rel="stylesheet"
                                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                                />
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>

                            <p>${product.price}</p>
                            <div>
                                <button className="btn" onClick={() => deleteHandler(product.id)}>
                                    Delete{" "}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2>My Orders</h2>
                <div>
                    {oreders.map((order) => (
                        <div className="productCard" key={order.id}>
                            <div>
                                <p>Order Id: {order.id}</p>
                                <p>Order Date: {order.createdAt}</p>
                                <p>Order Status: {order.status}</p>
                                <p>Order Price: {order.price}</p>
                            </div>
                            <div>
                                <select ref={status}>
                                    <option value="PENDING">Pending</option>
                                    <option value="SHIPPED">Shipped</option>
                                    <option value="ON_THE_WAY">On the way</option>
                                    <option value="DELIVERED">Delivered</option>
                                    <option value="CANCELLED">Cancelled</option>
                                </select>
                                <button className="btn" onClick={() => updateHandler(order.id, status.current.value)}>
                                    Change Status{" "}
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );

}

export default SellerProfile;