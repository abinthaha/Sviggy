import React, { useState, useEffect } from 'react';

function ProductItem(props) {
    const { pItem } = props;
    const [count, updateCount] = useState(0);
    const [addOnSelected, updateAddons] = useState([]);

    useEffect(() => {
        props.updateCart(pItem, count);
    }, [props, pItem, count])

    const addRemoveAddon = (addon) => {
        let dupAddOn = JSON.parse(JSON.stringify(addOnSelected));
        if (dupAddOn.indexOf(addon.dish_id) > -1) {
            dupAddOn = dupAddOn.filter(id => id !== addon.dish_id);
        } else {
            dupAddOn.push(addon.dish_id);
        }
        updateAddons(dupAddOn);
    }

    return (
        <li className='p-item'>
            <div className='product-details'>
                <article className='product-name'>
                    <section className='name-prize'>
                        <h4 className={`dish-name ${pItem.dish_Type === 1 ? 'non-veg' : ''}`}>{pItem.dish_name}</h4>

                        <div className='calorie-details'>
                            <p className='prize'>{pItem.dish_currency} {pItem.dish_price}</p>
                            <p className='calorie'>{pItem.dish_calories} Calories</p>
                        </div>

                    </section>
                    <section className='img-cal'>
                        <div className='product-image' style={{ backgroundImage: 'url(' + pItem.dish_image + ')' }}>
                        </div>
                    </section>
                </article>
                <p className='desc'>{pItem.dish_description}</p>
                <div className='not-available'>{pItem.dish_Availability ? (
                    <div className='add-delete'>
                        <span className={`delete ${count <= 0 ? 'disabled' : ''}`} onClick={ev => updateCount(count - 1)}>-</span>
                        <span className='count'>{count}</span>
                        <span className='add' onClick={ev => updateCount(count + 1)}>+</span>
                    </div>
                ) : 'Not Available'}</div>

                {
                    pItem.addonCat && pItem.addonCat.length > 0 ? (

                        <section className='customization-section'>
                            <input className='ip-check' id={pItem.dish_id} type='checkbox' />
                            <label className='ip-check-label' htmlFor={pItem.dish_id}>Customizations available</label>
                            <div className='content'>
                                <section>
                                    {pItem.addonCat.map(category => {
                                        return (
                                            <div className='category-wrapper' key={category.addon_category_id}>
                                                <h5 className='category-name'>{category.addon_category}</h5>
                                                <section className='addon-wrapper'>
                                                    {
                                                        category.addons.map(addon => {
                                                            return (
                                                                <article
                                                                    className={`addon-item ${addOnSelected.indexOf(addon.dish_id) > -1 ? 'selected' : ''}`}
                                                                    onClick={ev => addRemoveAddon(addon)}
                                                                    key={addon.dish_id}
                                                                >
                                                                    <h5 className='addon-name'>{addon.dish_name}</h5>
                                                                    <div className='details'>
                                                                        <span className='left'>
                                                                            <span className='label'>Price</span>
                                                                            <span>{addon.dish_price}</span>
                                                                        </span>
                                                                        <span className='right'>
                                                                            <span className='label'>Calories</span>
                                                                            <span>{addon.dish_calories}</span>
                                                                        </span>
                                                                    </div>
                                                                </article>
                                                            )
                                                        })
                                                    }
                                                </section>
                                            </div>
                                        )
                                    })}
                                </section>
                            </div>
                        </section>
                    ) : null
                }

                {/* <div className='not-available customization'>{pItem.addonCat && pItem.addonCat.length > 0 ? 'Customizations available' : ''}</div> */}

            </div>

        </li>
    )
}

export default React.memo(ProductItem);