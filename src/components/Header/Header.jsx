import React from 'react';
import Styles from './Header.module.scss';

export default function Header(props) {
    return (
        <header className={Styles.siteheader}>
            {props.children}
        </header>
    )
}