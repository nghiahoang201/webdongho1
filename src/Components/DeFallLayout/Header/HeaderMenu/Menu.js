import classNames from 'classnames/bind';
import styles from '../HeaderMenu/Menu.module.scss';

import { IconRight } from '../../../../Icons';
import { Link } from 'react-router-dom';
import Images from '../../../../img/Images';
import Confic from '../../../../Confic/Confic';

const cx = classNames.bind(styles);
function Menu() {
    return (
        <div className={cx('wrapper-menu-header')}>
            <div className={cx('menu-header-left')}>
                <div className={cx('menu-items')}>
                    <div className={cx('menu-items-text')}>
                        <Link to={Confic.Product} className={cx('menu-item-text', 'menu-item-text-hover')}>
                            đồng hồ
                        </Link>
                        <Link
                            to={Confic.ProductBestSellersPage}
                            className={cx('menu-item-text1', 'menu-item-text-hover')}
                        >
                            bán chạy nhất
                        </Link>
                    </div>
                    <div>
                        <Link to={Confic.ProductPkNamPage} className={cx('menu-item-text', 'menu-item-hover-pk')}>
                            <p> phụ kiện</p>
                            <div className={cx('header-menu-pk-items')}>
                                <div className={cx('header-menu-pk')}>
                                    <div className={cx('header-pk')}>
                                        <div className={cx('header-pk-items')}>
                                            <Link
                                                to={Confic.ProductPkNamPage}
                                                className={cx('header-pk-item-right', 'header-pk-item-right7')}
                                            >
                                                <img
                                                    className={cx('header-pk-image-right')}
                                                    src={Images.imageCurnon1}
                                                    alt="anh"
                                                />
                                                <span>cuffs</span>
                                            </Link>
                                            <Link to={Confic.ProductPkNamPage} className={cx('header-pk-item-right')}>
                                                <div className={cx('header-pk-item-right')}>
                                                    <p>xem tất cả</p>
                                                    <IconRight />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to={Confic.ProductDaydhPage} className={cx('menu-item-text', 'menu-item-hover-daydh')}>
                            <p> dây đồng hồ</p>
                            <div className={cx('header-menu-daydh-items')}>
                                <div className={cx('header-menu-daydh')}>
                                    <div className={cx('header-daydh')}>
                                        <div className={cx('header-daydh-items')}>
                                            <img
                                                className={cx('header-daydh-image-right')}
                                                src={Images.imageDaydh1}
                                                alt="anh"
                                            />

                                            <div className={cx('header-daydh-item-right')}>
                                                <p className={cx('header-daydh-item-right-text')}>
                                                    Từ nay bạn đã có thể biến một thành nhiều chiếc đồng hồ để thay đổi
                                                    phong cách thời trang của bản thân với dây đồng hồ Curnon.
                                                </p>
                                                <Link
                                                    to={Confic.ProductDaydhPage}
                                                    className={cx('header-daydh-item-right-buying')}
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
                </div>
            </div>

            <div className={cx('menu-header-right')}>
                <div className={cx('header-items-right')}>
                    <Link to={Confic.KashmirPage} className={cx('header-item-right')}>
                        <img className={cx('header-image-right')} src={Images.imageTransparent1} alt="anh" />
                        <span>Kashmir</span>
                    </Link>
                    <Link to={Confic.WeimarPage} className={cx('header-item-right')}>
                        <img className={cx('header-image-right')} src={Images.imageTransparent2} alt="anh" />
                        <span>Weimar</span>
                    </Link>
                    <Link to={Confic.ColosseumPage} className={cx('header-item-right')}>
                        <img className={cx('header-image-right')} src={Images.imageTransparent3} alt="anh" />
                        <span>Colosseum</span>
                    </Link>
                    <Link to={Confic.JacksonPage} className={cx('header-item-right')}>
                        <img className={cx('header-image-right')} src={Images.imageTransparent4} alt="anh" />
                        <span>Jackson</span>
                    </Link>
                    <Link to={Confic.DetroitPage} className={cx('header-item-right')}>
                        <img className={cx('header-image-right')} src={Images.imageTransparent5} alt="anh" />
                        <span>Detroit</span>
                    </Link>
                    <Link to={Confic.FuturaPage} className={cx('header-item-right')}>
                        <img className={cx('header-image-right')} src={Images.imageTransparent6} alt="anh" />
                        <span>Futura</span>
                    </Link>
                    <Link to={Confic.WhitesandsPage} className={cx('header-item-right')}>
                        <img className={cx('header-image-right')} src={Images.imageTransparent7} alt="anh" />
                        <span>Whitesands</span>
                    </Link>
                    <div className={cx('header-item-right')}>
                        <p>xem tất cả</p>
                        <IconRight />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
