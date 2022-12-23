import classNames from 'classnames/bind';
import styles from '../MenuProperti/MenuProperti.module.scss';
import grid from '../../../GlobalStyles/Grid.module.scss';

const cx = classNames.bind(styles);
const cd = classNames.bind(grid);

function MenuProductSize(props) {
    const { menuSize } = props;
    return (
        <div className={cx('wrapper-MenuProductSize')}>
            <div className={cd('grid', 'wide')}>
                <div className={cx('MenuProductBst-items')}>
                    <div className={cx('MenuProductBst-item')}>
                        {menuSize.map((menusize) => (
                            <button className={cx('MenuProductBst-item-btn')} key={menusize.id}>
                                <div>
                                    <p className={cx('MenuProductBst-size')}>{menusize.size}</p>
                                </div>
                                <p className={cx('MenuProductBst-item-text')}>{menusize.text}</p>
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

export default MenuProductSize;
