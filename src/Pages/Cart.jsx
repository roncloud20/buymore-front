import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function Cart() {
    const [cart, setCart] = useState([]);
    const [cost, setCost] = useState("");
    useEffect(()=>{
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            setCart(JSON.parse(cartData));
            console.log(cartData);
            console.log(cart);
        }
    }, []);


  return (
    <>
        <Header/>
        <h1>Cart</h1>
        {cart.length === 0 ?
            (<h1>Cart is empty</h1>) :
            (
                <MDBTable align='middle'>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Items</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Unit Price</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Cost</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        cart.map((sam) =>(
                            <tr key={sam.id}>
                                <td>
                                    <div className='d-flex align-items-center'>
                                    <img
                                        src={`http://localhost:8000/${sam.productImage}`}
                                        alt=''
                                        style={{ width: '50px', height: '50px' }}
                                        className='rounded-circle'
                                    />
                                    <div className='ms-3'>
                                        <p className='fw-bold mb-1'>{sam.productName}</p>
                                        <p className='text-muted mb-0'>{sam.category}</p>
                                    </div>
                                    </div>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>{sam.productDescription}</p>
                                    {/* <p className='text-muted mb-0'>IT department</p> */}
                                </td>
                                <td>
                                    <MDBBadge color='success' pill>
                                    {sam.sellingPrice}
                                    </MDBBadge>
                                </td>
                                <td><input type="number" min="1" onChange={(e)=>setCost(e.target.value)}/></td>
                                <td>{cost * sam.sellingPrice || sam.sellingPrice}</td>
                                {/* <td>
                                    <MDBBtn color='link' rounded size='sm'>
                                    Edit
                                    </MDBBtn>
                                </td> */}
                            </tr>
                        ))
                    }
                </MDBTableBody>
                </MDBTable>
            )
        }
    </>
  )
}



{/* <div>
    {
        cart.map((alex, index) => (
            <div>
                <h1>{alex.id}</h1>
                <h1>{alex.productName}</h1>
                <h1>{alex.sellingPrice}</h1>
            </div>
        ))
    }
</div> */}
