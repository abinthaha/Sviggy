import React, { Component } from 'react';
import './styles.scss';
import TabDetails from './TabDetails/TabDetails';
import Tabs from './Tabs/Tabs';

class ProductDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0,
            menu: []
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return ({ menu: nextProps.menu })
    }

    updateTab = (ev, index) => {
        this.setState({
            ...this.state,
            currentTab: index
        })
    }

    render() {
        const { menu, currentTab } = this.state;
        const currentTabDetails = menu && menu.length > 0 ? menu.filter((menuItem, index) => index === currentTab) : [];
        return (
            <>
                <Tabs
                    activeIndex={currentTab}
                    changeTabs={this.updateTab}
                    tabs={menu && menu.length > 0 ? menu.map(menuItem => menuItem.menu_category) : []}
                />
                <TabDetails currentTabDetails={currentTabDetails} />
            </>
        )
    }
}

export default ProductDetails;