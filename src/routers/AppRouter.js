import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MarketOverview from '../containers/MarketOverview'
import Liquidity from '../containers/Liquidity'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={MarketOverview} exact={true} />
        <Route path="/liquidity" component={Liquidity} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
