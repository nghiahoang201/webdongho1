import classNames from 'classnames/bind';
import Images from '../../../../../img/Images';
import styles from '../SliderFooter/SliderFooter.module.scss';

import Carousel from 'react-bootstrap/Carousel';

const Sliderfooter = [
    {
        id: 1,
        img: Images.imageSliderfooter1,
        alt: 'slide footer1',
    },
    {
        id: 2,
        img: Images.imageSliderfooter2,
        alt: 'slide footer2',
    },
    {
        id: 3,
        img: Images.imageSliderfooter3,
        alt: 'slide footer3',
    },
    {
        id: 4,
        img: Images.imageSliderfooter4,
        alt: 'slide footer4',
    },
    {
        id: 5,
        img: Images.imageSliderfooter5,
        alt: 'slide footer5',
    },
    {
        id: 6,
        img: Images.imageSliderfooter6,
        alt: 'slide footer6',
    },
    {
        id: 7,
        img: Images.imageSliderfooter7,
        alt: 'slide footer7',
    },
    {
        id: 8,
        img: Images.imageSliderfooter8,
        alt: 'slide footer8',
    },
    {
        id: 9,
        img: Images.imageSliderfooter9,
        alt: 'slide footer9',
    },
    {
        id: 10,
        img: Images.imageSliderfooter10,
        alt: 'slide footer10',
    },
    {
        id: 11,
        img: Images.imageSliderfooter11,
        alt: 'slide footer11',
    },
    {
        id: 12,
        img: Images.imageSliderfooter12,
        alt: 'slide footer12',
    },
    {
        id: 13,
        img: Images.imageSliderfooter13,
        alt: 'slide footer13',
    },
    {
        id: 14,
        img: Images.imageSliderfooter14,
        alt: 'slide footer14',
    },
    {
        id: 15,
        img: Images.imageSliderfooter15,
        alt: 'slide footer15',
    },
];

const cx = classNames.bind(styles);

function SliderFooter() {
    return (
        <div className={cx('wrapper-sliderfooter')}>
            <div className={cx('sliderfooter')}>
                <div className={cx('sliderfooter-titles')}>
                    <h3 className={cx('sliderfooter-title')}> BE PART OF CURNON</h3>
                    <p className={cx('sliderfooter-text')}>Ai nói bạn không thể lựa chọn gia đình?</p>
                </div>

                <div className={cx('sliderfooter-imgs')}>
                    <Carousel controls={false} indicators={false} slide={false} interval={1500}>
                        {Sliderfooter.map((sliderfooter) => (
                            <Carousel.Item key={sliderfooter.id}>
                                <div className={cx('sliderfooter-img')}>
                                    <img src={sliderfooter.img} alt={sliderfooter.alt} />
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default SliderFooter;
