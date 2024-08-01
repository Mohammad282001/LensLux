import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Simulate fetching data
const fetchData = (categoryType) => {
    // Replace with actual data fetching logic
    const data = {
        menoptical: [{ id: 1, name: 'Men Optical Glasses 1' },
        { id: 2, name: 'Men Optical Glasses 2' }],
        womensunglasses: [{ id: 3, name: 'Women Sunglasses 1' }, { id: 4, name: 'Women Sunglasses 2' }],
        // Add more categories here
    };
    return data[categoryType] || [];
};

const CategoryPage = () => {
    const { categoryType } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const data = fetchData(categoryType);
        setProducts(data);
    }, [categoryType]);

    return (
        <div>
            <h1>{categoryType.replace(/([A-Z])/g, ' $1').toUpperCase()}</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <a href={`/product/${product.id}`}>{product.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryPage;


