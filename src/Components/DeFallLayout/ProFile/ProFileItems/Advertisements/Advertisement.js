import classNames from 'classnames/bind';
import Images from '../../../../../img/Images';
import styles from '../Advertisements/Advertisement.module.scss';
import grid from '../../../../../GlobalStyles/Grid.module.scss';

import Carousel from 'react-bootstrap/Carousel';
import Confic from '../../../../../Confic/Confic';
import { Link } from 'react-router-dom';

const slideImages = [
    {
        id: 1,
        img: Images.imageAdvertisements1,
        caption: 'Slide 1',
        titleText: '#Colosseum #Crunonwatch',
        titleBrand: 'Colosseum Collection',
        titleText1: ' Đại diện cho sự mạnh mẽ và phiêu lưu',
        to: Confic.ColosseumPage,
    },
    {
        id: 2,
        img: Images.imageAdvertisements2,
        caption: 'Slide 2',
        titleText: '#Weimar #Crunonwatch',
        titleBrand: 'Weimar Collection',
        titleText1: ' Ngôn ngữ thiết kế Bauhaus',
        to: Confic.WeimarPage,
    },
    {
        id: 3,
        img: Images.imageAdvertisements3,
        caption: 'Slide 3',
        titleText: '#Jackson #Unbreakable',
        titleBrand: 'Jackson Collection',
        titleText1: 'Dòng đồng hồ lặn đầu tiên từ một thương hiệu Việt',
        to: Confic.JacksonPage,
    },
];

const cx = classNames.bind(styles);
const cd = classNames.bind(grid);

function Advertisement() {
    return (
        <div className={cx('wrapper-advertisements')}>
            <Carousel controls={false} touch={false} interval={3000}>
                {slideImages.map((slideImage) => (
                    <Carousel.Item key={slideImage.id}>
                        <div className={cx('advertisements-img-band')}>
                            <div className={cx('advertisements-img')}>
                                <img
                                    className={cx('advertisement-img')}
                                    src={slideImage.img}
                                    alt={slideImage.caption}
                                />
                            </div>
                            <div className={cx('advertisements-titles-link')}>
                                <div className={cd('grid', 'wide')}>
                                    <div className={cx('advertisements-titles-links')}>
                                        <div className={cx('advertisements-titles')}>
                                            <div>
                                                <p className={cx('advertisements-titletext')}>{slideImage.titleText}</p>
                                            </div>
                                            <div>
                                                <h4 className={cx('advertisements-titlebrand')}>
                                                    {slideImage.titleBrand}
                                                </h4>
                                            </div>
                                            <div>
                                                <p className={cx('advertisements-titletext1')}>
                                                    {slideImage.titleText1}
                                                </p>
                                            </div>
                                        </div>
                                        <div className={cx('advertisements-link-btn')}>
                                            <Link to={slideImage.to} className={cx('advertisements-link')}>
                                                KHÁM PHÁ nào
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default Advertisement;
