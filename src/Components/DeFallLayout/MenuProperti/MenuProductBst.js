import classNames from 'classnames/bind';
import styles from '../MenuProperti/MenuProperti.module.scss';
import grid from '../../../GlobalStyles/Grid.module.scss';

const cx = classNames.bind(styles);
const cd = classNames.bind(grid);

function MenuProductBst(props) {
    const { menuBst, setMenuBst, menuListBst } = props;

    const closeMenu = () => {
        setMenuBst(!menuBst);
    };
    return (
        <div className={cx('wrapper-MenuProductBst')}>
            <div className={cd('grid', 'wide')}>
                <div className={cx('MenuProductBst-items')} onBlur={closeMenu}>
                    <div className={cx('MenuProductBst-item')}>
                        {menuListBst.map((imgTransperent) => (
                            <button className={cx('MenuProductBst-item-btn')} key={imgTransperent.id}>
                                <div>
                                    <img
                                        className={cx('MenuProductBst-item-img')}
                                        src={imgTransperent.imgTransperent}
                                        alt={imgTransperent.alt}
                                    />
                                </div>
                                <p className={cx('MenuProductBst-item-text')}>{imgTransperent.text}</p>
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

export default MenuProductBst;
