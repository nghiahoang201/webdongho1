import classNames from 'classnames/bind';
import styles from '../ProductMelissani/ProductMelissani.module.scss';
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
        img: Images.imageProductMelissani1,
        textType: 'Melissani',
        textName: 'Wind',
        newPrice: 2399000,
    },
    {
        id: 2,
        img: Images.imageProductMelissani2,
        textType: 'Melissani',
        textName: 'Serene',
        newPrice: 2399000,
    },
    {
        id: 3,
        img: Images.imageProductMelissani3,
        textType: 'Melissani',
        textName: 'Autumn',
        newPrice: 2399000,
    },
    {
        id: 4,
        img: Images.imageProductMelissani4,
        textType: 'Melissani',
        textName: 'Monsoon',
        newPrice: 2299000,
    },
    {
        id: 5,
        img: Images.imageProductMelissani5,
        textType: 'Melissani',
        textName: 'Dawn',
        newPrice: 2299000,
    },
];

const MENUDAYDH_MELISSANI = [
    { id: 1, imgDay: Images.imageDay1, text: 'Dây da Genuine', alt: 'anh daydh' },
    { id: 2, imgDay: Images.imageDay2, text: 'Dây kim loại', alt: 'anh daydh' },
    { id: 3, imgDay: Images.imageDay3, text: 'Dây thép không gỉ', alt: 'anh daydh' },
];

const MENUCOLOR_MELISSANI = [
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

function ProductMelissani() {
    const [menuColor, setMenuColor] = useState(false);
    const [menuSx, setMenuSx] = useState(false);
    const [menuDaydh, setMenuDaydh] = useState(false);
    const { productMelissani } = useContext(ValueContex);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper-productMelissani')}>
            <div className={cx('productMelissani-bannercategory')}>
                <img
                    className={cx('productMelissani-category-img')}
                    src={Images.imageProductMelissani}
                    alt="anh ProductMelissani"
                />
            </div>
            <div className={cd('grid', 'wide')}>
                <div className={cx('productMelissani-category')}>
                    <h4 className={cx('productMelissani-titleCategory')}>Melissani</h4>
                    <div className={cx('productMelissani-categoryboxsub')}>
                        <div className={cx('productMelissani-categoryDesc')}>
                            <p>
                                Lấy cảm hứng từ vẻ đẹp thiên nhiên hoang sơ được ví như "nàng tiên bước ra từ thần
                                thoại", Melissani mang đầy đủ những nét đẹp của chiếc đồng hồ đáng mơ ước cho phái nữ:
                                cá tính, quyến rũ và đầy bí ẩn. Đường kính 32mm, dễ dàng kết hợp cùng dây da và dây kim
                                loại, phù hợp với mọi phong cách thời trang bạn yêu thích.
                            </p>
                        </div>
                        <div className={cx('productMelissani-categorytotal')}>
                            <p>{LIST_PRODUCTALL.length} trên 8 sản phẩm</p>
                        </div>
                    </div>
                    <div className={cx('productMelissani-category-collectionDesktop')}>
                        <div className={cx('productMelissani-category-collection')}>
                            <div className={cx('productMelissani-category-collection-boxLeft')}>
                                <div className={cx('productMelissani-category-collection-leftConten')}>
                                    <button
                                        className={cx('productMelissani-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuColor(!menuColor)}
                                    >
                                        <span>MÀU SẮC</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productMelissani-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuColor
                                                        ? 'productMelissani-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuColor ? <MenuProductColor menuColor={MENUCOLOR_MELISSANI} /> : null}
                                </div>
                                <div className={cx('productMelissani-category-collection-leftConten')}>
                                    <button
                                        className={cx('productMelissani-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuDaydh(!menuDaydh)}
                                    >
                                        <span>Chất liệu dây</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productMelissani-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuDaydh
                                                        ? 'productMelissani-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuDaydh ? <MenuProductClday menuDayDh={MENUDAYDH_MELISSANI} /> : null}
                                </div>
                            </div>
                            <div className={cx('productMelissani-category-collection-boxRight')}>
                                <div className={cx('productMelissani-category-collection-RightConten')}>
                                    <button
                                        className={cx('productMelissani-category-collection-RightConten-btnMenu')}
                                        onClick={() => setMenuSx(!menuSx)}
                                    >
                                        <span>SẮP XẾP THEO</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productMelissani-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuSx
                                                        ? 'productMelissani-category-collection-leftConten-btnMenu-icon1'
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
                    <ListProductAll productItem={productMelissani} />
                </div>
            </div>
        </div>
    );
}

export default ProductMelissani;
