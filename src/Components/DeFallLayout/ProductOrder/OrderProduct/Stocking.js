import classNames from 'classnames/bind';
import styles from '../OrderProduct/Stocking.module.scss';

const cx = classNames.bind(styles);

function Stocking() {
    return (
        <div className={cx('wrapper-stocking')}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p className={cx('stocking-dot')}></p>
                        </td>
                        <td>
                            <p className={cx('stocking-address-status')}>Online</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className={cx('stocking-dot')}></p>
                        </td>
                        <td>
                            <a href="/" className={cx('stocking-address-status')}>
                                173C Kim Mã - Hà Nội 📍
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className={cx('stocking-dot')}></p>
                        </td>
                        <td>
                            <a href="/" className={cx('stocking-address-status')}>
                                33 Hàm Long - Hà Nội 📍
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className={cx('stocking-dot')}></p>
                        </td>
                        <td>
                            <a href="/" className={cx('stocking-address-status')}>
                                9 B7 Phạm Ngọc Thạch - Hà Nội 📍
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className={cx('stocking-dot', 'stocking-dot-end')}></p>
                        </td>
                        <td>
                            <a href="/" className={cx('stocking-address-status')}>
                                25 Nguyễn Trãi, Q1 - TP.HCM 📍
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className={cx('stocking-dot')}></p>
                        </td>
                        <td>
                            <a href="/" className={cx('stocking-address-status')}>
                                348 Lê Văn Sỹ, P.14, Quận 3 - TPHCM 📍
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Stocking;
