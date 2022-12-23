import classNames from 'classnames/bind';
import styles from '../HeaderMenu/Menu.module.scss';

import { IconRight } from '../../../../Icons';
import Images from '../../../../img/Images';
import { Link } from 'react-router-dom';
import Confic from '../../../../Confic/Confic';

const cx = classNames.bind(styles);
function MenuNu() {
    return (
        <div className={cx('wrapper-menu-header')}>
            <div className={cx('menu-header-left')}>
                <div className={cx('menu-items')}>
                    <div className={cx('menu-items-text')}>
                        <Link to={Confic.ProductNu} className={cx('menu-item-text', 'menu-item-text-hover')}>
                            đồng hồ
                        </Link>
                        <Link
                            to={Confic.ProductNuBestSellersPage}
                            className={cx('menu-item-text1', 'menu-item-text-hover')}
                        >
                            bán chạy nhất
                        </Link>
                    </div>
                    <div>
                        <Link to={Confic.ProductPkNuPage} className={cx('menu-item-text', 'menu-item-hover-pk')}>
                            <p> vòng tay</p>
                            <div className={cx('header-menu-pk-nu-items')}>
                                <div className={cx('header-menu-pk-nu')}>
                                    <div className={cx('header-pk-nu')}>
                                        <div className={cx('header-pk-nu-items')}>
                                            <img
                                                className={cx('header-pk-nu-image-right')}
                                                src={Images.imageCurnon2}
                                                alt="anh"
                                            />

                                            <div className={cx('header-pk-nu-item-right')}>
                                                <p className={cx('header-pk-nu-item-right-text')}>
                                                    Mỗi thiết kế vòng tay của Curnon đều thể hiện một cá tính riêng biệt
                                                    của những cô gái hiện đại.
                                                </p>
                                                <Link
                                                    to={Confic.ProductPkNuPage}
                                                    className={cx('header-pk-nu-item-right-buying')}
                                                >
                                                    mua ngay
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to={Confic.ProductDaydhNuPage} className={cx('menu-item-text', 'menu-item-hover-daydh')}>
                            <p> dây đồng hồ</p>
                            <div className={cx('header-menu-daydh-items')}>
                                <div className={cx('header-menu-daydh')}>
                                    <div className={cx('header-daydh')}>
                                        <div className={cx('header-daydh-items')}>
                                            <img
                                                className={cx('header-daydh-image-right')}
                                                src={Images.imageCurnon3}
                                                alt="anh"
                                            />

                                            <div className={cx('header-daydh-item-right')}>
                                                <p className={cx('header-daydh-item-right-text')}>
                                                    Biến một thành nhiều chiếc đồng hồ để thay đổi phong cách thời trang
                                                    của bản thân với dây đồng hồ Curnon.
                                                </p>
                                                <a className={cx('header-daydh-item-right-buying')} href="/">
                                                    mua ngay
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={cx('menu-header-right')}>
                <div className={cx('header-items-right')}>
                    <Link to={Confic.MelissaniPage} className={cx('header-item-right')}>
                        <img className={cx('header-image-right')} src={Images.imageTransparent8} alt="anh" />
                        <span>Melissani</span>
                    </Link>
                    <Link to={Confic.MorainePage} className={cx('header-item-right')}>
                        <img className={cx('header-image-right')} src={Images.imageTransparent9} alt="anh" />
                        <span>Moraine</span>
                    </Link>
                    <Link to={Confic.HamiltonPage} className={cx('header-item-right')}>
                        <img className={cx('header-image-right')} src={Images.imageTransparent10} alt="anh" />
                        <span>Hamilton</span>
                    </Link>

                    <Link to={Confic.ProductNu} className={cx('header-items-right')}>
                        <div className={cx('header-item-right')}>
                            <p>xem tất cả</p>
                            <IconRight />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MenuNu;
