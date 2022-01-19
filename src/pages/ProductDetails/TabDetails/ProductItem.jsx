import React, { useState, useEffect } from 'react';

function ProductItem(props) {
    const { pItem } = props;
    const [count, updateCount] = useState(0);

    useEffect(() => {
        props.updateCart(pItem, count);
    }, [props, pItem, count])

    return (
        <li className='p-item'>
            <div className='product-details'>
                <h4 className={`dish-name ${pItem.dish_Type === 1 ? 'non-veg' : ''}`}>{pItem.dish_name}</h4>
                <p className='prize'>{pItem.dish_currency} {pItem.dish_price}</p>
                <p className='desc'>{pItem.dish_description}</p>
                <div className='not-available'>{pItem.dish_Availability ? (
                    <div className='add-delete'>
                        <span className={`delete ${count <= 0 ? 'disabled' : ''}`} onClick={ev => updateCount(count - 1)}>-</span>
                        <span className='count'>{count}</span>
                        <span className='add' onClick={ev => updateCount(count + 1)}>+</span>
                    </div>
                ) : 'Not Available'}</div>
                <div className='not-available customization'>{pItem.addonCat && pItem.addonCat.length > 0 ? 'Customizations available' : ''}</div>
            </div>
            <section className='img-cal'>
                <div className='calorie-details'>{pItem.dish_calories} Calories</div>
                <div className='product-image' style={{ backgroundImage: 'url(' + pItem.dish_image + ')' }}>
                </div>
            </section>
        </li>
    )
}

export default React.memo(ProductItem);