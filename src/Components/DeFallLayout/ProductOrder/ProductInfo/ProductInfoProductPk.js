import classNames from 'classnames/bind';
import styles from '../ProductInfo/ProductInfoProduct.module.scss';

const cx = classNames.bind(styles);

function ProductInfoProductPk(props) {
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
                            <p className={cx('product-info-inner-boxconten-name')}>Chất liệu</p>
                            <p className={cx('product-info-inner-boxconten-value')}>{item.chatlieu}</p>
                        </div>
                        <div className={cx('product-info-inner-boxconten')}>
                            <p className={cx('product-info-inner-boxconten-name')}>Màu sắc</p>
                            <p className={cx('product-info-inner-boxconten-value')}>{item.color}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ProductInfoProductPk;
