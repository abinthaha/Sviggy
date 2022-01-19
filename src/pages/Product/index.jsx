import React, { Component } from 'react';
import './styles.scss';
import axios from 'axios';
import ProductHeader from '../Header';
import ProductDetails from '../ProductDetails';

class ProductPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        axios.get('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099')
            .then(response => {
                console.log(response.data)
                this.setState({
                    ...this.state,
                    data: response.data[0]
                })
            });
    }
    render() {
        const { data } = this.state;
        return (
            <main>
                <ProductHeader resName={data.restaurant_name} count={0} />
                <ProductDetails menu={data.table_menu_list} />
            </main>
        )
    }
}

export default ProductPage;