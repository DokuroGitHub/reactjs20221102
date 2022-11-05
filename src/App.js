import logo from './logo.svg';
import './App.scss';
import ToDoList from './components/todo/ToDoList';
import ProductList from './components/product/ProductList';
import ProductDetail from './components/productDetail/ProductDetail';
import 'react-image-lightbox/style.css';
import NavBar from './components/Navigator/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ROUTE_ADD_PRODUCT, ROUTE_HOME, ROUTE_PRODUCT_DETAIL, ROUTE_PRODUCT_LIST, ROUTE_TODO_LIST, ROUTE_WEATHER } from './components/Navigator/constants';
import AddProductWidget from './components/product/AddProductWidget';
import Page404 from './components/page404/Page404';
import Weather from './components/weather/Weather';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path={ROUTE_HOME}>
          <div className="Home">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div className="body">
              <div className="content-left">
                <p>
                  Hello world with reactJS
                </p>
                <ToDoList />
              </div>
              <div className="content-right">
                <ProductDetail />
              </div>
            </div>
          </div>
        </Route>
        <Route path={ROUTE_PRODUCT_DETAIL}>
          <ProductDetail />
        </Route>
        <Route path={ROUTE_PRODUCT_LIST}>
          <ProductList />
        </Route>
        <Route path={ROUTE_ADD_PRODUCT}>
          <AddProductWidget />
        </Route>
        <Route path={ROUTE_TODO_LIST}>
          <ToDoList />
        </Route>
        <Route path={ROUTE_WEATHER}>
          <Weather />
        </Route>
        <Route path='*'>
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
