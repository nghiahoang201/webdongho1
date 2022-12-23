import Confic from '../Confic/Confic';

import ColosseumPage from '../Page/ColosseumPage/ColosseumPage';
import DetroitPage from '../Page/DetroitPage/DetroitPage';
import FuturaPage from '../Page/FuturaPage/FuturaPage';
import HamiltonPage from '../Page/HamiltonPage/HamiltonPage';
import Home from '../Page/Home/Home';
import JacksonPage from '../Page/JacksonPage/JacksonPage';
import KashmirPage from '../Page/KashmirPage/KashmirPage';
import MelisaniPage from '../Page/MelissaniPage/MelissaniPage';
import MorainePage from '../Page/MorainePage/MorainePage';
import Product from '../Page/Product/Product';
import ProductBestSellersPage from '../Page/ProductBestSellersPage/ProductBestSellersPage';
import ProductDaydhNuPage from '../Page/ProductDaydhNuPage/ProductDaydhNuPage';
import ProductDaydhPage from '../Page/ProductDaydhPage/ProductDaydhPage';
import ProductNu from '../Page/ProductNu/ProductNu';
import ProductNuBestSellersPge from '../Page/ProductNuBestSellersPage/ProductNuBestSellersPage';
import ProductPkNamPage from '../Page/ProductPkNamPage/ProductPkNamPage';
import ProductPkNuPge from '../Page/ProductPkNuPage/ProductPkNuPage';
import WeimarPage from '../Page/WeimarPage/WeimarPage';
import WhitesandsPage from '../Page/WhitesandsPage/WhitesandsPage';
import ProductOrderPage from '../Page/ProductOrderPage/ProductOrderPage';
import ProductOrderPkPage from '../Page/ProductOrderPkPage/ProductOrderPkPage';
import CartOrderPage from '../Page/CartOrderPage/CartOrderPage';

var publicRoutes = [
    { path: Confic.Home, component: Home },
    { path: Confic.Product, component: Product },
    { path: Confic.ProductNu, component: ProductNu },
    { path: Confic.ProductBestSellersPage, component: ProductBestSellersPage },
    { path: Confic.ProductNuBestSellersPage, component: ProductNuBestSellersPge },
    { path: Confic.ProductPkNamPage, component: ProductPkNamPage },
    { path: Confic.ProductPkNuPage, component: ProductPkNuPge },
    { path: Confic.ProductDaydhPage, component: ProductDaydhPage },
    { path: Confic.ProductDaydhNuPage, component: ProductDaydhNuPage },
    { path: Confic.KashmirPage, component: KashmirPage },
    { path: Confic.WeimarPage, component: WeimarPage },
    { path: Confic.ColosseumPage, component: ColosseumPage },
    { path: Confic.JacksonPage, component: JacksonPage },
    { path: Confic.DetroitPage, component: DetroitPage },
    { path: Confic.FuturaPage, component: FuturaPage },
    { path: Confic.WhitesandsPage, component: WhitesandsPage },
    { path: Confic.MelissaniPage, component: MelisaniPage },
    { path: Confic.MorainePage, component: MorainePage },
    { path: Confic.HamiltonPage, component: HamiltonPage },
    { path: Confic.ProductOrderPage, component: ProductOrderPage },
    { path: Confic.ProductOrderPkPage, component: ProductOrderPkPage },
    { path: Confic.CartOrderPage, component: CartOrderPage },
];

export { publicRoutes };
