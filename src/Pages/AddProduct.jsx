import Header from "../Components/Header";
import Form from 'react-bootstrap/Form';
import {useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    MDBBtn,
    MDBFile,
    MDBCardImage,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBTextArea
  }
  from 'mdb-react-ui-kit';

export default function AddProduct() {

    const [file,  setFile] = useState(""); 
    const [product_name, setProductName] = useState("");
    const [product_description, setProductDescription] = useState("");
    const [initial_price, setInitialPrice] = useState("");
    const [selling_price, setSellingPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");
    const [product_image, setProductImage] = useState("");
    const navigate = useNavigate();
    // const [msg, setMsg] = useState(""); // Handling Error Message
     
    const handleChange = (e) =>{
        let image = e.target.files[0];
        setFile(URL.createObjectURL(image)); // Set the Image For Preview
        setProductImage(image); // Capturing the image to send to backend
    }

    async function addProduct() {
        // let product = {product_name, category, product_description, initial_price, selling_price, quantity, product_image};
        if(product_name !== "" && category !== "" && product_description !== "" && initial_price !== "" && selling_price !== "" && quantity !== "" && product_image !== "") {
            // console.log(product);
            let formData = new FormData();
            formData.append('product_name', product_name);
            formData.append('category', category);
            formData.append('product_description', product_description);
            formData.append('initial_price', initial_price);
            formData.append('selling_price', selling_price);
            formData.append('quantity', quantity);
            formData.append('product_image', product_image);
            let result = await fetch("http://localhost:8000/api/addproduct", {
                method: 'POST',
                body: formData
            });

            result = await result.json();
            console.log(result);
            alert("Product added successfully");
            navigate("/addproduct");
            
        } else {
            // setMsg("All fields are required");
            alert("All fields are required");
        }
    }

    return (
        <>
            <Header/>
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
                <div className='mask gradient-custom-3'></div>
                <MDBCard className='m-5' style={{maxWidth: '600px'}}>
                    <h1 className="text-uppercase text-center m-5">Add New Product</h1>
                    <MDBCardBody className='px-5'>
                        <MDBCardImage src={file} position='top' alt='Upload The Product Image' style={{maxWidth: '600px'}}/>
                        <MDBFile wrapperClass='mb-4' className="mb-4" size='lg' id='form1' onChange={handleChange}/>
                        <MDBInput wrapperClass='mb-4' label='Product Name' size='lg' id='form1' type='text' value={product_name} onChange={(e)=> setProductName(e.target.value)} required/>
                        <Form.Select label='Select Category' size='lg' className="mb-4" id='form1' aria-label="Default select example" value={category} onChange={(e)=> setCategory(e.target.value)}>
                            <option>Category:</option>
                            <option value="Fruits">Fruits</option>
                            <option value="Home Appliances">Home Appliances</option>
                            <option value="Office Appliances">Office Appliances</option>
                        </Form.Select>
                        <MDBInput wrapperClass='mb-4' label='Initial Price' size='lg' id='form1' type='number' min="0.01" value={initial_price} onChange={(e)=> setInitialPrice(e.target.value)} />
                        <MDBInput wrapperClass='mb-4' label='Selling Price' size='lg' id='form1' type='number' min="0.01" value={selling_price} onChange={(e)=> setSellingPrice(e.target.value)} />
                        <MDBInput wrapperClass='mb-4' label='Quantity' size='lg' id='form1' type='number' min="1" value={quantity} onChange={(e)=> setQuantity(e.target.value)}/>
                        <MDBTextArea wrapperClass='mb-4' label='Product Description' size='lg' id="textAreaExample" rows="{4}" value={product_description} onChange={(e)=> setProductDescription(e.target.value)}/>
                        <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={addProduct}>Add Product</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </>
    )
}

