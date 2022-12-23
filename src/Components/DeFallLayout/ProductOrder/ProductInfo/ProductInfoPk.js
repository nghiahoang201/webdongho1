import classNames from 'classnames/bind';
import styles from '../ProductInfo/ProductInfo.module.scss';

import { useContext, useState } from 'react';
import ProductInfoProductPk from './ProductInfoProductPk';
import ProductInfoShip from './ProductInfoShip';
import ProductInfoExchange from './ProductInfoExchange';
import ProductInfoPay from './ProductInfoPay';
import { ValueContex } from '../../DeFallLayout';

const cx = classNames.bind(styles);

function ProductInfoPk() {
    const [tabState, setTabState] = useState('product');
    const { showAnProduct } = useContext(ValueContex);
    return (
        <div className={cx('wrapper-product-info')}>
            <div className={cx('product-info')}>
                <div className={cx('product-info-items')}>
                    <div
                        className={cx(
                            'product-info-item',
                            `${tabState === 'product' ? 'product-info-item-border' : ''}`,
                        )}
                    >
                        <button className={cx('product-info-item-btn-title')} onClick={() => setTabState('product')}>
                            THÔNG TIN SẢN PHẨM
                        </button>
                    </div>
                    <div
                        className={cx(
                            'product-info-item',
                            `${tabState === 'productShip' ? 'product-info-item-border' : ''}`,
                        )}
                    >
                        <button
                            className={cx('product-info-item-btn-title')}
                            onClick={() => setTabState('productShip')}
                        >
                            CHÍNH SÁCH VẬN CHUYỂN
                        </button>
                    </div>
                    <div
                        className={cx(
                            'product-info-item',
                            `${tabState === 'productExchange' ? 'product-info-item-border' : ''}`,
                        )}
                    >
                        <button
                            className={cx('product-info-item-btn-title')}
                            onClick={() => setTabState('productExchange')}
                        >
                            ĐỔI TRẢ & BẢO HÀNH
                        </button>
                    </div>
                    <div
                        className={cx(
                            'product-info-item',
                            `${tabState === 'productPay' ? 'product-info-item-border' : ''}`,
                        )}
                    >
                        <button className={cx('product-info-item-btn-title')} onClick={() => setTabState('productPay')}>
                            HÌNH THỨC THANH TOÁN
                        </button>
                    </div>
                </div>
                {tabState === 'product' && <ProductInfoProductPk item={showAnProduct} />}
                {tabState === 'productShip' && <ProductInfoShip />}
                {tabState === 'productExchange' && <ProductInfoExchange />}
                {tabState === 'productPay' && <ProductInfoPay />}
            </div>
        </div>
    );
}

export default ProductInfoPk;
