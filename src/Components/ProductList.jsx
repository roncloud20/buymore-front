import { useEffect, useState } from 'react';
import Card from './Card';

export default function ProductList () {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch("http://localhost:8000/api/list");
                let result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    console.log(data);
    return (
        <>
            <div className='productList flex flex-wrap'>
                {
                    data.map((item, index)=> (
                        <Card id={item.id} key={index} productName={item.product_name} productDescription={item.product_description} initialPrice={item.initial_price} sellingPrice={item.selling_price} quantity={item.quantity} category={item.category} productImage={item.product_image} />
                    ))
                }
            </div>
        </>
    )
}