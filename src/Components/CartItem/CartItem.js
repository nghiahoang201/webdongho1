import classNames from 'classnames/bind';
import styles from '../CartItem/CartItem.module.scss';

import { IconClose, IconPlus, IconReduce } from '../../Icons';
import { useContext } from 'react';
import { ValueContex } from '../DeFallLayout/DeFallLayout';

const cx = classNames.bind(styles);

function CartItem(props) {
    const { item } = props;
    const { productItemCart, setProductItemCart, deleteItemCart } = useContext(ValueContex);

    const handleAddProductCart = (productItem) => {
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

    const handleRemoveProductCart = (productItem) => {
        const productExist = productItemCart.find((item) => item._id === productItem._id);
        if (productExist.count === 1) {
            setProductItemCart(productItemCart.filter((item) => item._id !== productItem._id));
        } else {
            setProductItemCart(
                productItemCart.map((item) =>
                    item._id === productItem._id ? { ...productExist, count: productExist.count - 1 } : item,
                ),
            );
        }
    };

    return (
        <div className={cx('cart-body-product')}>
            <img className={cx('cart-body-product-image')} src={item.img} alt="anh" />
            <button className={cx('cart-body-product-close')} onClick={() => deleteItemCart(item._id)}>
                <IconClose className={cx('cart-body-product-close-icon')} />
            </button>

            <div className={cx('cart-body-product-items')}>
                <div className={cx('cart-body-product-text-price')}>
                    <h3 className={cx('cart-body-product-text-name-product')}>{item.name}</h3>
                    <p className={cx('cart-body-product-price')}>
                        {item.price.toLocaleString('vi', {
                            style: 'currency',
                            currency: 'VND',
                        })}
                    </p>
                </div>
                <div className={cx('cart-body-product-text-quatity')}>
                    <p className={cx('cart-body-product-text')}>{item.size}</p>
                    <div className={cx('cart-body-product-quatity')}>
                        <button className={cx('cart-icons')} onClick={() => handleRemoveProductCart(item)}>
                            <IconReduce className={cx('cart-icon')} />
                        </button>
                        <p className={cx('cart-body-quatity')}>Qty:{item.count}</p>
                        <button className={cx('cart-icons')} onClick={() => handleAddProductCart(item)}>
                            <IconPlus className={cx('cart-icon')} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
