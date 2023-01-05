import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Review from './components/Review';
import Booking from './components/Booking';
import { Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/book">
            <Booking />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
    </Switch>
  );
}

export default App;

