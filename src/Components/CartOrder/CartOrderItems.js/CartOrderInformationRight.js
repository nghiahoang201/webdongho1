import classNames from 'classnames/bind';
import { IconClose, IconPlus, IconReduce } from '../../../Icons';
import styles from '../CartOrderItems.js/CartOrderInformationRight.module.scss';
import { ValueContex } from '../../DeFallLayout/DeFallLayout';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Confic from '../../../Confic/Confic';

const cx = classNames.bind(styles);

function CartOrderInformationRight() {
    const { productItemCart, deleteItemCart, setProductItemCart, setIdAnProduct } = useContext(ValueContex);
    const totalPrice = productItemCart.reduce((price, item) => price + item.count * item.price, 0);

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
        <div className={cx('wrapper')}>
            <div className={cx('CartOrderInformationRight')}>
                <div className={cx('CartOrderInformationRight_contentbox')}>
                    <div className={cx('CartOrderInformationRight_title_product')}>
                        <p className={cx('CartOrderInformationRight_text_product')}>Đơn hàng</p>
                        <span className={cx('CartOrderInformationRight_update')}>sửa</span>
                    </div>
                    <div className={cx('CartOrderInformationRight_product')}>
                        {/* items */}
                        {productItemCart.map((item) => (
                            <div className={cx('CartOrderInformationRight_product_items')} key={item._id}>
                                <div className={cx('CartOrderInformationRight_product_item')}>
                                    <button
                                        className={cx('CartOrderInformationRight-close')}
                                        onClick={() => deleteItemCart(item._id)}
                                    >
                                        <IconClose className={cx('CartOrderInformationRight-close-icon')} />
                                    </button>
                                    <div className={cx('CartOrderInformationRight_product_item_img_title')}>
                                        <Link to={Confic.ProductOrderPage} onClick={() => setIdAnProduct(item._id)}>
                                            <div className={cx('CartOrderInformationRight_product_item_imgs')}>
                                                <img
                                                    className={cx('CartOrderInformationRight_product_item_img')}
                                                    src={item.img}
                                                    alt="anh sp"
                                                />
                                            </div>
                                        </Link>
                                        <div className={cx('CartOrderInformationRight_product_item_title')}>
                                            <p className={cx('CartOrderInformationRight_product_item_text')}>
                                                {item.name}
                                            </p>
                                            <p className={cx('CartOrderInformationRight_product_item_text')}>
                                                {item.size}
                                            </p>

                                            <div className={cx('CartOrderInformationRight_quantity')}>
                                                <button
                                                    className={cx('cart-icons')}
                                                    onClick={() => handleRemoveProductCart(item)}
                                                >
                                                    <IconReduce className={cx('cart-icon')} />
                                                </button>
                                                <p className={cx('CartOrderInformationRight_product_item_text')}>
                                                    Qty:{item.count}
                                                </p>
                                                <button
                                                    className={cx('cart-icons')}
                                                    onClick={() => handleAddProductCart(item)}
                                                >
                                                    <IconPlus className={cx('cart-icon')} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className={cx('CartOrderInformationRight_product_item_price')}>
                                            <p className={cx('CartOrderInformationRight_product_price')}>
                                                {item.price.toLocaleString('vi', {
                                                    style: 'currency',
                                                    currency: 'VND',
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={cx('CartOrderInformationRight_promotion')}>
                        <form className={cx('CartOrderInformationRight_from')}>
                            <input
                                className={cx('CartOrderInformationRight_promotion_text')}
                                type="text"
                                placeholder="Nhập mã khuyễn mãi ..."
                            />
                            <button className={cx('CartOrderInformationRight_promotion_button')}>áp dụng</button>
                        </form>
                    </div>
                    <div className={cx('CartOrderInformationRight_orderSumary')}>
                        <div className={cx('CartOrderInformationRight_orderSumary_text_textPrice')}>
                            <span className={cx('CartOrderInformationRight_orderSumary_text')}>Thành tiền</span>
                            <span className={cx('CartOrderInformationRight_orderSumary_textPrice')}>
                                {totalPrice.toLocaleString('vi', {
                                    style: 'currency',
                                    currency: 'VND',
                                })}
                            </span>
                        </div>
                        <div className={cx('CartOrderInformationRight_orderSumary_text_textPrice')}>
                            <span className={cx('CartOrderInformationRight_orderSumary_text')}>Mã giảm giá</span>
                            <span
                                className={cx(
                                    'CartOrderInformationRight_orderSumary_textPrice',
                                    'textPrice_ship_color',
                                )}
                            >
                                0
                            </span>
                        </div>
                        <div className={cx('CartOrderInformationRight_orderSumary_text_textPrice')}>
                            <span className={cx('CartOrderInformationRight_orderSumary_text')}>Phí ship</span>
                            <span className={cx('CartOrderInformationRight_orderSumary_textPrice')}>0</span>
                        </div>
                    </div>
                    <div className={cx('CartOrderInformationRight_total')}>
                        <div className={cx('CartOrderInformationRight_total_price')}>
                            <span className={cx('CartOrderInformationRight_total_text')}>Tổng:</span>
                            <span className={cx('CartOrderInformationRight_total_textPrice')}>
                                {totalPrice.toLocaleString('vi', {
                                    style: 'currency',
                                    currency: 'VND',
                                })}
                            </span>
                        </div>
                        <div className={cx('CartOrderInformationRight_total_subPay')}>
                            <p className={cx('CartOrderInformationRight_total_subPay_text')}>{`(Đã bao gồm VAT)`}</p>
                            <p className={cx('CartOrderInformationRight_total_subPay_text')}>
                                {`(Hoặc) ${(totalPrice / 3).toLocaleString('vi', {
                                    style: 'currency',
                                    currency: 'VND',
                                })} x 3 kỳ`}{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartOrderInformationRight;
