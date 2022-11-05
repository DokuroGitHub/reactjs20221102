import React from 'react';

const ProductItemsWidget = (props) => {
    const { items } = props;
    return (
        <div>
            Products: {JSON.stringify(items)}
        </div>
    );
}

export default ProductItemsWidget;
