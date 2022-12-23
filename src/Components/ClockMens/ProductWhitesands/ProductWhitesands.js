import classNames from 'classnames/bind';
import styles from '../ProductWhitesands/ProductWhitesands.module.scss';
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
        img: Images.imageProductWhitesands1,
        textType: 'Whitesands',
        textName: 'Flow',
        newPrice: 1899000,
    },
    {
        id: 2,
        img: Images.imageProductWhitesands2,
        textType: 'Whitesands',
        textName: 'Alter',
        newPrice: 1899000,
    },
    {
        id: 3,
        img: Images.imageProductWhitesands3,
        textType: 'Whitesands',
        textName: 'Aspire',
        newPrice: 1899000,
    },
    {
        id: 4,
        img: Images.imageProductWhitesands4,
        textType: 'Whitesands',
        textName: 'Range',
        newPrice: 1899000,
    },
    {
        id: 5,
        img: Images.imageProductWhitesands5,
        textType: 'Whitesands',
        textName: 'Wander',
        newPrice: 1899000,
    },
];
const MENUDAYDH_WHITESSANDS = [
    { id: 1, imgDay: Images.imageDay1, text: 'Dây da Genuine', alt: 'anh daydh' },
    { id: 2, imgDay: Images.imageDay2, text: 'Dây kim loại', alt: 'anh daydh' },
    { id: 3, imgDay: Images.imageDay3, text: 'Dây thép không gỉ', alt: 'anh daydh' },
];
const MENUCOLOR_WHITESSANDS = [
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

function ProductWhitesands() {
    const [menuColor, setMenuColor] = useState(false);
    const [menuSx, setMenuSx] = useState(false);
    const [menuDaydh, setMenuDaydh] = useState(false);
    const { productWhitesands } = useContext(ValueContex);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper-productWhitesands')}>
            <div className={cx('productWhitesands-bannercategory')}>
                <img
                    className={cx('productWhitesands-category-img')}
                    src={Images.imageProductWhitesands}
                    alt="anh ProductWhitesands"
                />
            </div>
            <div className={cd('grid', 'wide')}>
                <div className={cx('productWhitesands-category')}>
                    <h4 className={cx('productWhitesands-titleCategory')}>Whitesands</h4>
                    <div className={cx('productWhitesands-categoryboxsub')}>
                        <div className={cx('productWhitesands-categoryDesc')}>
                            <p>
                                "Made To Move" - Whitesands với thiết kế năng động cùng lựa chọn dây Nato khác biệt sẽ
                                là người đồng hành đại diện cho cảm hứng dịch chuyển và khát khao khám phá của tuổi trẻ.
                            </p>
                        </div>
                        <div className={cx('productWhitesands-categorytotal')}>
                            <p>{LIST_PRODUCTALL.length} trên 8 sản phẩm</p>
                        </div>
                    </div>
                    <div className={cx('productWhitesands-category-collectionDesktop')}>
                        <div className={cx('productWhitesands-category-collection')}>
                            <div className={cx('productWhitesands-category-collection-boxLeft')}>
                                <div className={cx('productWhitesands-category-collection-leftConten')}>
                                    <button
                                        className={cx('productWhitesands-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuColor(!menuColor)}
                                    >
                                        <span>MÀU SẮC</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productWhitesands-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuColor
                                                        ? 'productWhitesands-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuColor ? <MenuProductColor menuColor={MENUCOLOR_WHITESSANDS} /> : null}
                                </div>
                                <div className={cx('productWhitesands-category-collection-leftConten')}>
                                    <button
                                        className={cx('productWhitesands-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuDaydh(!menuDaydh)}
                                    >
                                        <span>Chất liệu dây</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productWhitesands-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuDaydh
                                                        ? 'productWhitesands-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuDaydh ? <MenuProductClday menuDayDh={MENUDAYDH_WHITESSANDS} /> : null}
                                </div>
                            </div>
                            <div className={cx('productWhitesands-category-collection-boxRight')}>
                                <div className={cx('productWhitesands-category-collection-RightConten')}>
                                    <button
                                        className={cx('productWhitesands-category-collection-RightConten-btnMenu')}
                                        onClick={() => setMenuSx(!menuSx)}
                                    >
                                        <span>SẮP XẾP THEO</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productWhitesands-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuSx
                                                        ? 'productWhitesands-category-collection-leftConten-btnMenu-icon1'
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
                    <ListProductAll productItem={productWhitesands} />
                </div>
            </div>
        </div>
    );
}

export default ProductWhitesands;
