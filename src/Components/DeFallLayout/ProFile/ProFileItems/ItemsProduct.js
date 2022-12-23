import classNames from 'classnames/bind';
import styles from '../ProFileItems/ProFileItems.module.scss';
import grid from '../../../../GlobalStyles/Grid.module.scss';

import Images from '../../../../img/Images';
import { IconRight } from '../../../../Icons';
import Confic from '../../../../Confic/Confic';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const cd = classNames.bind(grid);

function ItemsProduct() {
    return (
        <div className={cx('wrapper-items-product')}>
            <div className={cd('grid', 'wide')}>
                <div className={cx('items-product')}>
                    <div className={cd('row')}>
                        <div className={cd('col', 'l-4', 'm-6')}>
                            <Link to={Confic.ProductNu} className={cx('items-product-link')}>
                                <img
                                    className={cx('img', 'imgippro', 'img3ippro')}
                                    src={Images.imageCategory1}
                                    alt="category"
                                />
                                <div className={cx('title-icon')}>
                                    <div className={cx('title')}>Đồng hồ nữ</div>
                                    <div className={cx('icon')}>
                                        <IconRight />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className={cd('col', 'l-4', 'm-6')}>
                            <Link to={Confic.Product} className={cx('items-product-link')}>
                                <img
                                    className={cx('img', 'imgippro', 'img3ippro')}
                                    src={Images.imageCategory2}
                                    alt="category"
                                />
                                <div className={cx('title-icon')}>
                                    <div className={cx('title')}>Đồng hồ nam</div>
                                    <div className={cx('icon')}>
                                        <IconRight />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className={cd('col', 'l-4', 'm-12')}>
                            <Link to={Confic.ProductPkNuPage} className={cx('items-product-link')}>
                                <img
                                    className={cx('img', 'imgippro', 'img3ippro')}
                                    src={Images.imageCategory3}
                                    alt="category"
                                />
                                <div className={cx('title-icon')}>
                                    <div className={cx('title')}>Phụ kiện thời trang</div>
                                    <div className={cx('icon')}>
                                        <IconRight />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemsProduct;
