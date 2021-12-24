import Link from 'next/link';
import { useState } from 'react';
import styles from './header.module.scss';
import { MobileNav } from './mobileNav';

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                riks_blog
            </div>

            <div className={styles.header__icon}>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={handleShowMenu} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                </svg>
            </div>

            <MobileNav showMenu={showMenu} handleShowMenu={handleShowMenu}/>

            <nav className={styles.nav}>
                <ul className={styles.nav__list}>
                    <li className={styles.nav__item}>
                        <Link href="/">
                            <a className={styles.nav__link}>Home</a>
                        </Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link href="/">
                            <a className={styles.nav__link}>About</a>
                        </Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link href="/">
                            <a className={styles.nav__link}>Articles</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};