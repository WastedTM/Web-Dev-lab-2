import React from 'react';

const Item = ({ item, onCheckboxChange }) => {
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => onCheckboxChange(item.id)}
                />
                {item.name}
            </label>
        </div>
    );
};

export default Item;