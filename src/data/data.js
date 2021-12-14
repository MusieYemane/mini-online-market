import axios from "axios";
import React, { useState } from "react";
import {useEffect} from 'react';

// function data() {

//   var products=[]

//     axios
//       .get("http://localhost:8080/products")
//       .then((res) => {
//         products = res.data
//         console.log(typeof products);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//       return products;

//   };

  

//export default {products: data()}

  // const url="http://localhost:8080/products";
  // axios.get(url).then(
  //   (res)=>{
  //     setProducts(res.data)
  //     console.log(products)

  //   }
  // ).catch(
  //   err=> console.log(err)
  // )
// }
// export default data;

// const data=

// {
//   products: [
//     {
//       id: '1',
//       name: 'MacBook',
//       price: 1400,
//       image: 'https://picsum.photos/id/180/2400/1600',
//       seller: 'Musie'
//     },
//     {
//       id: '2',
//       name: 'Old Car',
//       price: 2400,
//       image: 'https://picsum.photos/id/111/4400/2656',
//       seller: 'Apple'

//     },
//     {
//       id: '3',
//       name: 'W Shoes',
//       price: 1000,
//       image: 'https://picsum.photos/id/21/3008/2008',
//       seller: 'Lidya'

//     },

//     {
//       id: '4',
//       name: 'W Shoes',
//       price: 1000,
//       image: 'https://picsum.photos/id/21/3008/2008',
//       seller: 'Musie'

//     },
//     {
//       id: '5',
//       name: 'W Shoes',
//       price: 1000,
//       image: 'https://picsum.photos/id/21/3008/2008',
//       seller: 'Musie'

//     },
//     {
//       id: '6',
//       name: 'Old Car',
//       price: 2400,
//       image: 'https://picsum.photos/id/111/4400/2656',
//       seller: 'Apple'

//     },
//     {
//       id: '7',
//       name: 'Old Car',
//       price: 2400,
//       image: 'https://picsum.photos/id/111/4400/2656',
//       seller: 'Apple'

//     },
//     {
//       id: '8',
//       name: 'MacBook ',
//       price: 1400,
//       image: 'https://picsum.photos/id/180/2400/1600',
//       seller: 'Musie'
//     },
//     {
//       id: '9',
//       name: 'MacBook',
//       price: 1400,
//       image: 'https://picsum.photos/id/180/2400/1600',
//       seller: 'Musie'
//     },
//     {
//       id: '10',
//       name: 'MacBook',
//       price: 1400,
//       image: 'https://picsum.photos/id/180/2400/1600',
//       seller: 'Musie'
//     },

//   ],
// };

// export default data;
