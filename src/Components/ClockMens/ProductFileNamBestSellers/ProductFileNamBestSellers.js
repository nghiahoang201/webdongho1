import classNames from 'classnames/bind';
import styles from '../ProductFileNamBestSellers/ProductFileNamBestSellers.module.scss';
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

const LIST_PRODUCTALL = [
    {
        id: 1,
        img: Images.imageSp1,
        textType: 'Kashmir',
        textName: 'Gallant',
        newPrice: 1954000,
        price: 2299000,
    },
    {
        id: 2,
        sellers: '15%',
        img: Images.imageSp2,
        textType: 'Kashmir',
        textName: 'Rise',
        newPrice: 2039000,
        price: 2399000,
    },
    {
        id: 3,
        sellers: '15%',
        img: Images.imageSp3,
        textType: 'Kashmir',
        textName: 'Swank',
        newPrice: 2039000,
        price: 2399000,
    },
    {
        id: 4,
        sellers: '10%',
        img: Images.imageSp4,
        textType: 'Kashmir',
        textName: 'Rebel',
        newPrice: 1839000,
        price: 2299000,
    },
    {
        id: 5,
        sellers: '10%',
        img: Images.imageSp11,
        textType: 'Kashmir',
        textName: 'Rebel',
        newPrice: 1839000,
        price: 2299000,
    },
    {
        id: 6,
        sellers: '15%',
        img: Images.imageSp12,
        textType: 'Kashmir',
        textName: 'Rebel',
        newPrice: 1839000,
        price: 2299000,
    },
    {
        id: 7,
        sellers: '5%',
        img: Images.imageSp13,
        textType: 'Kashmir',
        textName: 'Rebel',
        newPrice: 1839000,
        price: 2299000,
    },
    {
        id: 8,
        sellers: '10%',
        img: Images.imageSp14,
        textType: 'Kashmir',
        textName: 'Rebel',
        newPrice: 1839000,
        price: 2299000,
    },
];
const MENUDAYDH_BesSellers = [
    { id: 1, imgDay: Images.imageDay1, text: 'D??y da Genuine', alt: 'anh daydh' },
    { id: 2, imgDay: Images.imageDay2, text: 'D??y kim lo???i', alt: 'anh daydh' },
    { id: 3, imgDay: Images.imageDay3, text: 'D??y th??p kh??ng g???', alt: 'anh daydh' },
];
const MENUCOLOR_BesSellers = [
    { id: 1, imgcolor: Images.imageColor1, text: 'Silver', alt: 'anh mau' },
    { id: 2, imgcolor: Images.imageColor2, text: 'Rosegold', alt: 'anh mau' },
    { id: 3, imgcolor: Images.imageColor3, text: 'Black', alt: 'anh mau' },
    { id: 4, imgcolor: Images.imageColor4, text: 'Navy', alt: 'anh mau' },
    { id: 5, imgcolor: Images.imageColor5, text: 'Grey', alt: 'anh mau' },
    { id: 6, imgcolor: Images.imageColor6, text: 'Brown', alt: 'anh mau' },
    { id: 7, imgcolor: Images.imageColor7, text: 'Coffee', alt: 'anh mau' },
    { id: 8, imgcolor: Images.imageColor8, text: 'Sand', alt: 'anh mau' },
];
const MENUBST_BESSELLERS = [
    { id: 1, imgTransperent: Images.imageTransparent2, alt: 'anh sp', text: ' Kashmir ' },
    { id: 2, imgTransperent: Images.imageTransparent5, alt: 'anh sp', text: ' Detroit ' },
];
const MENUSIZE_BESSELLERS = [
    { id: 1, size: '40', text: '40mm' },
    { id: 2, size: '42', text: '42mm' },
    { id: 3, size: '38', text: '38mm' },
];

const MENUSX = [
    { id: 1, text: 'M???c ?????nh', check: <IconCheck /> },
    { id: 2, text: 'Gi?? t??ng d???n', check: <IconCheck /> },
    { id: 3, text: 'Gi?? gi???m d???n', check: <IconCheck /> },
];

