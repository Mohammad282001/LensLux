import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Simulate fetching product data
const fetchProductData = (productId) => {
    // Replace with actual data fetching logic
    const products = [
        { id: 1, name: 'Men Optical Glasses 1', description: 'Description for Men Optical Glasses 1' },
        { id: 2, name: 'Men Optical Glasses 2', description: 'Description for Men Optical Glasses 2' },
        { id: 3, name: 'Women Sunglasses 1', description: 'Description for Women Sunglasses 1' },
        { id: 4, name: 'Women Sunglasses 2', description: 'Description for Women Sunglasses 2' },
        // Add more products here
    ];
    return products.find(product => product.id === parseInt(productId));
};

const ProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const data = fetchProductData(productId);
        setProduct(data);
    }, [productId]);

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductPage;
