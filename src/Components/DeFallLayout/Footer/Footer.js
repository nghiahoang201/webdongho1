import classNames from 'classnames/bind';
import styles from '../Footer/Footer.module.scss';
import grid from '../../../GlobalStyles/Grid.module.scss';

import Images from '../../../img/Images';
import { ImgFb, ImgItagram, ImgYoutobe } from '../../../img/Static';

const cx = classNames.bind(styles);
const cd = classNames.bind(grid);

function Footer() {
    return (
        <footer className={cx('wrapper-footer')}>
            <div className={cd('grid', 'wide')}>
                <div className={cx('footer')}>
                    <div className={cx('footer-register')}>
                        <div>
                            <p className={cx('footer-register-title')}>NHẬN THÔNG TIN MỚI NHẤT TỪ CURNON</p>
                        </div>
                        <form>
                            <div className={cx('footer-register-sex-input')}>
                                <select className={cx('footer-register-sex')} name="Giới tính" id="1">
                                    <option value="Giới tính">Giới tính</option>
                                    <option value="Nam">Nam</option>
                                    <option value="Nữ">Nữ</option>
                                </select>
                                <input className={cx('footer-register-input')} type="text" placeholder="Họ tên ..." />
                            </div>
                            <div className={cx('footer-register-emails')}>
                                <input className={cx('footer-register-email')} type="text" placeholder="Email..." />
                            </div>
                            <div>
                                <button className={cx('footer-register-btn')}>
                                    <span className={cx('footer-register-btn-text')}>Đăng ký ngay</span>
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className={cx('footer-contact')}>
                        <div>
                            <h4 className={cx('footer-contact-title')}>LIÊN LẠC</h4>
                        </div>
                        <div>
                            <p className={cx('footer-contact-text')}>anhnghia230@gmail.com</p>
                            <p className={cx('footer-contact-text')}>0379443152</p>
                            <div className={cx('footer-contact-imgs')}>
                                <a href="/">
                                    <ImgFb />
                                </a>
                                <a href="/">
                                    <ImgItagram />
                                </a>
                                <a href="/">
                                    <ImgYoutobe />
                                </a>
                            </div>
                        </div>
                        <div className={cx('footer-imgpays')}>
                            <div>
                                <img className={cx('footer-imgpay')} src={Images.imagepay1} alt="anh momopay" />
                            </div>
                            <div>
                                <img className={cx('footer-imgpay')} src={Images.imagepay2} alt="anh vnpay" />
                            </div>
                        </div>
                    </div>

                    <div className={cx('footer-boxstor')}>
                        <div className={cx('footer-boxstor-hn')}>
                            <p className={cx('footer-boxstror-title')}>HANOI STORES</p>
                            <p className={cx('footer-boxstror-text')}>33 Hàm Long, Hoàn Kiếm.</p>
                            <p className={cx('footer-boxstror-text')}>9 B7 Phạm Ngọc Thạch, Đống Đa. </p>
                            <p className={cx('footer-boxstror-text', 'footer-boxstror-text1')}>173C Kim Mã, Ba Đình.</p>
                        </div>
                        <div className={cx('footer-boxstor-hcm')}>
                            <p className={cx('footer-boxstror-title')}>TP.HCM STORES</p>
                            <p className={cx('footer-boxstror-text')}>25 Nguyễn Trãi, P.Bến Thành, Quận 1.</p>
                            <p className={cx('footer-boxstror-text')}>348 Lê Văn Sỹ, Phường 14, Quận 3. </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
