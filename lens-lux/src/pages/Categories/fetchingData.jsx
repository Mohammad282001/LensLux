import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HeroCover from './herosection';
import opticalImg from '../../assets/images/optical-bg.png';
import sunglassesImg from '../../assets/images/sunglasses-bg.png';
import finalImage from '../../assets/images/glasses-bg3.png';

const FetchingData = () => {
    const { type, category } = useParams();
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/products.json');
                const data = await response.json();
                let filteredProducts = [];
                if (type && !category) {
                    filteredProducts = data[type] || [];
                } else if (type && category) {
                    filteredProducts = data[type]?.filter(
                        product => product.category === category
                    ) || [];
                }
                setProducts(filteredProducts);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [type, category]);

    const handleNavigation = (subcategory) => {
        navigate(`/glasses/${type}/${subcategory}`);
    };

    const typeName = type ? type.charAt(0).toUpperCase() + type.slice(1) : '';
    const categoryName = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';

    let backgroundImage;
    let subText;
    if (type === 'optical') {
        backgroundImage = finalImage;
        subText = "Established in London, 1969, Cutler and Gross glasses are handcrafted by expert artisans.\n Discover sleek aviator glasses, oversized frames and more."
    } else if (type === 'sunglasses') {
        backgroundImage = sunglassesImg;
        subText = "Established in London, 1969, Cutler and Gross sunglasses are handcrafted by  expert artisans.\n Discover sleek aviator sunglasses, oversized sunglasses and more."
    } else {
        backgroundImage = '';
    }
    const heroText = category ? `${typeName} - ${categoryName}` : typeName;

    return (
        <>
            <HeroCover backgroundImage={backgroundImage} text={heroText} subText={subText} />
            <div className='px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8 md:px-24'>
                {!category && type && (
                    <div>
                        <button onClick={() => handleNavigation('men')}>Men {typeName}</button>
                        <span> || </span>
                        <button onClick={() => handleNavigation('women')}>Women {typeName}</button>
                    </div>
                )}
                <ul>
                    {products.length > 0 ? (
                        products.map(product => (
                            <li key={product.id}>
                                <a href={`/product/${product.id}`}>Id: {product.id}, Name: {product.name}</a>
                            </li>
                        ))
                    ) : (
                        <li>No products found for this category.</li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default FetchingData;
