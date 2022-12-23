import classNames from 'classnames/bind';
import styles from '../ProductPkNu/ProductPkNu.module.scss';
import grid from '../../../GlobalStyles/Grid.module.scss';

import Images from '../../../img/Images';
import { IconMenuDown } from '../../../Icons/index';
import ListProductAccessoryAll from '../../DeFallLayout/ListProductAll/ListProductAccessory/ListProductAccessoryAll';
import { useContext, useEffect, useState } from 'react';
import MenuProductSapxep from '../../DeFallLayout/MenuProperti/MenuProductSapxep';
import MenuProductColor from '../../DeFallLayout/MenuProperti/MenuProductColor';
import { IconCheck } from '../../../Icons/index';
import { ValueContex } from '../../DeFallLayout/DeFallLayout';

const cx = classNames.bind(styles);
const cd = classNames.bind(grid);

const LIST_PRODUCTNUALL = [
    {
        id: 1,
        sellers: '10%',
        img: Images.imageVongnnu1,
        textName: 'Rosie Rosegold',
        newPrice: 269000,
        price: 299000,
    },
    {
        id: 2,
        sellers: '10%',
        img: Images.imageVongnnu2,
        textName: 'Stella Silver',
        newPrice: 269000,
        price: 299000,
    },
    {
        id: 3,
        sellers: '10%',
        img: Images.imageVongnnu3,
        textName: 'Cleo Silver',
        newPrice: 359000,
        price: 399000,
    },
    {
        id: 4,
        sellers: '10%',
        img: Images.imageVongnnu4,
        textName: 'Celia Rosegold',
        newPrice: 359000,
        price: 399000,
    },
    {
        id: 5,
        sellers: '10%',
        img: Images.imageVongnnu5,
        textName: 'Doris Rosegold',
        newPrice: 359000,
        Price: 399000,
    },
    {
        id: 6,
        sellers: '10%',
        img: Images.imageVongnnu6,
        textName: 'Sarah White',
        newPrice: 269000,
        Price: 299000,
    },
    {
        id: 7,
        sellers: '10%',
        img: Images.imageVongnnu7,
        textName: 'Gwen',
        newPrice: 269000,
        Price: 299000,
    },
    {
        id: 8,
        sellers: '10%',
        img: Images.imageVongnnu8,
        textName: 'Olivia Silver',
        newPrice: 359000,
        Price: 399000,
    },
];
const MENUCOLOR_PKNU = [
    { id: 1, imgcolor: Images.imageColor1, text: 'Silver', alt: 'anh mau' },
    { id: 2, imgcolor: Images.imageColor2, text: 'Rosegold', alt: 'anh mau' },
    { id: 3, imgcolor: Images.imageColor5, text: 'Gray', alt: 'anh mau' },
];
const MENUSX = [
    { id: 1, text: 'Mặc định', check: <IconCheck /> },
    { id: 2, text: 'Giá tăng dần', check: <IconCheck /> },
    { id: 3, text: 'Giá giảm dần', check: <IconCheck /> },
];
function ProductPkNu() {
    const [menuColor, setMenuColor] = useState(false);

    const [menuSx, setMenuSx] = useState(false);
    const { productAccessoryWomen } = useContext(ValueContex);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper-productPkNu')}>
            <div className={cx('productPkNu-bannercategory')}>
                <img
                    className={cx('productPkNu-category-img')}
                    src={Images.imageProductVongtay}
                    alt="anh ProductPkNu-BestSellers"
                />
            </div>
            <div className={cd('grid', 'wide')}>
                <div className={cx('productPkNu-category')}>
                    <h4 className={cx('productPkNu-titleCategory')}>Vòng tay nữ</h4>
                    <div className={cx('productPkNu-categoryboxsub')}>
                        <div className={cx('productPkNu-categoryDesc')}>
                            <p>
                                Mỗi thiết kế vòng tay của Curnon đều thể hiện một cá tính riêng biệt của những cô gái
                                hiện đại. Hãy chọn cho mình một phong cách phù hợp nhé.
                            </p>
                        </div>
                        <div className={cx('productPkNu-categorytotal')}>
                            <p>{LIST_PRODUCTNUALL.length} trên 12 sản phẩm</p>
                        </div>
                    </div>
                    <div className={cx('productPkNu-category-collectionDesktop')}>
                        <div className={cx('productPkNu-category-collection')}>
                            <div className={cx('productPkNu-category-collection-boxLeft')}>
                                <div className={cx('productPkNu-category-collection-leftConten')}>
                                    <button
                                        className={cx('productPkNu-category-collection-leftConten-btnMenu')}
                                        onClick={() => setMenuColor(!menuColor)}
                                    >
                                        <span>MÀU SẮC</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productPkNu-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuColor
                                                        ? 'productPkNu-category-collection-leftConten-btnMenu-icon1'
                                                        : ''
                                                }`,
                                            )}
                                        />
                                    </button>
                                    {menuColor ? <MenuProductColor menuColor={MENUCOLOR_PKNU} /> : null}
                                </div>
                            </div>
                            <div className={cx('productPkNu-category-collection-boxRight')}>
                                <div className={cx('productPkNu-category-collection-RightConten')}>
                                    <button
                                        className={cx('productPkNu-category-collection-RightConten-btnMenu')}
                                        onClick={() => setMenuSx(!menuSx)}
                                    >
                                        <span>SẮP XẾP THEO</span>
                                        <IconMenuDown
                                            className={cx(
                                                'productPkNu-category-collection-leftConten-btnMenu-icon',
                                                `${
                                                    menuSx
                                                        ? 'productPkNu-category-collection-leftConten-btnMenu-icon1'
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
                    <ListProductAccessoryAll productItem={productAccessoryWomen} />
                </div>
            </div>
        </div>
    );
}

export default ProductPkNu;
