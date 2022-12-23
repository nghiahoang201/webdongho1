import classNames from 'classnames/bind';
import styles from '../ProductInfo/ProductInfoProduct.module.scss';

const cx = classNames.bind(styles);

function ProductInfoProduct(props) {
    const { item } = props;
    return (
        <>
            {item.map((item) => (
                <div className={cx('product-info-inner-contens')}>
                    <div className={cx('product-info-inner-conten')}>
                        <p className={cx('product-info-inner-conten-text')}>{item.desc}</p>
                    </div>
                    <div className={cx('product-info-inner-conten')}>
                        <div className={cx('product-info-inner-boxconten')}>
                            <p className={cx('product-info-inner-boxconten-name')}>Kích thước mặt</p>
                            <p className={cx('product-info-inner-boxconten-value')}>{item.size}</p>
                        </div>
                        <div className={cx('product-info-inner-boxconten')}>
                            <p className={cx('product-info-inner-boxconten-name')}>Độ dày</p>
                            <p className={cx('product-info-inner-boxconten-value')}>{item.doday}</p>
                        </div>
                        <div className={cx('product-info-inner-boxconten')}>
                            <p className={cx('product-info-inner-boxconten-name')}>Màu mặt</p>
                            <p className={cx('product-info-inner-boxconten-value')}>{item.maumat}</p>
                        </div>
                        <div className={cx('product-info-inner-boxconten')}>
                            <p className={cx('product-info-inner-boxconten-name')}>Loại máy</p>
                            <p className={cx('product-info-inner-boxconten-value')}>{item.loaimay}</p>
                        </div>
                        <div className={cx('product-info-inner-boxconten')}>
                            <p className={cx('product-info-inner-boxconten-name')}>Kích cỡ dây</p>
                            <p className={cx('product-info-inner-boxconten-value')}>{item.sizeday}</p>
                        </div>
                        <div className={cx('product-info-inner-boxconten')}>
                            <p className={cx('product-info-inner-boxconten-name')}>Chống nước</p>
                            <p className={cx('product-info-inner-boxconten-value')}>{item.chongnuoc}</p>
                        </div>
                        <div className={cx('product-info-inner-boxconten')}>
                            <p className={cx('product-info-inner-boxconten-name')}>Mặt kính</p>
                            <p className={cx('product-info-inner-boxconten-value')}>{item.matkinh}</p>
                        </div>
                        <div className={cx('product-info-inner-boxconten')}>
                            <p className={cx('product-info-inner-boxconten-name')}>Chất liệu dây</p>
                            <p className={cx('product-info-inner-boxconten-value')}>{item.chatlieuday}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ProductInfoProduct;