function ProductFileNamBestSellers() {
    const [menuBst, setMenuBst] = useState(false);
    const [menuSize, setMenuSize] = useState(false);
    const [menuColor, setMenuColor] = useState(false);
    const [menuDaydh, setMenuDaydh] = useState(false);
    const [menuSx, setMenuSx] = useState(false);
    const { productNam } = useContext(ValueContex);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper-productFileNamBestSellers')}>
            <div className={cx('productFileNamBestSellers-bannercategory')}>
                <img
                    className={cx('productFileNamBestSellers-category-img')}
                    src={Images.imageProductFileNameBestSellers}
                    alt="anh ProductFileNamBestSellers"
                />
            </div>
            <div className={cd('grid', 'wide')}>
                <div className={cx('productFileNamBestSellers-category')}>
                    <h4 className={cx('productFileNamBestSellers-titleCategory')}>Men's Best Sellers</h4>
                    <div className={cx('productFileNamBestSellers-categoryboxsub')}>
                        <div className={cx('productFileNamBestSellers-categoryDesc')}>
                            <p>
                                Nh???ng m???u ?????ng h??? nam ???????c y??u th??ch v?? s??n l??ng nhi???u nh???t c???a Curnon. H??y l???a ch???n s???n
                                ph???m b???n y??u th??ch tr?????c khi qu?? mu???n.
                            </p>
                        </div>
                        <div className={cx('productFileNamBestSellers-categorytotal')}>
                            <p>{LIST_PRODUCTALL.length} tr??n 12 s???n ph???m</p>
                        </div>
                    </div>
                    <div className={cx('productFileNamBestSellers-category-collectionDesktop')}>
                        <div className={cx('productFileNamBestSellers-category-collection')}>
                            <div className={cx('productFileNamBestSellers-category-collection-boxLeft')}>
                                <div className={cx('productFileNamBestSellers-category-collection-leftConten')}>
                                    <button
                                        className={cx(
                                            'productFileNamBestSellers-category-collection-leftConten-btnMenu',
                                        )}
                                        onClick={() => setMenuBst(!menuBst)}
                                    >
                                        <span>B??? S??U T???P</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productFileNamBestSellers-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuBst
                                                        ? 'productFileNamBestSellers-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>

                                    {menuBst ? (
                                        <MenuProductBst
                                            menuListBst={MENUBST_BESSELLERS}
                                            menuBst={menuBst}
                                            setMenuBst={setMenuBst}
                                        />
                                    ) : null}
                                </div>
                                <div className={cx('productFileNamBestSellers-category-collection-leftConten')}>
                                    <button
                                        className={cx(
                                            'productFileNamBestSellers-category-collection-leftConten-btnMenu',
                                        )}
                                        onClick={() => setMenuSize(!menuSize)}
                                    >
                                        <span>SIZE</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productFileNamBestSellers-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuSize
                                                        ? 'productFileNamBestSellers-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuSize ? <MenuProductSize menuSize={MENUSIZE_BESSELLERS} /> : null}
                                </div>
                                <div className={cx('productFileNamBestSellers-category-collection-leftConten')}>
                                    <button
                                        className={cx(
                                            'productFileNamBestSellers-category-collection-leftConten-btnMenu',
                                        )}
                                        onClick={() => setMenuColor(!menuColor)}
                                    >
                                        <span>M??U S???C</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productFileNamBestSellers-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuColor
                                                        ? 'productFileNamBestSellers-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuColor ? <MenuProductColor menuColor={MENUCOLOR_BesSellers} /> : null}
                                </div>
                                <div className={cx('productFileNamBestSellers-category-collection-leftConten')}>
                                    <button
                                        className={cx(
                                            'productFileNamBestSellers-category-collection-leftConten-btnMenu',
                                        )}
                                        onClick={() => setMenuDaydh(!menuDaydh)}
                                    >
                                        <span>CH???T LI???U D??Y</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productFileNamBestSellers-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuDaydh
                                                        ? 'productFileNamBestSellers-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuDaydh ? <MenuProductClday menuDayDh={MENUDAYDH_BesSellers} /> : null}
                                </div>
                            </div>
                            <div className={cx('productFileNamBestSellers-category-collection-boxRight')}>
                                <div className={cx('productFileNamBestSellers-category-collection-RightConten')}>
                                    <button
                                        className={cx(
                                            'productFileNamBestSellers-category-collection-RightConten-btnMenu',
                                        )}
                                        onClick={() => setMenuSx(!menuSx)}
                                    >
                                        <span>S???P X???P THEO</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productFileNamBestSellers-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuSx
                                                        ? 'productFileNamBestSellers-category-collection-leftConten-btnMenu-icon1'
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
                    <ListProductAll productItem={productNam} />
                </div>
            </div>
        </div>
    );
}

export default ProductFileNamBestSellers;
