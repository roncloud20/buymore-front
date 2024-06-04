import React from 'react';
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

export default function Card({productDescription, productImage, productName, initialPrice, sellingPrice, category}) {
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
        <MDBBtn>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}