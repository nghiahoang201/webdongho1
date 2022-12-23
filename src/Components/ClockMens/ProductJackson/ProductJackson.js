import classNames from 'classnames/bind';
import styles from '../ProductJackson/ProductJackson.module.scss';
import grid from '../../../GlobalStyles/Grid.module.scss';

import Images from '../../../img/Images';
import { IconMenuDown } from '../../../Icons/index';
import ListProductAll from '../../DeFallLayout/ListProductAll/ListProductAll';
import { useContext, useEffect, useState } from 'react';
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
        img: Images.imageProductJackson1,
        textType: 'Jackson',
        textName: 'Sandstorm',
        newPrice: 3299000,
    },
    {
        id: 2,
        img: Images.imageProductJackson2,
        textType: 'Jackson',
        textName: 'Blizzard',
        newPrice: 3299000,
    },
    {
        id: 3,
        img: Images.imageProductJackson3,
        textType: 'Jackson',
        textName: 'Earthquake',
        newPrice: 3299000,
    },
    {
        id: 4,
        img: Images.imageProductJackson4,
        textType: 'Jackson',
        textName: 'Thunder',
        newPrice: 3299000,
    },
];

const MENUDAYDH_JACKSON = [
    { id: 1, imgDay: Images.imageDay1, text: 'Dây da Genuine', alt: 'anh daydh' },
    { id: 2, imgDay: Images.imageDay2, text: 'Dây kim loại', alt: 'anh daydh' },
    { id: 3, imgDay: Images.imageDay3, text: 'Dây thép không gỉ', alt: 'anh daydh' },
];
const MENUCOLOR_JACKSON = [
    { id: 1, imgcolor: Images.imageColor1, text: 'Silver', alt: 'anh mau' },
    { id: 2, imgcolor: Images.imageColor2, text: 'Rosegold', alt: 'anh mau' },
    { id: 3, imgcolor: Images.imageColor3, text: 'Black', alt: 'anh mau' },
    { id: 4, imgcolor: Images.imageColor4, text: 'Navy', alt: 'anh mau' },
    { id: 5, imgcolor: Images.imageColor5, text: 'Grey', alt: 'anh mau' },
    { id: 6, imgcolor: Images.imageColor6, text: 'Brown', alt: 'anh mau' },
    { id: 7, imgcolor: Images.imageColor7, text: 'Coffee', alt: 'anh mau' },
    { id: 8, imgcolor: Images.imageColor8, text: 'Sand', alt: 'anh mau' },
];

const MENUSX = [
    { id: 1, text: 'Mặc định', check: <IconCheck /> },
    { id: 2, text: 'Giá tăng dần', check: <IconCheck /> },
    { id: 3, text: 'Giá giảm dần', check: <IconCheck /> },
];

function ProductJackson() {
    const [menuColor, setMenuColor] = useState(false);
    const [menuSx, setMenuSx] = useState(false);
    const [menuDaydh, setMenuDaydh] = useState(false);
    const { productJackson } = useContext(ValueContex);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper-productJackson')}>
            <div className={cx('productJackson-bannercategory')}>
                <img
                    className={cx('productJackson-category-img')}
                    src={Images.imageProductJackson}
                    alt="anh ProductJackson"
                />
            </div>
            <div className={cd('grid', 'wide')}>
                <div className={cx('productJackson-category')}>
                    <h4 className={cx('productJackson-titleCategory')}>Jackson</h4>
                    <div className={cx('productJackson-categoryboxsub')}>
                        <div className={cx('productJackson-categoryDesc')}>
                            <p>
                                Unbreakable Watches for Unbreakable Men - Dòng Đồng hồ Lặn đầu tiên đến từ một thương
                                hiệu Việt. Thiết kế mạnh mẽ, chống chịu mọi áp lực.
                            </p>
                        </div>
                        <div className={cx('productJackson-categorytotal')}>
                            <p>{LIST_PRODUCTALL.length} trên 8 sản phẩm</p>
                        </div>
                    </div>
                    <div className={cx('productJackson-category-collectionDesktop')}>
                        <div className={cx('productJackson-category-collection')}>
                            <div className={cx('productJackson-category-collection-boxLeft')}>
                                <div className={cx('productJackson-category-collection-leftConten')}>
                                    <button
                                        className={cx('productJackson-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuColor(!menuColor)}
                                    >
                                        <span>MÀU SẮC</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productJackson-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuColor
                                                        ? 'productJackson-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuColor ? <MenuProductColor menuColor={MENUCOLOR_JACKSON} /> : null}
                                </div>
                                <div className={cx('productJackson-category-collection-leftConten')}>
                                    <button
                                        className={cx('productJackson-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuDaydh(!menuDaydh)}
                                    >
                                        <span>Chất liệu dây</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productJackson-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuDaydh
                                                        ? 'productJackson-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuDaydh ? <MenuProductClday menuDayDh={MENUDAYDH_JACKSON} /> : null}
                                </div>
                            </div>
                            <div className={cx('productJackson-category-collection-boxRight')}>
                                <div className={cx('productJackson-category-collection-RightConten')}>
                                    <button
                                        className={cx('productJackson-category-collection-RightConten-btnMenu')}
                                        onClick={() => setMenuSx(!menuSx)}
                                    >
                                        <span>SẮP XẾP THEO</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productJackson-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuSx
                                                        ? 'productJackson-category-collection-leftConten-btnMenu-icon1'
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
                    <ListProductAll productItem={productJackson} />
                </div>
            </div>
        </div>
    );
}

export default ProductJackson;
