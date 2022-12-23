import classNames from 'classnames/bind';
import styles from '../ProductInfo/ProductInfoShip.module.scss';

const cx = classNames.bind(styles);

function ProductInfoShip() {
    return (
        <div className={cx('product-info-inner-contens')}>
            <div className={cx('product-info-inner-conten')}>
                <p className={cx('product-info-inner-conten-text')}> Phí vận chuyển:</p>
                <div className={cx('product-info-inner-contenli')}>
                    <p>
                        <span>- MIỄN PHÍ VẬN CHUYỂN</span> với đơn hàng từ 700,000đ trở lên
                    </p>
                    <p>
                        <span>- 30,000đ</span> với đơn hàng có giá trị thấp hơn 700,000đ
                    </p>
                </div>
            </div>
            <div className={cx('product-info-inner-conten')}>
                <p className={cx('product-info-inner-conten-text')}> Thời gian vận chuyển:</p>
                <div className={cx('product-info-inner-contenli')}>
                    <p>- Nội thành Hà Nội: 1-2 ngày</p>
                    <p>- Miền Trung: 3-5 ngày</p>
                    <p>- Miền Nam: 5-7 ngày</p>
                </div>
            </div>
        </div>
    );
}

export default ProductInfoShip;
