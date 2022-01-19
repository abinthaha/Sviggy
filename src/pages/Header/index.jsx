import React from 'react';
import './styles.scss';
import cartImage from '../../assets/images/cart-icon.png';
import backArrow from '../../assets/images/back-arrow.png';

import { connect } from 'react-redux';


function ProductHeader(props) {
    const { resName, count } = props;

    return (
        <header className='header'>
            <span className='back-arrow'>
                <img src={backArrow} alt="Back arrow" />
            </span>
            <h2>{resName}</h2>
            <span className='order-wrapper'>
                <label htmlFor="">My orders</label>
                <img src={cartImage} className='cart-img' alt="Cart Icon" />
                <span className='badge'>{count}</span>
            </span>
        </header>
    )
}
const mapStateToProps = state => {
    return {
        count: state.cartItems
    };
};

export default connect(mapStateToProps)(ProductHeader);