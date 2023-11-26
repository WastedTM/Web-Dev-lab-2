import React from "react";
import Item from './Item';

const Body = ({ items }) => {
    const handleCheckboxChange = (itemId) => {
        console.log(`Checkbox changed for item with id ${itemId}`);
    };

    return (
        <div>
            <h2>Product list:</h2>
            {items.map((item) => (
                <Item key={item.id} item={item} onCheckboxChange={handleCheckboxChange} />
            ))}
        </div>
    );
};

export default Body;