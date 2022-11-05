import React, { useState } from 'react';

const AddProductWidget = (props) => {
    const { onAddItem } = props;
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(0);
    const [color, setColor] = useState('');
    const [isShowForm, setIsShowForm] = useState(true);

    const handleOnChangeName = (event) => setName(event.target.value);
    const handleOnChangePrice = (event) => setPrice(event.target.value);
    const handleOnChangeSize = (event) => setSize(event.target.value);
    const handleOnChangeColor = (event) => setColor(event.target.value);
    const handleToggleIsShowForm = () => setIsShowForm(!isShowForm);

    const onSubmit = () => {
        onAddItem({ name, price, size, color });
        setName('');
        setPrice(0);
        setSize(0);
        setColor('');
    };

    return (
        <div>
            {isShowForm &&
                <fieldset>
                    <legend>Add A New Product</legend>
                    <div className='input-product'>
                        <label>Name:</label>
                        <input type='text' value={name} onChange={handleOnChangeName} />
                    </div>
                    <div className='input-product'>
                        <label>Price:</label>
                        <input type='number' value={price} onChange={handleOnChangePrice} />
                    </div>
                    <div className='input-product'>
                        <label>Size:</label>
                        <input type='number' value={size} onChange={handleOnChangeSize} />
                    </div>
                    <div className='input-product'>
                        <label>Color:</label>
                        <input type='text' value={color} onChange={handleOnChangeColor} />
                    </div>
                    <div>
                        <button onClick={onSubmit}>+Add Product</button>
                    </div>
                </fieldset >
            }
            <div onClick={handleToggleIsShowForm}>{isShowForm ? 'Hide' : 'Show'}</div>
        </div>
    );
}

export default AddProductWidget;
