import classNames from 'classnames/bind';
import styles from '../ProFile/ProFile.module.scss';

import Images from '../../../img/Images';
import ItemsProduct from './ProFileItems/ItemsProduct';
import ListProductNam from './ProFileItems/ListProductNam';
import ListProductNu from './ProFileItems/ListProductNu';
import Advertisement from './ProFileItems/Advertisements/Advertisement';
import Story from './ProFileItems/Storys/Stoty';
import SliderFooter from './ProFileItems/SliderFooter/SliderFooter';
import { Link } from 'react-router-dom';
import Confic from '../../../Confic/Confic';
import Ship from './ProFileItems/Ship/Ship';

const cx = classNames.bind(styles);

function ProFile() {
    const LIST_PRODUCT = [
        {
            id: 1,
            sellers: '5%',
            img: Images.imageSp1,
            textType: 'Kashmir',
            textName: 'Gallant',
            newPrice: 1954000,
            price: 2299000,
        },
        {
            id: 2,
            sellers: '5%',
            img: Images.imageSp2,
            textType: 'Kashmir',
            textName: 'Rise',
            newPrice: 2039000,
            price: 2399000,
        },
        {
            id: 3,
            sellers: '5%',
            img: Images.imageSp3,
            textType: 'Kashmir',
            textName: 'Swank',
            newPrice: 2039000,
            price: 2399000,
        },
        {
            id: 4,
            sellers: '5%',
            img: Images.imageSp4,
            textType: 'Kashmir',
            textName: 'Rebel',
            newPrice: 1839000,
            price: 2299000,
        },
    ];
    const LIST_PRODUCTNU = [
        {
            id: 1,
            sellers: '5%',
            img: Images.imageSpnu5,
            textType: 'Hamilton',
            textName: 'Sylvia',
            newPrice: 1919000,
            price: 2399000,
        },
        {
            id: 2,
            sellers: '5%',
            img: Images.imageSpnu6,
            textType: 'Hamilton',
            textName: 'Cora',
            newPrice: 2039000,
            price: 2399000,
        },
        {
            id: 3,
            sellers: '5%',
            img: Images.imageSpnu7,
            textType: 'Hamilton',
            textName: 'Loretta',
            newPrice: 2039000,
            price: 2399000,
        },
        {
            id: 4,
            sellers: '5%',
            img: Images.imageSpnu8,
            textType: 'Hamilton',
            textName: 'Lydia',
            newPrice: 1954000,
            price: 2299000,
        },
    ];
    return (
        <div className={cx('wrapper-body')}>
            <div className={cx('body-slider')}>
                <div className={cx('img-slider')}>
                    <img className={cx('body-slider-img')} src={Images.imageSlider1} alt="slider" />
                    <div className={cx('body-slider-desc')}>
                        <div className={cx('body-slider-desc-texts')}>
                            <div className={cx('body-slider-desc-text1')}>buy 1 get 1</div>
                            <div className={cx('body-slider-desc-text2')}>whitesands collection</div>
                            <div className={cx('body-slider-desc-text3')}>Nhận ngay túi Tote phiên bản giới hạn!</div>
                            <div className={cx('body-slider-link')}>
                                <Link to={Confic.WhitesandsPage} className={cx('body-slider-link-curnon')}>
                                    shop now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Ship />
                <ItemsProduct />
                <ListProductNam product={LIST_PRODUCT} />
                <ListProductNu productNu={LIST_PRODUCTNU} />
                <Advertisement />
                <Story />
                <SliderFooter />
            </div>
        </div>
    );
}

export default ProFile;
