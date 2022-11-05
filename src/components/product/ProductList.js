import React, { useState } from 'react';
import AddProductWidget from './AddProductWidget';
import ProductItemsWidget from './ProductItemsWidget';

const ProductList = () => {
    const PRODUCT_LIST = 'PRODUCT_LIST';
    const fetchProductList = () => [
        ...JSON.parse(localStorage.getItem(PRODUCT_LIST)) ?? [],
    ];

    const [productList, setProductList] = useState(fetchProductList());

    const saveProductList = (items) => localStorage.setItem(PRODUCT_LIST, JSON.stringify(items));

    const onAddItem = (item) => {
        const newItems = [
            ...productList,
            item,
        ];
        setProductList(newItems);

        saveProductList(newItems);
    };

    return (
        <div>
            <AddProductWidget onAddItem={onAddItem} />
            <ProductItemsWidget items={productList} />
        </div>
    );
}

export default ProductList;
