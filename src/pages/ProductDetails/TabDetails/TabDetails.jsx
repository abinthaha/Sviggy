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
        return ({ tabDetails: nextProps.currentTabDetails[0] })
    }

    updateCart = (item, count) => {
        const { cartItems } = this.state;
        let dupItem = JSON.parse(JSON.stringify(cartItems));
        dupItem[item.dish_id] = count;
        this.setState({
            ...this.state,
            cartItems: dupItem
        }, () => {
            const cartItems = Object.keys(dupItem).filter(item => dupItem[item] > 0).length;
            // this.props.updateCart(cartItems);
            this.props.updateCart(cartItems);
        });
    }

    render() {
        const { tabDetails } = this.state;
        return (
            <>
                <ul className='product-list'>
                    {tabDetails && tabDetails.category_dishes.map((pItem, pIndex) => {
                        return (
                            <ProductItem pItem={pItem} key={pIndex} updateCart={this.updateCart} />
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


const mapStateToProps = undefined;
export default connect(mapStateToProps, mapDispatchToProps)(TabDetails);