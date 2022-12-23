import classNames from 'classnames/bind';
import styles from '../MenuProperti/MenuProperti.module.scss';
import grid from '../../../GlobalStyles/Grid.module.scss';

// import Images from '../../../img/Images';

const cx = classNames.bind(styles);
const cd = classNames.bind(grid);

function MenuProductClday(props) {
    const { menuDayDh } = props;
    return (
        <div className={cx('wrapper-MenuProductClday')}>
            <div className={cd('grid', 'wide')}>
                <div className={cx('MenuProductBst-items')}>
                    <div className={cx('MenuProductBst-item')}>
                        {menuDayDh.map((menudaydh) => (
                            <button className={cx('MenuProductBst-item-btn')} key={menudaydh.id}>
                                <div>
                                    <img
                                        className={cx('MenuProductBst-item-clday')}
                                        src={menudaydh.imgDay}
                                        alt={menudaydh.alt}
                                    />
                                </div>
                                <p className={cx('MenuProductBst-item-text')}>{menudaydh.text}</p>
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

export default MenuProductClday;
