import React, { FC } from 'react';
import { ActiveLink } from './';

import styles from './NavBar.module.css';

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const NavBar: FC = () => {
    return (
        <nav className={ styles.menu }>
            {
                menuItems.map( item => (
                    <ActiveLink key={ item.href } name={ item.text } href={ item.href } />
                ))
            }
        </nav>
    )
}
