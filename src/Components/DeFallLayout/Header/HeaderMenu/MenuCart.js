import classNames from 'classnames/bind';
import styles from '../HeaderMenu/MenuCart.module.scss';
import { IconClose, IconRight } from '../../../../Icons';

import { useContext } from 'react';
import Images from '../../../../img/Images';
import { ValueContex } from '../../DeFallLayout';
import CartItem from '../../../CartItem/CartItem';
import { Link } from 'react-router-dom';
import Confic from '../../../../Confic/Confic';
import { ToastBody } from 'react-bootstrap';

const cx = classNames.bind(styles);

function MenuCart(props) {
    const { productItemCart } = useContext(ValueContex);
    const { hideCart, setHideCart } = props;

    const totalPrice = productItemCart.reduce((price, item) => price + item.count * item.price, 0);

    //day
    const getDate = new Date();
    const getDay = getDate.getDate() + 5;
    const getMonth = getDate.getMonth() + 1;
    const getYear = getDate.getFullYear();
    const date = getDay + '/' + getMonth + '/' + getYear;

    return (
        <div className={cx('header-wrapper-menucart')}>
            <div className={cx('header-cart')}>
                <div className={cx('cart-header')}>
                    <h4 className={cx('cart-header-text')}>giỏ hàng của bạn</h4>
                    <button className={cx('cart-header-icon')} onClick={() => setHideCart(!hideCart)}>
                        <IconClose />
                    </button>
                </div>
                <div className={cx('cart-header-ship')}>
                    <img className={cx('cart-header-ship-icon')} src={Images.imageShip1} alt="anh" />
                    <span className={cx('cart-header-ship-text')}>{'miễn phí vận chuyển đơn hàng > 700k'}</span>
                </div>
                <div className={cx('cart-body')}>
                    {productItemCart &&
                        productItemCart.map((item) => {
                            return <CartItem key={item._id} item={item} />;
                        })}
                </div>

                <div className={cx('cart-footer')}>
                    <div className={cx('cart-footer-total-text-price')}>
                        <span className={cx('cart-footer-total-text')}>Thành tiền:</span>
                        <span className={cx('cart-footer-total-price')}>
                            {totalPrice.toLocaleString('vi', {
                                style: 'currency',
                                currency: 'VND',
                            })}
                        </span>
                    </div>

                    <Link to={Confic.CartOrderPage} className={cx('cart-footer-total-paynow')}>
                        <span className={cx('cart-footer-total-paynow-text')}>thanh toán ngay</span>
                        <IconRight className={cx('cart-footer-total-paynow-icon')} />
                    </Link>

                    <div className={cx('cart-footer-timeship-text-dmy')}>
                        <span className={cx('cart-footer-timeship-text')}>*Ước tính thời gian ship:</span>
                        <span className={cx('cart-footer-timeship-dmy')}>{date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuCart;
