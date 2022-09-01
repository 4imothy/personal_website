import React from "react";
import Text from "./Text.js";
import ScrollDirections from "./ScrollDirections.js";
import styles from './header.module.scss';

const Header = () => (
    <div className={styles.root}>
            <Text />
            <ScrollDirections />
    </div>
);

export default Header;