
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const { productId } = useParams(); // Access URL parameters
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await fetch('/data/products.json'); // Fetch data from JSON
                const data = await response.json();

                // Find the product by ID
                const product = Object.values(data).flat().find(item => item.id === parseInt(productId));

                setProduct(product);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product data:", error);
                setLoading(false);
            }
        };

        fetchProductData();
    }, [productId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>Product ID: {product.id}</p>
            <p>Gender: {product.gender}</p>
            {/* Add more product details here */}
        </div>
    );
};

export default ProductPage;
