import ToDoList from './components/todo/ToDoList';
import ProductList from './components/product/ProductList';
import ProductDetail from './components/productDetail/ProductDetail';
import AddProductWidget from './components/product/AddProductWidget';
import Page404 from './components/page404/Page404';
import Weather from './components/weather/Weather';
import 'react-image-lightbox/style.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import {
  ROUTE_ADD_PRODUCT,
  ROUTE_HOME,
  ROUTE_PRODUCT_DETAIL,
  ROUTE_PRODUCT_LIST,
  ROUTE_TODO_LIST,
  ROUTE_WEATHER_DETAIL,
  ROUTE_WEATHER,
  ROUTE_OTP
} from './components/navigator/constants';
import './App.scss';
import OTP from './components/otp/OTP';
import WeatherByLocation from './components/weather/detail/WeatherByLocation';
import Home from './components/home/Home';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTE_PRODUCT_DETAIL} element={<ProductDetail />} />
          <Route path={ROUTE_PRODUCT_LIST} element={<ProductList />} />
          <Route path={ROUTE_ADD_PRODUCT} element={<AddProductWidget />} />
          <Route path={ROUTE_TODO_LIST} element={<ToDoList />} />
          <Route path={ROUTE_WEATHER_DETAIL} element={<WeatherByLocation />} />
          <Route path={ROUTE_WEATHER} element={<Weather />} />
          <Route path={ROUTE_OTP} element={<OTP />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
