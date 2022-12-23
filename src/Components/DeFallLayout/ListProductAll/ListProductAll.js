import classNames from 'classnames/bind';
import styles from '../ListProductAll/ListProductAll.module.scss';
import grid from '../../../GlobalStyles/Grid.module.scss';
import Products from './Products';

const cx = classNames.bind(styles);
const cd = classNames.bind(grid);

function ListProduct(props) {
    const { productItem } = props;
    return (
        <div className={cx('body-wrapper')}>
            <div className={cx('wrapper')}>
                <div className={cd('grid', 'wide')}>
                    <div className={cx('list-products')}>
                        <div className="list-products-best-sellers">
                            <div className={cd('row')}>
                                <Products productItem={productItem} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListProduct;
