import react, { useEffect, useState } from 'react';
import './SellerProfile.css';
import axios from 'axios';
import store from '../../reduxStore';
import { Link } from 'react-router-dom';

function SellerProfile() {

    const [seller, setSeller] = useState({});
    const [sellerRole, setSellerRole] = useState('');

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
    };

    useEffect(fetchSeller, []);

    return (
        <div className="sellerProfile">
            <div className="sellerProfile-container-left-name">
                <h1>{seller.fname} {seller.lname}</h1>
            </div>
            <div className="sellerProfile-container-left-name">
                <p>Email: {seller.email}</p>
                <p>Role: {sellerRole}</p>
            </div>
            <Link to="/seller/products" className='button'>Show Products</Link>
        </div>
    );

}

export default SellerProfile;