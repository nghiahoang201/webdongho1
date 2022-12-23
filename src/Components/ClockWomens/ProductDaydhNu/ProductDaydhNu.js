import classNames from 'classnames/bind';
import styles from '../ProductDaydhNu/ProductDaydhNu.module.scss';
import grid from '../../../GlobalStyles/Grid.module.scss';

import Images from '../../../img/Images';
import { IconMenuDown } from '../../../Icons/index';
import ListProductRopeAll from '../../DeFallLayout/ListProductAll/ListProductRope/ListProductRopeAll';
import { useContext, useEffect, useState } from 'react';
import MenuProductBst from '../../DeFallLayout/MenuProperti/MenuProductBst';
import MenuProductSapxep from '../../DeFallLayout/MenuProperti/MenuProductSapxep';
import MenuProductClday from '../../DeFallLayout/MenuProperti/MenuProductClday';
import { IconCheck } from '../../../Icons/index';
import { ValueContex } from '../../DeFallLayout/DeFallLayout';

const cx = classNames.bind(styles);
const cd = classNames.bind(grid);

const LIST_PRODUCTALL = [
    {
        id: 1,
        sellers: '15%',
        img: Images.imageProductDayNu1,
        textType: 'Hamilton - 14mm',
        textName: 'Dây da Brown',
        price: 449000,
        newPrice: 381000,
    },
    {
        id: 2,
        sellers: '15%',
        img: Images.imageProductDayNu2,
        textType: 'Hamilton - 14mm',
        textName: 'Dây da Sea',
        price: 449000,
        newPrice: 381000,
    },
    {
        id: 3,
        img: Images.imageProductDayNu3,
        textType: 'Moraine - 14mm',
        textName: 'Dây thép',
        newPrice: 699000,
    },
    {
        id: 4,
        img: Images.imageProductDayNu4,
        textType: 'Moraine - 12mm',
        textName: 'Dây da Ash',
        newPrice: 449000,
    },
    {
        id: 5,
        img: Images.imageProductDayNu5,
        textType: 'Melissani - 14mm',
        textName: 'Dây da Black',
        newPrice: 449000,
    },
    {
        id: 6,
        img: Images.imageProductDayNu6,
        textType: 'Moraine - 12mm',
        textName: 'Dây kim loại',
        newPrice: 499000,
    },
    {
        id: 7,
        img: Images.imageProductDayNu7,
        textName: 'Dây kim loại',
        newPrice: 499000,
    },
    {
        id: 8,
        img: Images.imageProductDayNu8,
        textType: 'Melissani - 14mm',
        textName: 'Dây da Ice',
        newPrice: 449000,
    },
];
const MENUBST_DAYDHNU = [
    { id: 1, imgTransperent: Images.imageTransparent10, alt: 'anh sp', text: ' Dây Hamilton ' },
    { id: 2, imgTransperent: Images.imageTransparent8, alt: 'anh sp', text: ' Dây Melissani ' },
    { id: 3, imgTransperent: Images.imageTransparent9, alt: 'anh sp', text: ' Dây Moraine ' },
];
const MENUDAYDH_DAYDHNU = [
    { id: 1, imgDay: Images.imageDay1, text: 'Dây da Genuine', alt: 'anh daydh' },
    { id: 2, imgDay: Images.imageDay2, text: 'Dây kim loại', alt: 'anh daydh' },
    { id: 3, imgDay: Images.imageDay3, text: 'Dây thép không gỉ', alt: 'anh daydh' },
];
const MENUSX = [
    { id: 1, text: 'Mặc định', check: <IconCheck /> },
    { id: 2, text: 'Giá tăng dần', check: <IconCheck /> },
    { id: 3, text: 'Giá giảm dần', check: <IconCheck /> },
];

function ProductDaydhNu() {
    const [menuBst, setMenuBst] = useState(false);
    const [menuColor, setMenuColor] = useState(false);
    const [menuSx, setMenuSx] = useState(false);
    const { productRopeWomen } = useContext(ValueContex);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper-productDaydhNu')}>
            <div className={cx('productDaydhNu-bannercategory')}>
                <img
                    className={cx('productDaydhNu-category-img')}
                    src={Images.imageProductDaydhNu}
                    alt="anh ProductDaydhNu"
                />
            </div>
            <div className={cd('grid', 'wide')}>
                <div className={cx('productDaydhNu-category')}>
                    <h4 className={cx('productDaydhNu-titleCategory')}>Dây đồng hồ nữ</h4>
                    <div className={cx('productDaydhNu-categoryboxsub')}>
                        <div className={cx('productDaydhNu-categoryDesc')}>
                            <p>
                                Giúp những cô gái hiện đại không còn đau đầu khi phải mix&match chiếc Đồng hồ với các
                                trang phục khác nhau mỗi ngày. Curnon đem đến thiết kế, màu sắc và chất liệu dây đồng hồ
                                đa dạng và quan trọng là dễ dàng tháo lắp trong vòng 30 giây.
                            </p>
                        </div>
                        <div className={cx('productDaydhNu-categorytotal')}>
                            <p>{LIST_PRODUCTALL.length} trên 8 sản phẩm</p>
                        </div>
                    </div>
                    <div className={cx('productDaydhNu-category-collectionDesktop')}>
                        <div className={cx('productDaydhNu-category-collection')}>
                            <div className={cx('productDaydhNu-category-collection-boxLeft')}>
                                <div className={cx('productDaydhNu-category-collection-leftConten')}>
                                    <button
                                        className={cx('productDaydhNu-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuBst(!menuBst)}
                                    >
                                        <span>BỘ SƯU TẬP</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productDaydhNu-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuBst
                                                        ? 'productDaydhNu-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>

                                    {menuBst ? (
                                        <MenuProductBst
                                            menuListBst={MENUBST_DAYDHNU}
                                            menuBst={menuBst}
                                            setMenuBst={setMenuBst}
                                        />
                                    ) : null}
                                </div>

                                <div className={cx('productDaydhNu-category-collection-leftConten')}>
                                    <button
                                        className={cx('productDaydhNu-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuColor(!menuColor)}
                                    >
                                        <span>Chất liệu dây</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productDaydhNu-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuColor
                                                        ? 'productDaydhNu-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuColor ? <MenuProductClday menuDayDh={MENUDAYDH_DAYDHNU} /> : null}
                                </div>
                            </div>
                            <div className={cx('productDaydhNu-category-collection-boxRight')}>
                                <div className={cx('productDaydhNu-category-collection-RightConten')}>
                                    <button
                                        className={cx('productDaydhNu-category-collection-RightConten-btnMenu')}
                                        onClick={() => setMenuSx(!menuSx)}
                                    >
                                        <span>SẮP XẾP THEO</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productDaydhNu-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuSx
                                                        ? 'productDaydhNu-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuSx ? <MenuProductSapxep menuSX={MENUSX} /> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                    <ListProductRopeAll productItem={productRopeWomen} />
                </div>
            </div>
        </div>
    );
}

export default ProductDaydhNu;
