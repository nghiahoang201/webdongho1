import classNames from 'classnames/bind';
import styles from '../ProductKashmir/ProductKashmir.module.scss';
import grid from '../../../GlobalStyles/Grid.module.scss';

import Images from '../../../img/Images';
import { IconMenuDown } from '../../../Icons/index';
import ListProductAll from '../../DeFallLayout/ListProductAll/ListProductAll';
import { useContext, useEffect, useState } from 'react';
import MenuProductSapxep from '../../DeFallLayout/MenuProperti/MenuProductSapxep';
import MenuProductClday from '../../DeFallLayout/MenuProperti/MenuProductClday';
import MenuProductColor from '../../DeFallLayout/MenuProperti/MenuProductColor';
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
const MENUDAYDH_KASHMIR = [
    { id: 1, imgDay: Images.imageDay1, text: 'Dây da Genuine', alt: 'anh daydh' },
    { id: 2, imgDay: Images.imageDay2, text: 'Dây kim loại', alt: 'anh daydh' },
    { id: 3, imgDay: Images.imageDay3, text: 'Dây thép không gỉ', alt: 'anh daydh' },
];
const MENUCOLOR_KASHMIR = [
    { id: 1, imgcolor: Images.imageColor1, text: 'Silver', alt: 'anh mau' },
    { id: 2, imgcolor: Images.imageColor2, text: 'Rosegold', alt: 'anh mau' },
    { id: 3, imgcolor: Images.imageColor3, text: 'Black', alt: 'anh mau' },
    { id: 4, imgcolor: Images.imageColor4, text: 'Navy', alt: 'anh mau' },
    { id: 5, imgcolor: Images.imageColor5, text: 'Grey', alt: 'anh mau' },
    { id: 6, imgcolor: Images.imageColor6, text: 'Brown', alt: 'anh mau' },
    { id: 7, imgcolor: Images.imageColor7, text: 'Coffee', alt: 'anh mau' },
    { id: 8, imgcolor: Images.imageColor8, text: 'Sand', alt: 'anh mau' },
];

function ProductKashmir() {
    const [menuColor, setMenuColor] = useState(false);
    const [menuSx, setMenuSx] = useState(false);
    const [menuDaydh, setMenuDaydh] = useState(false);
    const { productKashmir } = useContext(ValueContex);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper-productKashmir')}>
            <div className={cx('productKashmir-bannercategory')}>
                <img
                    className={cx('productKashmir-category-img')}
                    src={Images.imageProductKashmir}
                    alt="anh ProductKashmir"
                />
            </div>
            <div className={cd('grid', 'wide')}>
                <div className={cx('productKashmir-category')}>
                    <h4 className={cx('productKashmir-titleCategory')}>Kashmir</h4>
                    <div className={cx('productKashmir-categoryboxsub')}>
                        <div className={cx('productKashmir-categoryDesc')}>
                            <p>
                                Là dòng đồng hồ đầu tiên của Curnon, Kashmir định hình một triết lí thiết kế tối giản,
                                hiện đại và đại diện cho sự tự tin. Thời trang, kiến tạo và khát khao tuổi trẻ chính là
                                tuyên ngôn bạn sẽ mang theo bên mình cùng với Kashmir.
                            </p>
                        </div>
                        <div className={cx('productKashmir-categorytotal')}>
                            <p>{LIST_PRODUCTALL.length} trên 8 sản phẩm</p>
                        </div>
                    </div>
                    <div className={cx('productKashmir-category-collectionDesktop')}>
                        <div className={cx('productKashmir-category-collection')}>
                            <div className={cx('productKashmir-category-collection-boxLeft')}>
                                <div className={cx('productKashmir-category-collection-leftConten')}>
                                    <button
                                        className={cx('productKashmir-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuColor(!menuColor)}
                                    >
                                        <span>MÀU SẮC</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productKashmir-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuColor
                                                        ? 'productKashmir-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuColor ? <MenuProductColor menuColor={MENUCOLOR_KASHMIR} /> : null}
                                </div>
                                <div className={cx('productKashmir-category-collection-leftConten')}>
                                    <button
                                        className={cx('productKashmir-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuDaydh(!menuDaydh)}
                                    >
                                        <span>Chất liệu dây</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productKashmir-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuDaydh
                                                        ? 'productKashmir-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuDaydh ? <MenuProductClday menuDayDh={MENUDAYDH_KASHMIR} /> : null}
                                </div>
                            </div>
                            <div className={cx('productKashmir-category-collection-boxRight')}>
                                <div className={cx('productKashmir-category-collection-RightConten')}>
                                    <button
                                        className={cx('productKashmir-category-collection-RightConten-btnMenu')}
                                        onClick={() => setMenuSx(!menuSx)}
                                    >
                                        <span>SẮP XẾP THEO</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productKashmir-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuSx
                                                        ? 'productKashmir-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuSx ? <MenuProductSapxep /> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                    <ListProductAll productItem={productKashmir} />
                </div>
            </div>
        </div>
    );
}

export default ProductKashmir;
