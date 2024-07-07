import Card from './Card';

export default function ProductList ({data}) {
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