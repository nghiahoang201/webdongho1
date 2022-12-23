import classNames from 'classnames/bind';
import styles from '../ProductDetroit/ProductDetroit.module.scss';
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
        img: Images.imageProductDetroit1,
        textType: 'Detroit',
        textName: 'Us-12',
        newPrice: 3199000,
    },
    {
        id: 2,
        img: Images.imageProductDetroit2,
        textType: 'Detroit',
        textName: 'M-53',
        newPrice: 3199000,
    },
    {
        id: 3,
        img: Images.imageProductDetroit3,
        textType: 'Detroit',
        textName: '8 mile',
        newPrice: 2899000,
    },
    {
        id: 4,
        img: Images.imageProductDetroit4,
        textType: 'Detroit',
        textName: 'Us-16',
        newPrice: 2899000,
    },
    {
        id: 5,
        img: Images.imageProductDetroit5,
        textType: 'Detroit',
        textName: 'M-153',
        newPrice: 2899000,
    },
    {
        id: 6,
        img: Images.imageProductDetroit6,
        textType: 'Detroit',
        textName: 'M-59',
        newPrice: 2899000,
    },
    {
        id: 7,
        img: Images.imageProductDetroit7,
        textType: 'Detroit',
        textName: '6 mile',
        newPrice: 3199000,
    },
    {
        id: 8,
        img: Images.imageProductDetroit8,
        textType: 'Detroit',
        textName: '0 mile',
        newPrice: 2899000,
    },
];
const MENUDAYDH_DETROIT = [
    { id: 1, imgDay: Images.imageDay1, text: 'Dây da Genuine', alt: 'anh daydh' },
    { id: 2, imgDay: Images.imageDay2, text: 'Dây kim loại', alt: 'anh daydh' },
    { id: 3, imgDay: Images.imageDay3, text: 'Dây thép không gỉ', alt: 'anh daydh' },
];
const MENUCOLOR_DETROIT = [
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

function ProductDetroit() {
    const [menuColor, setMenuColor] = useState(false);
    const [menuSx, setMenuSx] = useState(false);
    const [menuDaydh, setMenuDaydh] = useState(false);
    const { productDetroit } = useContext(ValueContex);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper-productDetroit')}>
            <div className={cx('productDetroit-bannercategory')}>
                <img
                    className={cx('productDetroit-category-img')}
                    src={Images.imageProductDetroit}
                    alt="anh ProductDetroit"
                />
            </div>
            <div className={cd('grid', 'wide')}>
                <div className={cx('productDetroit-category')}>
                    <h4 className={cx('productDetroit-titleCategory')}>Detroit</h4>
                    <div className={cx('productDetroit-categoryboxsub')}>
                        <div className={cx('productDetroit-categoryDesc')}>
                            <p>
                                Lấy cảm hứng từ chất đường phố bụi bặm, Detroit với thiết kế mạnh mẽ, nguyên bản sẽ giúp
                                bạn thể hiện cá tính "không pha trộn" và nổi bật của riêng mình
                            </p>
                        </div>
                        <div className={cx('productDetroit-categorytotal')}>
                            <p>{LIST_PRODUCTALL.length} trên 8 sản phẩm</p>
                        </div>
                    </div>
                    <div className={cx('productDetroit-category-collectionDesktop')}>
                        <div className={cx('productDetroit-category-collection')}>
                            <div className={cx('productDetroit-category-collection-boxLeft')}>
                                <div className={cx('productDetroit-category-collection-leftConten')}>
                                    <button
                                        className={cx('productDetroit-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuColor(!menuColor)}
                                    >
                                        <span>MÀU SẮC</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productDetroit-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuColor
                                                        ? 'productDetroit-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuColor ? <MenuProductColor menuColor={MENUCOLOR_DETROIT} /> : null}
                                </div>
                                <div className={cx('productDetroit-category-collection-leftConten')}>
                                    <button
                                        className={cx('productDetroit-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuDaydh(!menuDaydh)}
                                    >
                                        <span>Chất liệu dây</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productDetroit-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuDaydh
                                                        ? 'productDetroit-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuDaydh ? <MenuProductClday menuDayDh={MENUDAYDH_DETROIT} /> : null}
                                </div>
                            </div>
                            <div className={cx('productDetroit-category-collection-boxRight')}>
                                <div className={cx('productDetroit-category-collection-RightConten')}>
                                    <button
                                        className={cx('productDetroit-category-collection-RightConten-btnMenu')}
                                        onClick={() => setMenuSx(!menuSx)}
                                    >
                                        <span>SẮP XẾP THEO</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productDetroit-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuSx
                                                        ? 'productDetroit-category-collection-leftConten-btnMenu-icon1'
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
                    <ListProductAll productItem={productDetroit} />
                </div>
            </div>
        </div>
    );
}

export default ProductDetroit;
