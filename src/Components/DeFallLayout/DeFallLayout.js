import { useState, createContext, useEffect } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import request from '../../utils/request';

export const ValueContex = createContext();

function DeFallLayout({ children }) {
    // product
    const [productKashmir, setProductKashmir] = useState([]);
    const [ProductWeimar, setProductWeimar] = useState([]);
    const [productColosseum, setProductColosseum] = useState([]);
    const [productJackson, setProductJackson] = useState([]);
    const [productDetroit, setProductDetroit] = useState([]);
    const [productFutura, setProductFutura] = useState([]);
    const [productWhitesands, setProductWhitesands] = useState([]);
    const [productMelissani, setProductMelissani] = useState([]);
    const [productHamilton, setProductHamilton] = useState([]);
    const [productMoraine, setProductMoraine] = useState([]);

    // product rope (day dh)
    const [productRopeMen, setProductRopeMen] = useState([]);
    const [productRopeWomen, setProductRopeWomen] = useState([]);
    // product accessory ( pk)
    const [productAccessoryMen, setProductAccessoryMen] = useState([]);
    const [productAccessoryWomen, setProductAccessoryWomen] = useState([]);

    useEffect(() => {
        request.get('product').then((res) => {
            const data = res.data;
            // product
            const KashmirItem = data.filter((item) => item.brand === 'kashmir');
            const WeimarItem = data.filter((item) => item.brand === 'weimar');
            const ColosseumItem = data.filter((item) => item.brand === 'Colosseum');
            const JacksonItem = data.filter((item) => item.brand === 'Jackson');
            const DetroitItem = data.filter((item) => item.brand === 'Detroit');
            const FuturaItem = data.filter((item) => item.brand === 'Futura');
            const WhitesandsItem = data.filter((item) => item.brand === 'Whitesands');
            const MelissaniItem = data.filter((item) => item.brand === 'Melissani');
            const HamiltonItem = data.filter((item) => item.brand === 'Hamilton');
            const MoraineItem = data.filter((item) => item.brand === 'Moraine');

            // product
            setProductKashmir(KashmirItem);
            setProductWeimar(WeimarItem);
            setProductColosseum(ColosseumItem);
            setProductJackson(JacksonItem);
            setProductDetroit(DetroitItem);
            setProductFutura(FuturaItem);
            setProductWhitesands(WhitesandsItem);
            setProductMelissani(MelissaniItem);
            setProductHamilton(HamiltonItem);
            setProductMoraine(MoraineItem);
        });
    }, [
        // product
        setProductWeimar,
        setProductKashmir,
        setProductColosseum,
        setProductJackson,
        setProductDetroit,
        setProductFutura,
        setProductWhitesands,
        setProductMelissani,
        setProductHamilton,
        setProductMoraine,
    ]);

    //show Rope
    const [idAnProductRope, setIdAnProductRope] = useState([]);
    // product Rope

    useEffect(() => {
        request.get('productRope').then((res) => {
            const data = res.data;
            const ProductRopeMen = data.filter((item) => item.genres === 'Nam');
            const ProductRopeWomen = data.filter((item) => item.genres === 'Nu');
            const ShowAnProductRope = data.filter((item) => item._id === idAnProductRope);

            setShowAnProduct(ShowAnProductRope);
            setProductRopeMen(ProductRopeMen);
            setProductRopeWomen(ProductRopeWomen);
        });
    }, [setProductRopeMen, setProductRopeWomen, idAnProductRope]);

    //show Accessory
    const [idAnProductAccessory, setIdAnProductAccessory] = useState([]);

    // product Accessory
    useEffect(() => {
        request.get('accessoryProduct').then((res) => {
            const data = res.data;
            const AccessoryMen = data.filter((item) => item.genres === 'Nam');
            const AccessoryWomen = data.filter((item) => item.genres === 'Nu');
            // show
            const ShowAnProductAccessory = data.filter((item) => item._id === idAnProductAccessory);

            setShowAnProduct(ShowAnProductAccessory);
            setProductAccessoryMen(AccessoryMen);
            setProductAccessoryWomen(AccessoryWomen);
        });
    }, [setProductAccessoryMen, setProductAccessoryWomen, idAnProductAccessory]);

    // product all
    const [allProduct, setAllProduct] = useState([]);
    const [productNam, setProductNam] = useState([]);
    const [productNu, setProductNu] = useState([]);

    useEffect(() => {
        reponseData();
    }, []);

    const reponseData = async () => {
        await request.get('product').then((res) => {
            const data = res.data;
            const ProductNam = data.filter((item) => item.genres === 'Nam');
            const ProductNu = data.filter((item) => item.genres === 'Nu');

            setProductNam(ProductNam);
            setProductNu(ProductNu);
        });
    };

    // show product
    const [idAnProduct, setIdAnProduct] = useState([]);
    const [showAnProduct, setShowAnProduct] = useState([]);

    useEffect(() => {
        request.get('product').then((res) => {
            const data = res.data;
            const ShowAnProduct = data.filter((item) => item._id === idAnProduct);

            setShowAnProduct(ShowAnProduct);
        });
    }, [setShowAnProduct, idAnProduct]);

    // cart
    const getLocalStorage = JSON.parse(localStorage.getItem('ItemCart'));
    const [productItemCart, setProductItemCart] = useState(() => {
        if (getLocalStorage != null) {
            return getLocalStorage;
        } else {
            return [];
        }
    });
    // console.log('loca', productItemCart);
    function saveLocalStorage(item) {
        const jsonItemCarts = JSON.stringify(item);
        localStorage.setItem('ItemCart', jsonItemCarts);
    }
    saveLocalStorage(productItemCart);

    // delete cart
    const deleteItemCart = (id) => {
        const carts = [...productItemCart];
        const DeleteCart = carts.filter((item) => item._id !== id);
        setProductItemCart(DeleteCart);
        saveLocalStorage(DeleteCart);
    };

    const values = {
        //cart
        deleteItemCart,
        productItemCart,
        setProductItemCart,
        //show
        setIdAnProductAccessory,
        setIdAnProductRope,
        showAnProduct,
        setIdAnProduct,
        //product all
        productNu,
        productNam,
        allProduct,
        setAllProduct,
        // product accessory (pk)
        productAccessoryMen,
        productAccessoryWomen,
        // product rope (day dh)
        productRopeMen,
        productRopeWomen,
        // product

        productKashmir,
        ProductWeimar,
        productColosseum,
        productJackson,
        productDetroit,
        productFutura,
        productWhitesands,
        productMelissani,
        productHamilton,
        productMoraine,
    };
    return (
        <div className="wraper">
            <ValueContex.Provider value={values}>
                <Header />
                <div className="conten">{children}</div>
                <div className="footer">
                    <Footer />
                </div>
            </ValueContex.Provider>
        </div>
    );
}

export default DeFallLayout;
