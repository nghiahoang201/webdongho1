import classNames from 'classnames/bind';
import styles from '../ListProductAccessory/ListProductAccessoryAll.module.scss';
import grid from '../../../../GlobalStyles/Grid.module.scss';

import { ValueContex } from '../../DeFallLayout';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Confic from '../../../../Confic/Confic';

const cx = classNames.bind(styles);
const cd = classNames.bind(grid);

function ProductsAccessory(props) {
    const { productItem } = props;
    const { productItemCart, setProductItemCart, setIdAnProductAccessory } = useContext(ValueContex);

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
            {productItem.map((product) => (
                <div className={cd('col', 'l-3', 'm-6', 'c-12')} key={product._id}>
                    <div className={cx('product-best-sellers')}>
                        <Link
                            to={Confic.ProductOrderPkPage}
                            className={cx('product-link')}
                            onClick={() => setIdAnProductAccessory(product._id)}
                        >
                            <div>
                                <img className={cx('product-img')} src={product.img} alt="anh product" />
                                {product.bestSeller ? (
                                    <sapn className={cx('product-sellers')}>{product.bestSeller}</sapn>
                                ) : null}
                            </div>

                            <div>
                                <p className={cx('product-texttype')}>{product.brand}</p>
                            </div>
                            <div>
                                <h4 className={cx('product-textname')}>{product.name}</h4>
                            </div>
                            <div className={cx('product-prices')}>
                                <span className={cx('product-newprice')}>
                                    {product.price.toLocaleString('vi', {
                                        style: 'currency',
                                        currency: 'VND',
                                    })}
                                </span>
                                {product.priceSell ? (
                                    <span className={cx('product-price')}>
                                        {product.priceSell.toLocaleString('vi', {
                                            style: 'currency',
                                            currency: 'VND',
                                        })}
                                    </span>
                                ) : null}
                            </div>
                        </Link>
                        <div>
                            <button className={cx('product-btn')} onClick={() => addAllProducts(product)}>
                                Thêm vào giỏ
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ProductsAccessory;
