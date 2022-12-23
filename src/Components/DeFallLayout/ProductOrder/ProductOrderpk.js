import classNames from 'classnames/bind';
import styles from '../ProductOrder/ProductOrder.module.scss';

import OrderProductPk from './OrderProduct/OrderProductPk';
import Ship from '../ProFile/ProFileItems/Ship/Ship';
import ProductInfoPk from './ProductInfo/ProductInfoPk';
import { ValueContex } from '../DeFallLayout';
import { useContext, useEffect } from 'react';

const cx = classNames.bind(styles);

function ProductOrderPk() {
    const { showAnProduct } = useContext(ValueContex);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper-productOrder')}>
            <div className={cx('productOrder-items')}>
                <OrderProductPk item={showAnProduct} />
                <Ship />
                <ProductInfoPk />
            </div>
        </div>
    );
}

export default ProductOrderPk;
