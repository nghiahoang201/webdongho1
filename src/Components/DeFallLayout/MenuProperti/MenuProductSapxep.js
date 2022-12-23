import classNames from 'classnames/bind';
import styles from '../MenuProperti/MenuProperti.module.scss';

import { useState } from 'react';

const cx = classNames.bind(styles);

function MenuProductSapxep(props) {
    const { menuSX } = props;
    const [option, setOption] = useState('Mặc định');
    const handlClickCheck = (text) => {
        setOption(text);
    };
    return (
        <div className={cx('wrapper-menuSx')}>
            <div className={cx('menuSx-items')}>
                {menuSX.map((menusx) => (
                    <div className={cx('menuSx-item')} key={menusx.id}>
                        <span onClick={() => handlClickCheck(menusx.text)}>{menusx.text}</span>
                        {option && option === menusx.text ? <span>{menusx.check}</span> : null}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MenuProductSapxep;
