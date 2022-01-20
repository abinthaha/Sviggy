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
        return (
            <>
                <Tabs
                    activeIndex={currentTab}
                    changeTabs={this.updateTab}
                    tabs={menu && menu.length > 0 ? menu.map(menuItem => menuItem.menu_category) : []}
                />
                {menu && menu.length > 0 && menu.map((menuItem, menuIndex) => {
                    return (
                        <section
                            key={menuItem.menu_category_id}
                            className={`tab-details ${menuIndex === currentTab ? 'active' : ''}`}
                        >
                            <TabDetails currentTabDetails={menuItem} />
                        </section>
                    )
                })}

            </>
        )
    }
}

export default ProductDetails;