import classNames from 'classnames/bind';
import styles from '../MenuProperti/MenuProperti.module.scss';
import grid from '../../../GlobalStyles/Grid.module.scss';

const cx = classNames.bind(styles);
const cd = classNames.bind(grid);

function MenuProductColor(props) {
    const { menuColor } = props;
    return (
        <div className={cx('wrapper-MenuProductColor')}>
            <div className={cd('grid', 'wide')}>
                <div className={cx('MenuProductBst-items')}>
                    <div className={cx('MenuProductBst-item')}>
                        {menuColor.map((menucolor) => (
                            <button className={cx('MenuProductBst-item-btn')} key={menucolor.id}>
                                <div>
                                    <img
                                        className={cx('MenuProductBst-item-color')}
                                        src={menucolor.imgcolor}
                                        alt={menucolor.alt}
                                    />
                                </div>
                                <p className={cx('MenuProductBst-item-text')}>{menucolor.text}</p>
                            </button>
                        ))}
                    </div>
                    <div className={cx('MenuFilter-Desktop')}>
                        <p className={cx('MenuFilter-Desktop-check')}>
                            <span>
                                <input type="checkbox" />
                            </span>
                            Ẩn sản phẩm hết hàng
                        </p>
                        <p className={cx('MenuFilter-Desktop-text')}>12 sản phẩm phù hợp</p>
                        <button className={cx('MenuFilter-Desktop-btn')}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuProductColor;
