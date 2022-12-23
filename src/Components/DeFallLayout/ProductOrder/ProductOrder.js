import classNames from 'classnames/bind';
import styles from '../ProductOrder/ProductOrder.module.scss';

import OrderProduct from './OrderProduct/OrderProduct';
import Ship from '../../../Components/DeFallLayout/ProFile/ProFileItems/Ship/Ship';
import ProductInfo from './ProductInfo/ProductInfo';
import { ValueContex } from '../DeFallLayout';
import { useContext, useEffect } from 'react';

const cx = classNames.bind(styles);

function ProductOrder() {
    const { showAnProduct } = useContext(ValueContex);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper-productOrder')}>
            <div className={cx('productOrder-items')}>
                <OrderProduct item={showAnProduct} />
                <Ship />
                <ProductInfo />
            </div>
        </div>
    );
}

export default ProductOrder;
