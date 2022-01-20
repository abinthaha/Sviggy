import React, { Component } from 'react';
import ProductItem from './ProductItem';
import './styles.scss';
import { connect } from 'react-redux';

class TabDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabDetails: {},
            cartItems: {}
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return ({ tabDetails: nextProps.currentTabDetails })
    }

    updateCart = (item, count) => {
        const { cartItems } = this.props;
        let dupItem = JSON.parse(JSON.stringify(cartItems));
        dupItem[item.dish_id] = count;
        this.props.updateCart(dupItem);
    }

    render() {
        const { tabDetails } = this.state;
        return (
            <>
                <ul className='product-list'>
                    {tabDetails && tabDetails.category_dishes.map((pItem, pIndex) => {
                        return (
                            <ProductItem pItem={pItem} key={pItem.dish_id} updateCart={this.updateCart} />
                        )
                    })}
                </ul>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateCart: (count) => dispatch({ type: "UPDATE", payload: count })
    }
};


const mapStateToProps = state => {
    return {
        cartItems: state.cartItems
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabDetails);