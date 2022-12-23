import classNames from 'classnames/bind';
import { useEffect } from 'react';
import styles from '../CartOrder/CartOrder.module.scss';

import CartOrderInformation from './CartOrderItems.js/CartOrderInformation';
import CartOrderInformationRight from './CartOrderItems.js/CartOrderInformationRight';

const cx = classNames.bind(styles);

function CartOrder() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('waraper')}>
            <CartOrderInformation />;
            <CartOrderInformationRight />
        </div>
    );
}

export default CartOrder;
