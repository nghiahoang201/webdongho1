import classNames from 'classnames/bind';
import styles from '../ProductColosseum/ProductColosseum.module.scss';
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
        img: Images.imageProductColosseum1,
        textType: 'Colosseum',
        textName: 'Sterling',
        newPrice: 3199000,
    },
    {
        id: 2,
        img: Images.imageProductColosseum2,
        textType: 'Colosseum',
        textName: 'Nova',
        newPrice: 3199000,
    },
    {
        id: 3,
        img: Images.imageProductColosseum3,
        textType: 'Colosseum',
        textName: 'Mace',
        newPrice: 3199000,
    },
    {
        id: 4,
        img: Images.imageProductColosseum4,
        textType: 'Colosseum',
        textName: 'Mortar',
        newPrice: 2899000,
    },
    {
        id: 5,
        img: Images.imageProductColosseum5,
        textType: 'Colosseum',
        textName: 'Staff',
        newPrice: 2899000,
    },
    {
        id: 6,
        img: Images.imageProductColosseum6,
        textType: 'Colosseum',
        textName: 'Sling',
        newPrice: 2899000,
    },
    {
        id: 7,
        img: Images.imageProductColosseum7,
        textType: 'Colosseum',
        textName: 'Guandao',
        newPrice: 2899000,
    },
];

const MENUDAYDH_COLOSSEUM = [
    { id: 1, imgDay: Images.imageDay1, text: 'Dây da Genuine', alt: 'anh daydh' },
    { id: 2, imgDay: Images.imageDay2, text: 'Dây kim loại', alt: 'anh daydh' },
    { id: 3, imgDay: Images.imageDay3, text: 'Dây thép không gỉ', alt: 'anh daydh' },
];
const MENUCOLOR_COLOSSEUM = [
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

function ProductColosseum() {
    const [menuColor, setMenuColor] = useState(false);
    const [menuSx, setMenuSx] = useState(false);
    const [menuDaydh, setMenuDaydh] = useState(false);
    const { productColosseum } = useContext(ValueContex);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper-productColosseum')}>
            <div className={cx('productColosseum-bannercategory')}>
                <img
                    className={cx('productColosseum-category-img')}
                    src={Images.imageProductColosseum}
                    alt="anh ProductColosseum"
                />
            </div>
            <div className={cd('grid', 'wide')}>
                <div className={cx('productColosseum-category')}>
                    <h4 className={cx('productColosseum-titleCategory')}>Colosseum</h4>
                    <div className={cx('productColosseum-categoryboxsub')}>
                        <div className={cx('productColosseum-categoryDesc')}>
                            <p>
                                Lấy cảm hứng từ Đấu trường La Mã lịch sử, Colosseum ra đời đại diện cho sự mãnh mẽ,
                                phiêu lưu và lòng quyết tâm chinh phục mọi khao khát của một người đàn ông trưởng thành.
                                Thiết kế mặt 42mm hiện đại, vững chắc cùng 2 sub-dial độc đáo sẽ khiến bạn trở nên nổi
                                bật và cá tính hơn bao giờ hết.
                            </p>
                        </div>
                        <div className={cx('productColosseum-categorytotal')}>
                            <p>{LIST_PRODUCTALL.length} trên 8 sản phẩm</p>
                        </div>
                    </div>
                    <div className={cx('productColosseum-category-collectionDesktop')}>
                        <div className={cx('productColosseum-category-collection')}>
                            <div className={cx('productColosseum-category-collection-boxLeft')}>
                                <div className={cx('productColosseum-category-collection-leftConten')}>
                                    <button
                                        className={cx('productColosseum-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuColor(!menuColor)}
                                    >
                                        <span>MÀU SẮC</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productColosseum-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuColor
                                                        ? 'productColosseum-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuColor && <MenuProductColor menuColor={MENUCOLOR_COLOSSEUM} />}
                                </div>
                                <div className={cx('productColosseum-category-collection-leftConten')}>
                                    <button
                                        className={cx('productColosseum-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuDaydh(!menuDaydh)}
                                    >
                                        <span>Chất liệu dây</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productColosseum-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuDaydh
                                                        ? 'productColosseum-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuDaydh && <MenuProductClday menuDayDh={MENUDAYDH_COLOSSEUM} />}
                                </div>
                            </div>
                            <div className={cx('productColosseum-category-collection-boxRight')}>
                                <div className={cx('productColosseum-category-collection-RightConten')}>
                                    <button
                                        className={cx('productColosseum-category-collection-RightConten-btnMenu')}
                                        onClick={() => setMenuSx(!menuSx)}
                                    >
                                        <span>SẮP XẾP THEO</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productColosseum-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuSx
                                                        ? 'productColosseum-category-collection-leftConten-btnMenu-icon1'
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
                    <ListProductAll productItem={productColosseum} />
                </div>
            </div>
        </div>
    );
}

export default ProductColosseum;
