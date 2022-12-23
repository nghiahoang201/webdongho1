import classNames from 'classnames/bind';
import styles from '../ProductHamilton/ProductHamilton.module.scss';
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
        img: Images.imageProductHamilton1,
        textType: 'Hamilton',
        textName: 'Sylvia',
        newPrice: 2399000,
    },
    {
        id: 2,
        img: Images.imageProductHamilton2,
        textType: 'Hamilton',
        textName: 'Loretta',
        newPrice: 2399000,
    },
    {
        id: 3,
        img: Images.imageProductHamilton3,
        textType: 'Hamilton',
        textName: 'Lydia',
        newPrice: 2299000,
    },
    {
        id: 4,
        img: Images.imageProductHamilton4,
        textType: 'Hamilton',
        textName: 'Anne',
        newPrice: 2399000,
    },
    {
        id: 5,
        img: Images.imageProductHamilton5,
        textType: 'Hamilton',
        textName: 'Scarlett',
        newPrice: 2299000,
    },
    {
        id: 6,
        img: Images.imageProductHamilton6,
        textType: 'Hamilton',
        textName: 'Cora',
        newPrice: 2399000,
    },
];

const MENUDAYDH_HAMILTON = [
    { id: 1, imgDay: Images.imageDay1, text: 'Dây da Genuine', alt: 'anh daydh' },
    { id: 2, imgDay: Images.imageDay2, text: 'Dây kim loại', alt: 'anh daydh' },
    { id: 3, imgDay: Images.imageDay3, text: 'Dây thép không gỉ', alt: 'anh daydh' },
];

const MENUCOLOR_HAMILTON = [
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

function ProductHamilton() {
    const [menuColor, setMenuColor] = useState(false);
    const [menuSx, setMenuSx] = useState(false);
    const [menuDaydh, setMenuDaydh] = useState(false);
    const { productHamilton } = useContext(ValueContex);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper-productHamilton')}>
            <div className={cx('productHamilton-bannercategory')}>
                <img
                    className={cx('productHamilton-category-img')}
                    src={Images.imageProductHamilton}
                    alt="anh ProductHamilton"
                />
            </div>
            <div className={cd('grid', 'wide')}>
                <div className={cx('productHamilton-category')}>
                    <h4 className={cx('productHamilton-titleCategory')}>Hamilton</h4>
                    <div className={cx('productHamilton-categoryboxsub')}>
                        <div className={cx('productHamilton-categoryDesc')}>
                            <p>
                                Là hòn đảo thơ mộng ở nước Úc xa xôi, Hamilton đại diện cho sự vui vẻ và tinh thần tràn
                                đầy năng lượng của những cô gái hiện đại. Hơn thế nữa, đây chính là dòng sản phẩm đầu
                                tiên dành cho nữ có mặt kính vòm giúp bạn thêm phần cuốn hút và thanh lịch.
                            </p>
                        </div>
                        <div className={cx('productHamilton-categorytotal')}>
                            <p>{LIST_PRODUCTALL.length} trên 8 sản phẩm</p>
                        </div>
                    </div>
                    <div className={cx('productHamilton-category-collectionDesktop')}>
                        <div className={cx('productHamilton-category-collection')}>
                            <div className={cx('productHamilton-category-collection-boxLeft')}>
                                <div className={cx('productHamilton-category-collection-leftConten')}>
                                    <button
                                        className={cx('productHamilton-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuColor(!menuColor)}
                                    >
                                        <span>MÀU SẮC</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productHamilton-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuColor
                                                        ? 'productHamilton-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuColor ? <MenuProductColor menuColor={MENUCOLOR_HAMILTON} /> : null}
                                </div>
                                <div className={cx('productHamilton-category-collection-leftConten')}>
                                    <button
                                        className={cx('productHamilton-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuDaydh(!menuDaydh)}
                                    >
                                        <span>Chất liệu dây</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productHamilton-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuDaydh
                                                        ? 'productHamilton-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuDaydh ? <MenuProductClday menuDayDh={MENUDAYDH_HAMILTON} /> : null}
                                </div>
                            </div>
                            <div className={cx('productHamilton-category-collection-boxRight')}>
                                <div className={cx('productHamilton-category-collection-RightConten')}>
                                    <button
                                        className={cx('productHamilton-category-collection-RightConten-btnMenu')}
                                        onClick={() => setMenuSx(!menuSx)}
                                    >
                                        <span>SẮP XẾP THEO</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productHamilton-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuSx
                                                        ? 'productHamilton-category-collection-leftConten-btnMenu-icon1'
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
                    <ListProductAll productItem={productHamilton} />
                </div>
            </div>
        </div>
    );
}

export default ProductHamilton;
