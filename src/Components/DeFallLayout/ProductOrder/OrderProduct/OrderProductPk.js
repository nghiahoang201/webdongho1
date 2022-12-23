import classNames from 'classnames/bind';
import styles from '../OrderProduct/OrderProduct.module.scss';

import Images from '../../../../img/Images';
import { useContext, useState } from 'react';
import { IconStar } from '../../../../Icons/index';
import Stocking from './Stocking';
// import WristSize from './WristSize';
// import Carousel from 'react-bootstrap/Carousel';
import { ValueContex } from '../../DeFallLayout';

const cx = classNames.bind(styles);
const IMG_ORDER = [Images.imageSp4, Images.imageSp4a, Images.imageSp4b];
// const PRODUCT_VONG = [
//     {
//         id: 1,
//         img: Images.imageVongnnu1,
//         alt: 'anh vong tay',
//         text: 'Celia Silver',
//         newPrice: '399.000 ₫ ',
//         price: '319.200 ₫ ',
//     },
//     {
//         id: 2,
//         img: Images.imageVongnam3,
//         alt: 'anh vong tay',
//         text: 'Jackie Rosegold',
//         newPrice: '299.000 ₫ ',
//         price: '239.200 ₫ ',
//     },
//     {
//         id: 3,
//         img: Images.imageVongnam2,
//         alt: 'anh vong tay',
//         text: 'Jackie Silver',
//         newPrice: '299.000 ₫ ',
//         price: '239.200 ₫ ',
//     },
//     {
//         id: 4,
//         img: Images.imageVongnnu4,
//         alt: 'anh vong tay',
//         text: 'Celia Rosegold',
//         newPrice: '399.000 ₫ ',
//         price: '319.200 ₫ ',
//     },
//     {
//         id: 5,
//         img: Images.imageVongnam5,
//         alt: 'anh vong tay',
//         text: 'Doris Rosegold',
//         newPrice: '399.000 ₫ ',
//         price: '319.200 ₫ ',
//     },
// ];

function OrderProductPk(props) {
    const { item } = props;
    const [idImg, setIdImg] = useState(IMG_ORDER[0]);
    const [openStocking, setOpenStocking] = useState(false);
    const [openWristSize, setOpenWristSize] = useState(false);
    const [indexImg, setIndexImg] = useState(0);
    const { allProduct } = useContext(ValueContex);

    const ClickImg = (img, id) => {
        setIdImg(img);
        setIndexImg(id);
    };
    return (
        <div className={cx('warpper-orderProduct')}>
            <div className={cx('orderProduct-items')}>
                <div className={cx('orderProduct-itemProducts')}>
                    {item.map((imgOrder) => (
                        <div className={cx('orderProduct-itemProduct')} key={imgOrder.id}>
                            <div className={cx('orderProduct-itemProduct-imgs')}>
                                <div
                                    className={cx('orderProduct-itemProduct-img1s')}
                                    onClick={() => ClickImg(imgOrder, imgOrder.id)}
                                >
                                    <img
                                        className={cx(
                                            'orderProduct-itemProduct-img',
                                            `${
                                                indexImg && indexImg === imgOrder.id
                                                    ? 'orderProduct-itemProduct-img1s-border'
                                                    : null
                                            }`,
                                        )}
                                        src={imgOrder.img}
                                        alt="anh sp"
                                    />
                                </div>
                            </div>
                            <div className={cx('orderProduct-itemProduct-actives')}>
                                <div className={cx('orderProduct-itemProduct-active')}>
                                    <img
                                        className={cx('orderProduct-itemProduct-active-img')}
                                        src={imgOrder.img}
                                        alt="anh sp"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* order-phải */}

                <div className={cx('orderProduct-itemConten-products')}>
                    {item.map((item) => (
                        <div>
                            <div>
                                <p className={cx('orderProduct-itemConten-products-title')}>{item.brand}</p>
                            </div>
                            <div>
                                <h3 className={cx('orderProduct-itemConten-products-name')}>{item.name}</h3>
                            </div>
                            <div className={cx('orderProduct-itemConten-products-price-star')}>
                                <div className={cx('orderProduct-itemConten-products-prices')}>
                                    <p className={cx('orderProduct-itemConten-products-price')}>
                                        {item.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                                    </p>

                                    {item.priceSell ? (
                                        <p className={cx('orderProduct-itemConten-products-newprice')}>
                                            {item.priceSell.toLocaleString('vi', {
                                                style: 'currency',
                                                currency: 'VND',
                                            })}
                                        </p>
                                    ) : null}
                                </div>
                                <div className={cx('orderProduct-itemConten-products-star')}>
                                    <span className={cx('iconStar')}>
                                        <IconStar className={cx('iconStar')} />
                                        <IconStar className={cx('iconStar')} />
                                        <IconStar className={cx('iconStar')} />
                                        <IconStar className={cx('iconStar')} />
                                        <IconStar className={cx('iconStar')} />
                                    </span>
                                    <span className={cx('orderProduct-itemConten-products-quatity')}>(10)</span>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className={cx('orderProduct-itemConten-products-texts')}>
                        <p className={cx('orderProduct-itemConten-products-text')}>
                            hoặc 766.000 ₫ với <span>Fundiin</span>
                        </p>
                    </div>
                    <div className={cx('orderProduct-itemConten-products-stocking-size')}>
                        <div className={cx('orderProduct-itemConten-products-stocking')}>
                            <button onClick={() => setOpenStocking(!openStocking)}>
                                Tình trạng: <span>Còn hàng</span>
                            </button>
                            {openStocking ? <Stocking /> : null}
                        </div>
                    </div>

                    <div className={cx('orderProduct-itemConten-btnpay-addcart')}>
                        <button className={cx('orderProduct-itemConten-btnpay')}>THANH TOÁN NGAY</button>
                        <button className={cx('orderProduct-itemConten-addcart')}>THÊM VÀO GIỎ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderProductPk;
