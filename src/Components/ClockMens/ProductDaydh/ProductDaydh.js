import classNames from 'classnames/bind';
import styles from '../ProductDaydh/ProductDaydh.module.scss';
import grid from '../../../GlobalStyles/Grid.module.scss';

import Images from '../../../img/Images';
import { IconMenuDown } from '../../../Icons/index';
import ListProductRopeAll from '../../DeFallLayout/ListProductAll/ListProductRope/ListProductRopeAll';
import { useContext, useEffect, useState } from 'react';
import MenuProductBst from '../../DeFallLayout/MenuProperti/MenuProductBst';
import MenuProductSapxep from '../../DeFallLayout/MenuProperti/MenuProductSapxep';
import MenuProductClday from '../../DeFallLayout/MenuProperti/MenuProductClday';
import { IconCheck } from '../../../Icons/index';
import { ValueContex } from '../../DeFallLayout/DeFallLayout';

const cx = classNames.bind(styles);
const cd = classNames.bind(grid);

const LIST_PRODUCTALL = [
    {
        id: 1,
        sellers: '10%',
        img: Images.imageProductDay1,
        textType: 'Kashmir - 20mm',
        textName: 'Dây da Sand',
        price: 499000,
        newPrice: 449000,
    },
    {
        id: 2,
        sellers: '10%',
        img: Images.imageProductDay2,
        textType: 'Weimar - 20mm',
        textName: 'Dây da Brown',
        price: 449000,
        newPrice: 404000,
    },
    {
        id: 3,
        sellers: '10%',
        img: Images.imageProductDay3,
        textType: 'Colosseum - 20mm',
        textName: 'Dây thép',
        price: 799000,
        newPrice: 719000,
    },
    {
        id: 4,
        sellers: '10%',
        img: Images.imageProductDay4,
        textType: 'Colosseum - 20mm',
        textName: 'Dây da Coffee',
        price: 449000,
        newPrice: 404000,
    },
    {
        id: 5,
        sellers: '10%',
        img: Images.imageProductDay5,
        textType: 'Colosseum - 20mm',
        textName: 'Dây da Black',
        price: 449000,
        newPrice: 404000,
    },
    {
        id: 6,
        sellers: '10%',
        img: Images.imageProductDay6,
        textType: 'Kashmir - 20mm',
        textName: 'Dây da Coffee',
        price: 499000,
        newPrice: 449000,
    },
    {
        id: 7,
        sellers: '10%',
        img: Images.imageProductDay7,
        textType: 'Kashmir - 20mm',
        textName: 'Dây da Black',
        price: 499000,
        newPrice: 449000,
    },
    {
        id: 8,
        sellers: '10%',
        img: Images.imageProductDay8,
        textType: 'Kashmir - 20mm',
        textName: 'Dây da Brown',
        price: 499000,
        newPrice: 449000,
    },
];
const MENUBST_DAYDH = [
    { id: 1, imgTransperent: Images.imageTransparent3, alt: 'anh sp', text: ' Dây Colosseum ' },
    { id: 2, imgTransperent: Images.imageTransparent2, alt: 'anh sp', text: ' Dây Kashmir ' },
    { id: 3, imgTransperent: Images.imageTransparent1, alt: 'anh sp', text: ' Dây Weimar ' },
];
const MENUDAYDH_DAYDH = [
    { id: 1, imgDay: Images.imageDay1, text: 'Dây da Genuine', alt: 'anh daydh' },
    { id: 2, imgDay: Images.imageDay2, text: 'Dây kim loại', alt: 'anh daydh' },
    { id: 3, imgDay: Images.imageDay3, text: 'Dây thép không gỉ', alt: 'anh daydh' },
];
const MENUSX = [
    { id: 1, text: 'Mặc định', check: <IconCheck /> },
    { id: 2, text: 'Giá tăng dần', check: <IconCheck /> },
    { id: 3, text: 'Giá giảm dần', check: <IconCheck /> },
];

function ProductDaydh() {
    const [menuBst, setMenuBst] = useState(false);
    const [menuColor, setMenuColor] = useState(false);
    const [menuSx, setMenuSx] = useState(false);
    const { productRopeMen } = useContext(ValueContex);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper-productDaydh')}>
            <div className={cx('productDaydh-bannercategory')}>
                <img
                    className={cx('productDaydh-category-img')}
                    src={Images.imageProductDaydh}
                    alt="anh ProductDaydh"
                />
            </div>
            <div className={cd('grid', 'wide')}>
                <div className={cx('productDaydh-category')}>
                    <h4 className={cx('productDaydh-titleCategory')}>Dây đồng hồ nam</h4>
                    <div className={cx('productDaydh-categoryboxsub')}>
                        <div className={cx('productDaydh-categoryDesc')}>
                            <p>
                                Từ nay bạn đã có thể biến một thành nhiều chiếc đồng hồ để thay đổi phong cách thời
                                trang của bản thân với dây đồng hồ Curnon. Chúng tôi đem đến thiết kế, màu sắc và chất
                                liệu đa dạng và quan trọng là dễ dàng tháo lắp trong vòng 30 giây.
                            </p>
                        </div>
                        <div className={cx('productDaydh-categorytotal')}>
                            <p>{LIST_PRODUCTALL.length} trên 8 sản phẩm</p>
                        </div>
                    </div>
                    <div className={cx('productDaydh-category-collectionDesktop')}>
                        <div className={cx('productDaydh-category-collection')}>
                            <div className={cx('productDaydh-category-collection-boxLeft')}>
                                <div className={cx('productDaydh-category-collection-leftConten')}>
                                    <button
                                        className={cx('productDaydh-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuBst(!menuBst)}
                                    >
                                        <span>BỘ SƯU TẬP</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productDaydh-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuBst
                                                        ? 'productDaydh-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>

                                    {menuBst ? (
                                        <MenuProductBst
                                            menuListBst={MENUBST_DAYDH}
                                            menuBst={menuBst}
                                            setMenuBst={setMenuBst}
                                        />
                                    ) : null}
                                </div>

                                <div className={cx('productDaydh-category-collection-leftConten')}>
                                    <button
                                        className={cx('productDaydh-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuColor(!menuColor)}
                                    >
                                        <span>Chất liệu dây</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productDaydh-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuColor
                                                        ? 'productDaydh-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuColor ? <MenuProductClday menuDayDh={MENUDAYDH_DAYDH} /> : null}
                                </div>
                            </div>
                            <div className={cx('productDaydh-category-collection-boxRight')}>
                                <div className={cx('productDaydh-category-collection-RightConten')}>
                                    <button
                                        className={cx('productDaydh-category-collection-RightConten-btnMenu')}
                                        onClick={() => setMenuSx(!menuSx)}
                                    >
                                        <span>SẮP XẾP THEO</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productDaydh-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuSx
                                                        ? 'productDaydh-category-collection-leftConten-btnMenu-icon1'
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
                    <ListProductRopeAll productItem={productRopeMen} />
                </div>
            </div>
        </div>
    );
}

export default ProductDaydh;
