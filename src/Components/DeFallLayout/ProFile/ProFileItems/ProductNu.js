import classNames from 'classnames/bind';
import styles from '../ProFileItems/ProFileItems.module.scss';
import grid from '../../../../GlobalStyles/Grid.module.scss';

import { ValueContex } from '../../DeFallLayout';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Confic from '../../../../Confic/Confic';

const cx = classNames.bind(styles);
const cd = classNames.bind(grid);

function ProductNu(props) {
    const { productItems } = props;

    const { productItemCart, setProductItemCart, setIdAnProduct } = useContext(ValueContex);

    const addAllProducts = (productItem) => {
        const productExist = productItemCart.find((item) => item._id === productItem._id);
        if (productExist) {
            setProductItemCart(
                productItemCart.map((item) =>
                    item._id === productItem._id ? { ...productExist, count: productExist.count + 1 } : item,
                ),
            );
        } else {
            setProductItemCart([...productItemCart, { ...productItem, count: 1 }]);
        }
    };
    return (
        <>
            {productItems.map(
                (item) =>
                    item.genres === 'Nu' && (
                        <div className={cd('col', 'l-3', 'm-6', 'c-12')} key={item._id}>
                            <div className={cx('product-best-sellers')}>
                                <Link
                                    to={Confic.ProductOrderPage}
                                    className={cx('product-link')}
                                    onClick={() => setIdAnProduct(item._id)}
                                >
                                    <div>
                                        <img className={cx('product-img')} src={item.img} alt="anh product" />
                                        {item.bestSeller ? (
                                            <span className={cx('product-sellers')}>{item.bestSeller}</span>
                                        ) : null}
                                    </div>
                                    <div>
                                        <p className={cx('product-texttype')}>{item.brand}</p>
                                    </div>
                                    <div>
                                        <h4 className={cx('product-textname')}>{item.name}</h4>
                                    </div>
                                    <div className={cx('product-prices')}>
                                        <span className={cx('product-newprice')}>
                                            {item.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                                        </span>
                                        {item.priceSell ? (
                                            <span className={cx('product-price')}>
                                                {item.priceSell.toLocaleString('vi', {
                                                    style: 'currency',
                                                    currency: 'VND',
                                                })}
                                            </span>
                                        ) : null}
                                    </div>
                                </Link>
                                <div>
                                    <button className={cx('product-btn')} onClick={() => addAllProducts(item)}>
                                        Thêm vào giỏ
                                    </button>
                                </div>
                            </div>
                        </div>
                    ),
            )}
        </>
    );
}

export default ProductNu;
