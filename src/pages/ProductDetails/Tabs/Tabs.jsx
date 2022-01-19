import React from 'react';
import './tabs.scss';

function Tabs(props) {
    return (
        <ul className='menu-list'>
            {
                props.tabs && props.tabs.map((menuItem, index) => {
                    return (
                        <li
                            className={`menu-item ${props.activeIndex === index ? 'active' : ''}`}
                            key={index}
                            onClick={ev => props.changeTabs(ev, index)}
                        >
                            {menuItem}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Tabs;