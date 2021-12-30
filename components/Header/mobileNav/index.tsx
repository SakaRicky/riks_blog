import Link from 'next/link';
import styles from './nav.module.scss';
import { CloseIcon } from './close';

interface NavProp {
    showMenu: boolean,
    handleShowMenu: () => void
};

export const MobileNav = ({showMenu, handleShowMenu}: NavProp) => {

    const showMenuStyle = showMenu ? "translateX(0px)" : "translateX(100%)";

    return (
        <div style={{transform: showMenuStyle}} className={styles.root}>
            <div className={styles.close__icon} onClick={handleShowMenu}>
                <CloseIcon />
            </div>
            <nav className={styles.nav}>
                <ul className={styles.nav__list}>
                    <li className={styles.nav__item}>
                        <Link href="/">
                            <a className={styles.nav__link} onClick={handleShowMenu}>
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className={styles.nav__item}  onClick={handleShowMenu}>
                        <Link href="/blog">
                            <a className={styles.nav__link} onClick={handleShowMenu}>
                                Blog
                            </a>
                        </Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link href="/projects">
                            <a className={styles.nav__link} onClick={handleShowMenu}>
                                Projects
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};