import classNames from 'classnames/bind';
import styles from '../ProductFileNuBestSellers/ProductFileNuBestSellers.module.scss';
import grid from '../../../GlobalStyles/Grid.module.scss';

import Images from '../../../img/Images';
import { IconMenuDown } from '../../../Icons/index';
import ListProductAll from '../../DeFallLayout/ListProductAll/ListProductAll';
import { useContext, useEffect, useState } from 'react';
import MenuProductBst from '../../DeFallLayout/MenuProperti/MenuProductBst';
import MenuProductSize from '../../DeFallLayout/MenuProperti/MenuProductSize';
import MenuProductSapxep from '../../DeFallLayout/MenuProperti/MenuProductSapxep';
import MenuProductClday from '../../DeFallLayout/MenuProperti/MenuProductClday';
import MenuProductColor from '../../DeFallLayout/MenuProperti/MenuProductColor';
import { IconCheck } from '../../../Icons/index';
import { ValueContex } from '../../DeFallLayout/DeFallLayout';

const cx = classNames.bind(styles);
const cd = classNames.bind(grid);

const LIST_PRODUCTNUALL = [
    {
        id: 1,
        sellers: '5%',
        img: Images.imageSpnu5,
        textType: 'Hamilton',
        textName: 'Sylvia',
        newPrice: 1919000,
        price: 2399000,
    },
    {
        id: 2,
        sellers: '5%',
        img: Images.imageSpnu6,
        textType: 'Hamilton',
        textName: 'Cora',
        newPrice: 2039000,
        price: 2399000,
    },
    {
        id: 3,
        sellers: '5%',
        img: Images.imageSpnu7,
        textType: 'Hamilton',
        textName: 'Loretta',
        newPrice: 2039000,
        price: 2399000,
    },
    {
        id: 4,
        sellers: '5%',
        img: Images.imageSpnu8,
        textType: 'Hamilton',
        textName: 'Lydia',
        newPrice: 1954000,
        price: 2299000,
    },
    {
        id: 5,
        img: Images.imageSpnu9,
        textType: 'Moraine',
        textName: 'Charm',
        newPrice: 2399000,
    },
    {
        id: 6,
        img: Images.imageSpnu10,
        textType: 'Melissani',
        textName: 'Wind',
        newPrice: 2399000,
    },
    {
        id: 7,
        img: Images.imageSpnu11,
        textType: 'Moraine',
        textName: 'Tear',
        newPrice: 2399000,
    },
    {
        id: 8,
        img: Images.imageSpnu12,
        textType: 'Moraine',
        textName: 'Desire',
        newPrice: 2399000,
    },
];
const MENUBST_NU_BESTSELLERSNU = [
    { id: 1, imgTransperent: Images.imageTransparent10, alt: 'anh sp', text: ' Hamilton ' },
    { id: 2, imgTransperent: Images.imageTransparent8, alt: 'anh sp', text: ' Melissani ' },
    { id: 3, imgTransperent: Images.imageTransparent9, alt: 'anh sp', text: ' Moraine ' },
];
const MENUDAYDH_NU_BESTSELLERSNU = [
    { id: 1, imgDay: Images.imageDay1, text: 'Dây da Genuine', alt: 'anh daydh' },
    { id: 2, imgDay: Images.imageDay2, text: 'Dây kim loại', alt: 'anh daydh' },
    { id: 3, imgDay: Images.imageDay3, text: 'Dây thép không gỉ', alt: 'anh daydh' },
];
const MENUCOLOR_NU_BESTSELLERSNU = [
    { id: 1, imgcolor: Images.imageColor1, text: 'Silver', alt: 'anh mau' },
    { id: 2, imgcolor: Images.imageColor2, text: 'Rosegold', alt: 'anh mau' },
    { id: 3, imgcolor: Images.imageColor3, text: 'Black', alt: 'anh mau' },
    { id: 4, imgcolor: Images.imageColor4, text: 'Navy', alt: 'anh mau' },
    { id: 5, imgcolor: Images.imageColor9, text: 'pink', alt: 'anh mau' },
];
const MENUSIZE_NU_BESTSELLERSNU = [
    { id: 1, size: '28', text: '28mm' },
    { id: 2, size: '30', text: '30mm' },
    { id: 3, size: '32', text: '32mm' },
];
const MENUSX = [
    { id: 1, text: 'Mặc định', check: <IconCheck /> },
    { id: 2, text: 'Giá tăng dần', check: <IconCheck /> },
    { id: 3, text: 'Giá giảm dần', check: <IconCheck /> },
];
function ProductFileNu() {
    const [menuBst, setMenuBst] = useState(false);
    const [menuSize, setMenuSize] = useState(false);
    const [menuColor, setMenuColor] = useState(false);
    const [menuDaydh, setMenuDaydh] = useState(false);
    const [menuSx, setMenuSx] = useState(false);
    const { productNu } = useContext(ValueContex);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper-productFileNu')}>
            <div className={cx('productFileNu-bannercategory')}>
                <img
                    className={cx('productFileNu-category-img')}
                    src={Images.imageProductFileNuBestSellers}
                    alt="anh ProductFileNu-BestSellers"
                />
            </div>
            <div className={cd('grid', 'wide')}>
                <div className={cx('productFileNu-category')}>
                    <h4 className={cx('productFileNu-titleCategory')}>Women's Best Sellers</h4>
                    <div className={cx('productFileNu-categoryboxsub')}>
                        <div className={cx('productFileNu-categoryDesc')}>
                            <p>
                                Những mẫu đồng hồ nữ được yêu thích nhất bởi các cô gái hiện đại của Curnon. Hãy lựa
                                chọn sản phẩm của riêng bạn trước khi quá muộn.
                            </p>
                        </div>
                        <div className={cx('productFileNu-categorytotal')}>
                            <p>{LIST_PRODUCTNUALL.length} trên 12 sản phẩm</p>
                        </div>
                    </div>
                    <div className={cx('productFileNu-category-collectionDesktop')}>
                        <div className={cx('productFileNu-category-collection')}>
                            <div className={cx('productFileNu-category-collection-boxLeft')}>
                                <div className={cx('productFileNu-category-collection-leftConten')}>
                                    <button
                                        className={cx('productFileNu-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuBst(!menuBst)}
                                    >
                                        <span>BỘ SƯU TẬP</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productFileNu-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuBst
                                                        ? 'productFileNu-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>

                                    {menuBst ? (
                                        <MenuProductBst
                                            menuListBst={MENUBST_NU_BESTSELLERSNU}
                                            menuBst={menuBst}
                                            setMenuBst={setMenuBst}
                                        />
                                    ) : null}
                                </div>
                                <div className={cx('productFileNu-category-collection-leftConten')}>
                                    <button
                                        className={cx('productFileNu-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuSize(!menuSize)}
                                    >
                                        <span>SIZE</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productFileNu-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuSize
                                                        ? 'productFileNu-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuSize ? <MenuProductSize menuSize={MENUSIZE_NU_BESTSELLERSNU} /> : null}
                                </div>
                                <div className={cx('productFileNu-category-collection-leftConten')}>
                                    <button
                                        className={cx('productFileNu-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuColor(!menuColor)}
                                    >
                                        <span>MÀU SẮC</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productFileNu-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuColor
                                                        ? 'productFileNu-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuColor ? <MenuProductColor menuColor={MENUCOLOR_NU_BESTSELLERSNU} /> : null}
                                </div>
                                <div className={cx('productFileNu-category-collection-leftConten')}>
                                    <button
                                        className={cx('productFileNu-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuDaydh(!menuDaydh)}
                                    >
                                        <span>CHẤT LIỆU DÂY</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productFileNu-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuDaydh
                                                        ? 'productFileNu-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuDaydh ? <MenuProductClday menuDayDh={MENUDAYDH_NU_BESTSELLERSNU} /> : null}
                                </div>
                            </div>
                            <div className={cx('productFileNu-category-collection-boxRight')}>
                                <div className={cx('productFileNu-category-collection-RightConten')}>
                                    <button
                                        className={cx('productFileNu-category-collection-RightConten-btnMenu')}
                                        onClick={() => setMenuSx(!menuSx)}
                                    >
                                        <span>SẮP XẾP THEO</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productFileNu-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuSx
                                                        ? 'productFileNu-category-collection-leftConten-btnMenu-icon1'
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
                    <ListProductAll productItem={productNu} />
                </div>
            </div>
        </div>
    );
}

export default ProductFileNu;
