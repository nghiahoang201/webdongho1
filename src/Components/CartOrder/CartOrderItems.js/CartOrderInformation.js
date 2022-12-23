import classNames from 'classnames/bind';
import styles from '../CartOrderItems.js/CartOrderInformation.module.scss';

import Logo from '../../../img/index';
import { IconRight } from '../../../Icons';
import { useContext, useEffect, useState } from 'react';
import request from '../../../utils/request';
import { ValueContex } from '../../DeFallLayout/DeFallLayout';

const cx = classNames.bind(styles);

function CartOrderInformation() {
    const { productItemCart, setProductItemCart } = useContext(ValueContex);
    const [value, setValue] = useState({
        email: '',
        hoten: '',
        sdt: '',
        address: '',
        ghichu: '',
    });

    // const [confirm, setConfirm] = useState(false);
    const getLocalStorage = JSON.parse(localStorage.getItem('ItemCustomer'));
    const [customer, setCustomer] = useState(() => {
        if (getLocalStorage !== null) {
            return getLocalStorage;
        } else {
            return [];
        }
    });
    // const [fromData, setFromData] = useState([]);

    const hendleSubmit = (e) => {
        // e.preventDefault();
        if (value.email !== '' && value.hoten !== '' && value.sdt !== '' && value.address !== '') {
            request.post('customer', value);
            // .then(() => setConfirm(true));
            console.log(alert('đặt hàng thành công'));
            setProductItemCart([]);
        }
    };

    useEffect(() => {
        request.get('customer').then((res) => setCustomer(res.data));

        const savelocalStorage = (item) => {
            const saveCustomer = JSON.stringify(item);
            localStorage.setItem('ItemCustomer', saveCustomer);
        };

        savelocalStorage(customer);
    }, []);

    useEffect(() => {
        // const cus = customer.map((item) => item._id);
        // const pro = productItemCart.map((item) => item._id);
        // const formData = new FormData();
        // formData.append('CustomerID', cus);
        // formData.append('productID', pro);
        // console.log('id_customer', cus);
        // console.log('id_product', pro);
        // console.log('form', formData);
    }, []);

    // const hendleAddCart = (e) => {
    //     setFromData({...productItemCart, ...customer});
    //     e.preventDefault();
    //     request.post('cart', ...productItemCart);
    // };

    return (
        <div className={cx('waraper')}>
            <div className={cx('CartOrderInformation')}>
                <div className={cx('CartOrderInformation_contentbox')}>
                    <div className={cx('CartOrderInformation_logo')}>
                        <a href="/">
                            <Logo />
                        </a>
                    </div>
                    <h3 className={cx('CartOrderInformation_title')}>Thông tin khách hàng</h3>
                    <form>
                        <div className={cx('CartOrderInformation_from')}>
                            <div className={cx('CartOrderInformation_from_input_email')}>
                                <input
                                    className={cx('CartOrderInformation_from_input')}
                                    name="email"
                                    type="email"
                                    value={value.email}
                                    onChange={(e) => setValue({ ...value, email: e.target.value.trim() })}
                                    placeholder="Email"
                                    required
                                />
                                <label className={cx('lable_thong_bao')} data-empty="*hãy nhập trường này"></label>
                            </div>
                            <div className={cx('CartOrderInformation_from_input_name_sdt')}>
                                <div
                                    className={cx(
                                        'CartOrderInformation_from_input_hotens',
                                        'CartOrderInformation_from_input_hoten',
                                    )}
                                >
                                    <input
                                        className={cx('CartOrderInformation_from_input')}
                                        type="text"
                                        name="hoten"
                                        value={value.hoten}
                                        onChange={(e) => setValue({ ...value, hoten: e.target.value.trim() })}
                                        placeholder="Họ Tên"
                                        required
                                    />
                                    <label className={cx('lable_thong_bao')} data-empty="*hãy nhập trường này"></label>
                                </div>

                                <div className={cx('CartOrderInformation_from_input_sdt')}>
                                    <input
                                        className={cx('CartOrderInformation_from_input')}
                                        type="text"
                                        name="sdt"
                                        value={value.sdt}
                                        onChange={(e) => setValue({ ...value, sdt: e.target.value.trim() })}
                                        placeholder="Số điện thoại"
                                        required
                                    />
                                    <label className={cx('lable_thong_bao')} data-empty="*hãy nhập trường này"></label>
                                </div>
                            </div>
                            <div className={cx('CartOrderInformation_from_input_diachi')}>
                                <input
                                    className={cx('CartOrderInformation_from_input')}
                                    type="text"
                                    name="address"
                                    value={value.address}
                                    onChange={(e) => setValue({ ...value, address: e.target.value.trim() })}
                                    placeholder="Địa chỉ nhận hàng"
                                    required
                                />
                                <label className={cx('lable_thong_bao')} data-empty="*hãy nhập trường này"></label>
                            </div>
                            <div className={cx('CartOrderInformation_from_input_diachi')}>
                                <textarea
                                    className={cx('CartOrderInformation_from_textArea')}
                                    maxLength="400"
                                    name="ghichu"
                                    value={value.ghichu}
                                    onChange={(e) => setValue({ ...value, ghichu: e.target.value })}
                                    placeholder="Nhập ghi chú nếu cần"
                                ></textarea>
                            </div>
                        </div>
                        <div className={cx('CartOrderInformation_text_ship')}>
                            <p className={cx('CartOrderInformation_text')}>
                                {` *Phương thức vận chuyển là `}
                                <span className={cx('CartOrderInformation_text_freeship')}>FREESHIP</span>
                                {` với đơn hàng từ 700.000đ `}
                            </p>
                        </div>
                        <button className={cx('CartOrderInformation_button')} onClick={hendleSubmit} type="submit">
                            <span className={cx('CartOrderInformation_button_text')}>Xác nhận đặt hàng</span>
                            <IconRight />
                        </button>
                        {/* {!confirm ? ( */}
                        {/* // ) : (
                        //     <button className={cx('CartOrderInformation_button')} onClick={hendleAddCart}>
                        //         <span className={cx('CartOrderInformation_button_text')}>Xác nhận đặt hàng</span>
                        //         <IconRight />
                        //     </button>
                        // )} */}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CartOrderInformation;
