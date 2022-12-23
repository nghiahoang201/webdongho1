import classNames from 'classnames/bind';
import styles from '../ProductPkNam/ProductPkNam.module.scss';
import grid from '../../../GlobalStyles/Grid.module.scss';

import Images from '../../../img/Images';
import { IconMenuDown } from '../../../Icons/index';
import ListProductAccessoryAll from '../../DeFallLayout/ListProductAll/ListProductAccessory/ListProductAccessoryAll';
import { useContext, useEffect, useState } from 'react';
import MenuProductBst from '../../DeFallLayout/MenuProperti/MenuProductBst';
import MenuProductSapxep from '../../DeFallLayout/MenuProperti/MenuProductSapxep';
import MenuProductColor from '../../DeFallLayout/MenuProperti/MenuProductColor';
import { IconCheck } from '../../../Icons/index';
import { ValueContex } from '../../DeFallLayout/DeFallLayout';

const cx = classNames.bind(styles);
const cd = classNames.bind(grid);

const LIST_PRODUCTALL = [
    {
        id: 1,
        img: Images.imageVongnam1,
        textName: 'Jackie Gunmetal',
        newPrice: 299000,
    },
    {
        id: 2,
        img: Images.imageVongnam2,
        textName: 'Jackie Silver',
        newPrice: 299000,
    },
    {
        id: 3,
        img: Images.imageVongnam3,
        textName: 'Jackie Rosegold',
        newPrice: 299000,
    },
    {
        id: 4,
        img: Images.imageVongnam4,
        textName: 'Clark Silver',
        newPrice: 399000,
    },
    {
        id: 5,
        img: Images.imageVongnam5,
        textName: 'Clark Gunmetal',
        newPrice: 399000,
    },
];
const MENUBST_LIST_PKNAM = [{ id: 1, imgTransperent: Images.imageCurnon1, alt: 'anh sp', text: ' Vòng tay nam' }];

const MENUCOLOR_PKNAM = [
    { id: 1, imgcolor: Images.imageColor1, text: 'Silver', alt: 'anh mau' },
    { id: 2, imgcolor: Images.imageColor3, text: 'Black', alt: 'anh mau' },
];
const MENUSX = [
    { id: 1, text: 'Mặc định', check: <IconCheck /> },
    { id: 2, text: 'Giá tăng dần', check: <IconCheck /> },
    { id: 3, text: 'Giá giảm dần', check: <IconCheck /> },
];
function ProductPkNam() {
    const [menuBst, setMenuBst] = useState(false);
    const [menuColor, setMenuColor] = useState(false);
    const [menuSx, setMenuSx] = useState(false);
    const { productAccessoryMen } = useContext(ValueContex);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper-productPkNam')}>
            <div className={cx('productPkNam-bannercategory')}>
                <img
                    className={cx('productPkNam-category-img')}
                    src={Images.imageProductPkNam}
                    alt="anh ProductPkNam"
                />
            </div>
            <div className={cd('grid', 'wide')}>
                <div className={cx('productPkNam-category')}>
                    <h4 className={cx('productPkNam-titleCategory')}>Phụ kiện nam</h4>
                    <div className={cx('productPkNam-categoryboxsub')}>
                        <div className={cx('productPkNam-categoryDesc')}>
                            <p>Sự tự tin trên cổ tay của người đàn ông hiện đại</p>
                        </div>
                        <div className={cx('productPkNam-categorytotal')}>
                            <p>{LIST_PRODUCTALL.length} trên 5 sản phẩm</p>
                        </div>
                    </div>
                    <div className={cx('productPkNam-category-collectionDesktop')}>
                        <div className={cx('productPkNam-category-collection')}>
                            <div className={cx('productPkNam-category-collection-boxLeft')}>
                                <div className={cx('productPkNam-category-collection-leftConten')}>
                                    <button
                                        className={cx('productPkNam-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuBst(!menuBst)}
                                    >
                                        <span>BỘ SƯU TẬP</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productPkNam-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuBst
                                                        ? 'productPkNam-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>

                                    {menuBst ? (
                                        <MenuProductBst
                                            menuListBst={MENUBST_LIST_PKNAM}
                                            menuBst={menuBst}
                                            setMenuBst={setMenuBst}
                                        />
                                    ) : null}
                                </div>

                                <div className={cx('productPkNam-category-collection-leftConten')}>
                                    <button
                                        className={cx('productPkNam-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuColor(!menuColor)}
                                    >
                                        <span>MÀU SẮC</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productPkNam-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuColor
                                                        ? 'productPkNam-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuColor ? <MenuProductColor menuColor={MENUCOLOR_PKNAM} /> : null}
                                </div>
                            </div>
                            <div className={cx('productPkNam-category-collection-boxRight')}>
                                <div className={cx('productPkNam-category-collection-RightConten')}>
                                    <button
                                        className={cx('productPkNam-category-collection-RightConten-btnMenu')}
                                        onClick={() => setMenuSx(!menuSx)}
                                    >
                                        <span>SẮP XẾP THEO</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productPkNam-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuSx
                                                        ? 'productPkNam-category-collection-leftConten-btnMenu-icon1'
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
                    <ListProductAccessoryAll productItem={productAccessoryMen} />
                </div>
            </div>
        </div>
    );
}

export default ProductPkNam;
