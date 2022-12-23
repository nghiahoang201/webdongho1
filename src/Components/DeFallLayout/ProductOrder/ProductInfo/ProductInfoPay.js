import classNames from 'classnames/bind';
import styles from '../ProductInfo/ProductInfoPay.module.scss';

import Images from '../../../../img/Images';

const cx = classNames.bind(styles);

function ProductInfoPay() {
    return (
        <div className={cx('product-info-inner-contens')}>
            <div className={cx('product-info-inner-conten')}>
                <p className={cx('product-info-inner-conten-text')}> Curnon chấp nhận các hình thức thanh toán sau: </p>
                <p className={cx('product-info-inner-conten-text-bol')}>
                    Trả tiền mặt khi nhận hàng, Ví điện tử Momo, Ví điện tử VNPay, Trả góp theo kỳ hạn qua Fundiin
                </p>
                <div className={cx('product-info-inner-contenPay')}>
                    <img src={Images.imagepay1} alt="anh thanh toan" />
                    <img src={Images.imagepay2} alt="anh thanh toan" />
                </div>
            </div>
            <div className={cx('product-info-inner-conten')}>
                <p className={cx('product-info-inner-conten-text-bol')}>Hoặc chuyển khoản ngân hàng qua tài khoản:</p>
                <div className={cx('product-info-inner-contenli')}>
                    <p>Số tài khoản: 0047041024767</p>
                    <p>Chủ tài khoản: CTCP Phát triển Sản phẩm Sáng Tạo Việt</p>
                    <p>Tên ngân hàng: Bản Việt (Viet Capital)</p>
                    <p>Chi nhánh: Hà Nội</p>
                </div>
            </div>
        </div>
    );
}

export default ProductInfoPay;
