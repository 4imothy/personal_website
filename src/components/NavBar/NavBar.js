import { HashLink } from "react-router-hash-link";
import styles from './NavBar.module.scss';
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import menuIcon from './Icons/menuIcon.png';
import menuIconHover from './Icons/menuIconHover.png';
import mailIcon from './Icons/mailIcon.png';
import mailIconHover from './Icons/mailIconHover.png';
import githubIcon from '../SharedIcons/githubIcon.png';
import githubHover from '../SharedIcons/githubIconHover.png';
import projectsIcon from './Icons/projectsIcon.png';
import projectsIconHover from './Icons/projectsIconHover.png';
import homeIcon from './Icons/homeIcon.png';
import homeIconHover from './Icons/homeIconHover.png';
import './transition.css';

const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className={styles.bar}>
            <ul className={styles.navList} onMouseLeave={() => {
                setOpen(false);
            }}>
                <CSSTransition in={open} timeout={500} classNames="menu" unmountOnExit>
                    <div className={styles.container}>
                        <LinkInsideItem icon={homeIcon} hoverIcon={homeIconHover} to="/#home" />
                        <LinkInsideItem icon={projectsIcon} hoverIcon={projectsIconHover} to="/#projects" />
                        <LinkInsideItem icon={mailIcon} hoverIcon={mailIconHover} to="/#contactme" />
                        <LinkOutsideItem icon={githubIcon} hoverIcon={githubHover} to="https://www.github.com/4tlc" />
                    </div>
                </CSSTransition>
                <div className={styles.menuIconContainer}>
                    <img className={styles.menuIcon} src={menuIcon} alt="navigate" onClick={() => {
                        setOpen(!open);
                    }} onMouseOver={(e) => {
                        setOpen(true);
                        e.currentTarget.src = menuIconHover;
                    }} onMouseLeave={(e) => {
                        e.currentTarget.src = menuIcon;
                    }} />
                </div>
            </ul>
        </nav>
    );
}


function LinkOutsideItem({ icon, hoverIcon, to }) {
    return (
        <li className={styles.itemContainer}>
            <a href={to} target="_blank" rel="noreferrer">
                <img className={styles.itemIcon} src={icon} alt={to} onMouseOver={(e) => {
                    e.currentTarget.src = hoverIcon;
                }}
                    onMouseLeave={(e) => {
                        e.currentTarget.src = icon;
                    }} />
            </a>
        </li>
    );
}

function LinkInsideItem({ icon, hoverIcon, to }) {
    return (
        <li className={styles.itemContainer}>
            <HashLink to={to}>
                <img className={styles.itemIcon} src={icon} alt={to} onMouseOver={(e) => {
                    e.currentTarget.src = hoverIcon;
                }} onMouseLeave={(e) => {
                    e.currentTarget.src = icon;
                }} />
            </HashLink>
        </li>
    );
}

export default NavBar;