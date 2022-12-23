import classNames from 'classnames/bind';
import styles from '../Ship/Ship.module.scss';

import { IconShip1, IconShip2, IconShip3 } from '../../../../../Icons/index';

const cx = classNames.bind(styles);

function Ship() {
    return (
        <div className={cx('body-ships', 'body-shipippro')}>
            <div className={cx('body-ship')}>
                <IconShip1 className={cx('body-ship-icon')} />

                <span className={cx('body-ship-text')}>Freeship đơn hàng >700k</span>
            </div>
            <div className={cx('body-ship')}>
                <IconShip2 className={cx('body-ship-icon')} />

                <span className={cx('body-ship-text')}>Bảo hành 10 năm</span>
            </div>
            <div className={cx('body-ship')}>
                <IconShip3 className={cx('body-ship-icon')} />

                <span className={cx('body-ship-text')}>Đổi trả miễn phí trong vòng 3 ngày</span>
            </div>
        </div>
    );
}

export default Ship;
