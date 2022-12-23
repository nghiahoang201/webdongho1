import classNames from 'classnames/bind';
import { IconClose } from '../../../../Icons';
import styles from './Search.module.scss';

import { useEffect, useRef, useState } from 'react';
import ListProductAll from '../../ListProductAll/ListProductAll';
import request from '../../../../utils/request';
import Debounce from '../../../../hook/Debounce';

const cx = classNames.bind(styles);

function Search(props) {
    const { hideSearch, setHideSearch } = props;
    const [searchText, setSearchText] = useState('');
    const [showResult, setShowResult] = useState([]);
    const inputForcus = useRef();

    const listTex = ['kashmir', 'Colosseum', 'Futura', 'Moraine', 'Hamilton'];

    var debounce = Debounce(searchText, 1000);

    useEffect(() => {
        if (searchText !== '') {
            request.get(`product`).then((res) => {
                const data = res.data;
                const Search = data.filter((item) => item.brand === debounce);
                setShowResult(Search);
            });
            console.log('search', showResult);
        } else {
            setShowResult(null);
        }
    }, [debounce, setShowResult, searchText]);

    const handleOnchange = (e) => {
        const searchText = e.target.value;
        if (!searchText.startsWith(' ')) {
            setSearchText(searchText);
        }
    };

    const handleClear = () => {
        setSearchText('');
        inputForcus.current.focus();
    };
    return (
        <div className={cx('header-warpper-search')}>
            <div className={cx('header-search')}>
                <div className={cx('search-input-btn')}>
                    <input
                        ref={inputForcus}
                        className={cx('search-input', 'search-inputippro')}
                        placeholder="Nhập từ khóa"
                        type="text"
                        value={searchText}
                        onChange={handleOnchange}
                    />
                    {searchText && (
                        <button className={cx('close-search')} onClick={handleClear}>
                            <IconClose />
                        </button>
                    )}
                    <button className={cx('search-btn')} onClick={() => setHideSearch(!hideSearch)}>
                        đóng
                    </button>
                </div>
                {showResult ? (
                    <div className={cx('search-productItem-result')}>
                        <ListProductAll productItem={showResult} />
                    </div>
                ) : (
                    <div className={cx('search-texts')}>
                        <h4 className={cx('search-text-key')}>Các từ khóa nổi bật:</h4>
                        {listTex.map((item) => (
                            <p onClick={() => setSearchText(item)} className={cx('search-text')}>
                                {item}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;
