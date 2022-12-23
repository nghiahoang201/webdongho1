import classNames from 'classnames/bind';
import styles from '../ProductFutura/ProductFutura.module.scss';
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
        img: Images.imageProductFutura1,
        textType: 'Futura',
        textName: 'Sirius',
        newPrice: 3499000,
    },
    {
        id: 2,
        img: Images.imageProductFutura2,
        textType: 'Futura',
        textName: 'Hadar',
        newPrice: 3499000,
    },
    {
        id: 3,
        img: Images.imageProductFutura3,
        textType: 'Futura',
        textName: 'Rigel',
        newPrice: 3499000,
    },
    {
        id: 4,
        img: Images.imageProductFutura4,
        textType: 'Futura',
        textName: 'Vega',
        newPrice: 3499000,
    },
    {
        id: 5,
        img: Images.imageProductFutura5,
        textType: 'Futura',
        textName: 'Pollux',
        newPrice: 3299000,
    },
];

const MENUDAYDH_FUTURA = [
    { id: 1, imgDay: Images.imageDay1, text: 'Dây da Genuine', alt: 'anh daydh' },
    { id: 2, imgDay: Images.imageDay2, text: 'Dây kim loại', alt: 'anh daydh' },
    { id: 3, imgDay: Images.imageDay3, text: 'Dây thép không gỉ', alt: 'anh daydh' },
];
const MENUCOLOR_FUTURA = [
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

function ProductFutura() {
    const [menuColor, setMenuColor] = useState(false);
    const [menuSx, setMenuSx] = useState(false);
    const [menuDaydh, setMenuDaydh] = useState(false);
    const { productFutura } = useContext(ValueContex);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper-productFutura')}>
            <div className={cx('productFutura-bannercategory')}>
                <img
                    className={cx('productFutura-category-img')}
                    src={Images.imageProductFutura}
                    alt="anh ProductFutura"
                />
            </div>
            <div className={cd('grid', 'wide')}>
                <div className={cx('productFutura-category')}>
                    <h4 className={cx('productFutura-titleCategory')}>Futura</h4>
                    <div className={cx('productFutura-categoryboxsub')}>
                        <div className={cx('productFutura-categoryDesc')}>
                            <p>
                                Futura là dòng đồng hồ Chronograph đầu tiên của Curnon, sở hữu tính năng bấm giờ mang
                                đến sự chính xác tuyệt đối. Thiết kế hiện đại, thể thao đại diện cho sự mạnh mẽ của
                                người đàn ông luôn sẵn sàng tiến về phía trước và nắm bắt mọi cơ hội.
                            </p>
                        </div>
                        <div className={cx('productFutura-categorytotal')}>
                            <p>{LIST_PRODUCTALL.length} trên 8 sản phẩm</p>
                        </div>
                    </div>
                    <div className={cx('productFutura-category-collectionDesktop')}>
                        <div className={cx('productFutura-category-collection')}>
                            <div className={cx('productFutura-category-collection-boxLeft')}>
                                <div className={cx('productFutura-category-collection-leftConten')}>
                                    <button
                                        className={cx('productFutura-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuColor(!menuColor)}
                                    >
                                        <span>MÀU SẮC</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productFutura-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuColor
                                                        ? 'productFutura-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuColor ? <MenuProductColor menuColor={MENUCOLOR_FUTURA} /> : null}
                                </div>
                                <div className={cx('productFutura-category-collection-leftConten')}>
                                    <button
                                        className={cx('productFutura-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuDaydh(!menuDaydh)}
                                    >
                                        <span>Chất liệu dây</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productFutura-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuDaydh
                                                        ? 'productFutura-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuDaydh ? <MenuProductClday menuDayDh={MENUDAYDH_FUTURA} /> : null}
                                </div>
                            </div>
                            <div className={cx('productFutura-category-collection-boxRight')}>
                                <div className={cx('productFutura-category-collection-RightConten')}>
                                    <button
                                        className={cx('productFutura-category-collection-RightConten-btnMenu')}
                                        onClick={() => setMenuSx(!menuSx)}
                                    >
                                        <span>SẮP XẾP THEO</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productFutura-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuSx
                                                        ? 'productFutura-category-collection-leftConten-btnMenu-icon1'
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
                    <ListProductAll productItem={productFutura} />
                </div>
            </div>
        </div>
    );
}

export default ProductFutura;
