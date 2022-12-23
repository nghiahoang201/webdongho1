import classNames from 'classnames/bind';
import styles from '../ProFileItems/ProFileItems.module.scss';
import grid from '../../../../GlobalStyles/Grid.module.scss';

import { IconRight } from '../../../../Icons';
import ProductNu from './ProductNu';
import { ValueContex } from '../../DeFallLayout';
import { useContext } from 'react';

const cx = classNames.bind(styles);
const cd = classNames.bind(grid);

function ListProductNu() {
    const { productNu } = useContext(ValueContex);

    return (
        <div className={cx('wrapper')}>
            <div className={cd('grid', 'wide')}>
                <div className={cx('list-products')}>
                    <div className={cx('list-products-title-bestsellers')}>
                        <h2 className={cx('list-products-title')}>Women's Best Sellers</h2>
                    </div>
                    <a href="/" className={cx('list-products-link')}>
                        <span className={cx('list-products-textlink')}>Xem tất cả</span>
                        <IconRight className={cx('list-products-icon')} />
                    </a>
                    <div className="list-products-best-sellers">
                        <div className={cd('row')}>
                            <ProductNu productItems={productNu.slice(0, 4)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListProductNu;
