import React, { useEffect, useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBTypography
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

export default function Card({id, productDescription, productImage, productName, initialPrice, sellingPrice, category}) {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  },[]);

  const addToCart = () => {
    const newItem = {id, productDescription, productImage, productName, initialPrice, sellingPrice, category, quantity: 1,};
    const newCart = [...cart, newItem];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    console.log(newCart);
    navigate("/cart");
  }

  return (
    <MDBCard className='m-5' style={{maxWidth: '300px'}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={'http://localhost:8000/'+productImage} fluid alt='...' />
        {/* <a href='#'> */}
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        {/* </a> */}
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{productName}</MDBCardTitle>
        <MDBTypography>{category}</MDBTypography>
        <MDBTypography tag='del'>{initialPrice}</MDBTypography>
        <MDBTypography tag='mark'>{sellingPrice}</MDBTypography>
        <MDBCardText>
          {productDescription}
        </MDBCardText>
        <MDBBtn onClick={addToCart}>Add To Cart</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}