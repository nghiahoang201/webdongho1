import classNames from 'classnames/bind';
import styles from '../ProductWeimar/ProductWeimar.module.scss';
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
        img: Images.imageProductWeimar1,
        textType: 'Weimar',
        textName: 'Heinz',
        newPrice: 2499000,
    },
    {
        id: 2,
        img: Images.imageProductWeimar2,
        textType: 'Weimar',
        textName: 'Stefan',
        newPrice: 2399000,
    },
    {
        id: 3,
        img: Images.imageProductWeimar3,
        textType: 'Weimar',
        textName: 'Jurgen',
        newPrice: 2499000,
    },
    {
        id: 4,
        img: Images.imageProductWeimar4,
        textType: 'Weimar',
        textName: 'Werner',
        newPrice: 2399000,
    },
    {
        id: 5,
        img: Images.imageProductWeimar5,
        textType: 'Weimar',
        textName: 'Otto',
        newPrice: 2399000,
    },
    {
        id: 6,
        img: Images.imageProductWeimar6,
        textType: 'Weimar',
        textName: 'Klaus',
        newPrice: 2399000,
    },
    {
        id: 7,
        img: Images.imageProductWeimar7,
        textType: 'Weimar',
        textName: 'Paul',
        newPrice: 2399000,
    },
    {
        id: 8,
        img: Images.imageProductWeimar8,
        textType: 'Weimar',
        textName: 'Herbert',
        newPrice: 2399000,
    },
];
const MENUDAYDH_WEIMAR = [
    { id: 1, imgDay: Images.imageDay1, text: 'Dây da Genuine', alt: 'anh daydh' },
    { id: 2, imgDay: Images.imageDay2, text: 'Dây kim loại', alt: 'anh daydh' },
    { id: 3, imgDay: Images.imageDay3, text: 'Dây thép không gỉ', alt: 'anh daydh' },
];
const MENUCOLOR_WEIMAR = [
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

function ProductWeimar() {
    const [menuColor, setMenuColor] = useState(false);
    const [menuSx, setMenuSx] = useState(false);
    const [menuDaydh, setMenuDaydh] = useState(false);
    const { ProductWeimar } = useContext(ValueContex);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper-productWeimar')}>
            <div className={cx('productWeimar-bannercategory')}>
                <img
                    className={cx('productWeimar-category-img')}
                    src={Images.imageProductWeimar}
                    alt="anh ProductWeimar"
                />
            </div>
            <div className={cd('grid', 'wide')}>
                <div className={cx('productWeimar-category')}>
                    <h4 className={cx('productWeimar-titleCategory')}>Weimar</h4>
                    <div className={cx('productWeimar-categoryboxsub')}>
                        <div className={cx('productWeimar-categoryDesc')}>
                            <p>
                                Là thành phố được biết đến như cái nôi của nghệ thuật Bauhaus đỉnh cao, Weimar đại diện
                                cho những giá trị khởi nguồn đầy cảm hứng. Với thiết kế theo hơi hướng cổ điển nhưng
                                không hề rườm rà, đồng hồ Weimar chính là điểm nhấn trên cổ tay của các tín đồ yêu sự
                                tối giản.
                            </p>
                        </div>
                        <div className={cx('productWeimar-categorytotal')}>
                            <p>{LIST_PRODUCTALL.length} trên 8 sản phẩm</p>
                        </div>
                    </div>
                    <div className={cx('productWeimar-category-collectionDesktop')}>
                        <div className={cx('productWeimar-category-collection')}>
                            <div className={cx('productWeimar-category-collection-boxLeft')}>
                                <div className={cx('productWeimar-category-collection-leftConten')}>
                                    <button
                                        className={cx('productWeimar-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuColor(!menuColor)}
                                    >
                                        <span>MÀU SẮC</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productWeimar-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuColor
                                                        ? 'productWeimar-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuColor ? <MenuProductColor menuColor={MENUCOLOR_WEIMAR} /> : null}
                                </div>
                                <div className={cx('productWeimar-category-collection-leftConten')}>
                                    <button
                                        className={cx('productWeimar-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuDaydh(!menuDaydh)}
                                    >
                                        <span>Chất liệu dây</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productWeimar-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuDaydh
                                                        ? 'productWeimar-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuDaydh ? <MenuProductClday menuDayDh={MENUDAYDH_WEIMAR} /> : null}
                                </div>
                            </div>
                            <div className={cx('productWeimar-category-collection-boxRight')}>
                                <div className={cx('productWeimar-category-collection-RightConten')}>
                                    <button
                                        className={cx('productWeimar-category-collection-RightConten-btnMenu')}
                                        onClick={() => setMenuSx(!menuSx)}
                                    >
                                        <span>SẮP XẾP THEO</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productWeimar-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuSx
                                                        ? 'productWeimar-category-collection-leftConten-btnMenu-icon1'
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
                    <ListProductAll productItem={ProductWeimar} />
                </div>
            </div>
        </div>
    );
}

export default ProductWeimar;
