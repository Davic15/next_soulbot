import React from 'react';
import Image from 'next/image';
import classes from './Header.module.css';
import logo from '../../app/assets/images/logo.png';

export const Header = () => {
    return (
        <header className={classes['layout__menu']}>
            <nav className={classes['menu__navbar']}>
                <div className={classes['navbar__logo']}>
                    <Image
                        className={classes['logo__image']}
                        src={logo}
                        alt='soulbot logo'
                    />
                </div>
                <ul className={classes['navbar__list']}>
                    <li className={classes['list__option']}>
                        <a
                            href='#'
                            className={`${classes['option__link']} ${classes['option__link--active']}`}
                        >
                            <span className={classes['option__text']}>
                                tool
                            </span>
                        </a>
                    </li>
                    <li className={classes['list__option']}>
                        <a href='#' className={classes['option__link']}>
                            <span className={classes['option__text']}>
                                caratteristiche
                            </span>
                        </a>
                    </li>
                    <li className={classes['list__option']}>
                        <a href='#' className={classes['option__link']}>
                            <span className={classes['option__text']}>
                                prezzo
                            </span>
                        </a>
                    </li>
                    <li className={classes['list__option']}>
                        <a href='#' className={classes['option__link']}>
                            <span className={classes['option__text']}>
                                team
                            </span>
                        </a>
                    </li>
                </ul>
                <div className={classes['navbar__language']}>
                    <a
                        href='#'
                        className={`${classes['language__item']} ${classes['language__italian']}`}
                    >
                        it
                    </a>
                    <a
                        href='#'
                        className={`${classes['language__item']} ${classes['language__english']}`}
                    >
                        en
                    </a>
                </div>
                <div className={classes['navbar__demo']}>
                    <a href='#' className={classes['demo__button']}>
                        prova la demo
                    </a>
                </div>
            </nav>
        </header>
    );
};
