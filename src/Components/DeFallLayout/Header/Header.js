import { Link } from 'react-router-dom';

import Logo from '../../../img';
import { IconCart, IconSearch } from '../../../Icons';
import Menu from './HeaderMenu/Menu';
import MenuNu from './HeaderMenu/MenuNu';
import Confic from '../../../Confic/Confic';

import classnames from 'classnames/bind';
import styles from '../DeFallLayout.module.scss';
import MenuCart from './HeaderMenu/MenuCart';
import Search from './HeaderMenu/Search';
import { useState, useContext } from 'react';
import { ValueContex } from '../DeFallLayout';

const cx = classnames.bind(styles);
function Header() {
    const [hideCart, setHideCart] = useState(false);
    const [hideSearch, setHideSearch] = useState(false);
    const { productItemCart } = useContext(ValueContex);
    return (
        <div className={cx('wrapper-header')}>
            <div className={cx('header', 'headerippro')}>
                <ul className={cx('header-btn-items')}>
                    <li className={cx('header-text', 'header-hover-nam')}>
                        <p>nam giới</p>
                        <div className={cx('menu-nam')}>
                            <Menu />
                        </div>
                    </li>

                    <li className={cx('header-text', 'header-hover-nu')}>
                        <p>nữ giới</p>
                        <div className={cx('menu-nu')}>
                            <MenuNu />
                        </div>
                    </li>
                    <li className={cx('header-text', 'header-text-curnon')}>
                        <p>về curnon</p>
                        <ul className={cx('header-menu-curnon')}>
                            <li className={cx('header-menu-curnon-item')}>
                                <a className={cx('header-menu-curnon-text')} href="/">
                                    Blog
                                </a>
                            </li>
                            <li className={cx('header-menu-curnon-item')}>
                                <a className={cx('header-menu-curnon-text')} href="/">
                                    Về chúng tôi
                                </a>
                            </li>
                            <li className={cx('header-menu-curnon-item')}>
                                <a className={cx('header-menu-curnon-text')} href="/">
                                    Long & Short
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <Link to={Confic.Home}>
                    <Logo className={cx('header-logo')} />
                </Link>
                <ul className={cx('header-btn-items')}>
                    <li>
                        <button className={cx('header-btn')} onClick={() => setHideCart(!hideCart)}>
                            <span className={cx('header-btn-text')}>giỏ hàng</span>
                            <IconCart />
                        </button>
                        <p className={cx('header-btn-quatity')}>{productItemCart && productItemCart.length}</p>
                        {hideCart ? <MenuCart hideCart={hideCart} setHideCart={setHideCart} /> : null}
                    </li>
                    <li className={cx('header-search')}>
                        <button className={cx('header-btn')} onClick={() => setHideSearch(!hideSearch)}>
                            <IconSearch className={cx('header-icon-search')} />
                        </button>
                        {hideSearch ? (
                            <div className={cx('search')}>
                                <Search hideSearch={hideSearch} setHideSearch={setHideSearch} />
                            </div>
                        ) : null}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
