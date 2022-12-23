import classNames from 'classnames/bind';
import styles from '../OrderProduct/WristSize.module.scss';

import Images from '../../../../img/Images';
import { IconClose } from '../../../../Icons/index';

const cx = classNames.bind(styles);

function WristSize(props) {
    const { openWristSize, setOpenWristSize } = props;
    return (
        <div className={cx('wrapper-wristSize')}>
            <div className={cx('wristSize')}>
                <div className={cx('wristSize-contens')}>
                    <p onClick={() => setOpenWristSize(!openWristSize)}>
                        <IconClose className={cx('wristSize-contens-icon-close')} />
                    </p>
                    <div className={cx('wristSize-conten')}>
                        <div className={cx('wristSize-contens-header')}>
                            <h3 className={cx('wristSize-contens-header-title')}>MẶT ĐỒNG HỒ</h3>
                            <p className={cx('wristSize-contens-header-text')}>ĐỐI CHIỀU VỚI CHU VI CỔ TAY</p>
                        </div>
                        <div className={cx('wristSize-contens-body')}>
                            <div className={cx('wristSize-contens-body-items')}>
                                <p className={cx('wristSize-contens-body-items-text-header')}>Đồng hồ</p>
                                <p className={cx('wristSize-contens-body-items-text-header')}>Cổ tay</p>
                            </div>
                            <div
                                className={cx(
                                    'wristSize-contens-body-items-text-body',
                                    'wristSize-contens-body-items-text-body-color',
                                )}
                            >
                                <p>Kashmir 40mm</p>
                                <p>15,5-17,5cm</p>
                            </div>
                            <div className={cx('wristSize-contens-body-items-text-body')}>
                                <p>Weimar 40mm</p>
                                <p>16-17,5cm</p>
                            </div>
                            <div
                                className={cx(
                                    'wristSize-contens-body-items-text-body',
                                    'wristSize-contens-body-items-text-body-color',
                                )}
                            >
                                <p>Jackson 40mm</p>
                                <p>16-17,5cm</p>
                            </div>
                            <div className={cx('wristSize-contens-body-items-text-body')}>
                                <p>Detroit 40mm</p>
                                <p>16-18cm</p>
                            </div>
                            <div
                                className={cx(
                                    'wristSize-contens-body-items-text-body',
                                    'wristSize-contens-body-items-text-body-color',
                                )}
                            >
                                <p>Colosseum 42mm</p>
                                <p>16-18cm</p>
                            </div>
                            <div className={cx('wristSize-contens-body-items-text-body')}>
                                <p>Whitesands 38mm</p>
                                <p>14,5-17cm</p>
                            </div>
                            <div
                                className={cx(
                                    'wristSize-contens-body-items-text-body',
                                    'wristSize-contens-body-items-text-body-color',
                                )}
                            >
                                <p>Futura 40mm</p>
                                <p>16-18cm</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('wristSize-contens-body-img')}>
                        <img className={cx('wristSize-contens-body-img')} src={Images.imageSliderSize} alt="anh size" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WristSize;
