import classNames from 'classnames/bind';
import styles from '../Storys/Story.module.scss';
import grid from '../../../../../GlobalStyles/Grid.module.scss';

import Images from '../../../../../img/Images';
import Logo from '../../../../../img/index';

const cx = classNames.bind(styles);
const cd = classNames.bind(grid);

function Story() {
    return (
        <div className={cx('wrapper-story')}>
            <div className={cd('grid', 'wide')}>
                <div className={cd('row')}>
                    <div className={cd('col', 'c-12')}>
                        <div className={cx('story')}>
                            <div className={cx('story-logo')}>
                                <Logo />
                            </div>
                            <div className={cx('story-titles')}>
                                <h3 className={cx('story-title')}>THE STORY OF CURNON</h3>
                            </div>
                            <div className={cx('story-texts')}>
                                <p className={cx('story-text')}>
                                    Cuối năm 2016, 3 chàng trai đam mê Startup và Đồng hồ quyết định thành lập Curnon,
                                    nhưng ngay từ đầu, chúng tôi đã biết rằng: Curnon sinh ra với một sứ mệnh lớn lao
                                    hơn, không chỉ dừng lại là một thương hiệu đồng hồ. Chúng tôi muốn mang tới một
                                    nguồn cảm hứng, một sự thay đổi về tư duy, về suy nghĩ và chính những cái chúng tôi
                                    gọi là trải nghiệm cho người trẻ.
                                </p>
                            </div>
                            <div className={cx('story-img')}>
                                <img className={cx('story-image')} src={Images.imageStory1} alt="anh story" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>hello</div>
        </div>
    );
}

export default Story;
