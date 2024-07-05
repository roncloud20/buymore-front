import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function Cart() {
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            setCart(JSON.parse(cartData));
        }
    }, []);

    const handleQuantityChange = (id, quantity) => {
        const updateCart = cart.map(item => {
            if (item.id === id) {
                return {...item, quantity: quantity};
            }

            return item;
        });

        setCart(updateCart);
        localStorage.setItem('cart', JSON.stringify(updateCart));
    }

    const calculateItemCost = (quantity, price) => {
        return quantity * price;
    }


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
                                </td>
                                <td>
                                    <MDBBadge color='success' pill>
                                    {sam.sellingPrice}
                                    </MDBBadge>
                                </td>
                                <td>
                                    <input 
                                        type="number" 
                                        min="1" 
                                        onChange={(e)=> handleQuantityChange(sam.id, parseInt(e.target.value))} 
                                        value={sam.quantity}
                                    />
                                </td>
                                <td>{calculateItemCost(sam.quantity, sam.sellingPrice)}</td>
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

