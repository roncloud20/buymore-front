import Header from "../Components/Header";
import { useEffect, useState } from 'react';
import ProductList from "../Components/ProductList";

export default function Dashboard() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            let response = await fetch("http://localhost:8000/api/list");
            let result = await response.json();
            setData(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    console.log(data);

    const handleSearch = (query)=>{
        if (!query) {
            fetchData();
        } else {
            const filtered  = data.filter(product =>
                (product.product_name ?? "").toLowerCase().includes(query.toLowerCase()) || (product.category ?? "").toLowerCase().includes(query.toLowerCase())
            );
            setData(filtered);
            if (filtered.length === 0) {
                alert("Search Not Found");
            }
        }
    }
    return (
        <>
            <Header onSearch={handleSearch}/>
            <h1>Dashboard Page</h1>
            <ProductList data={data}/>
        </>
    )
}