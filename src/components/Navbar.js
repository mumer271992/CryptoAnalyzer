import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { changePageSize } from '../actions/coins';
import { COINMARKETCAP_DEFAULT_PAGE_SIZE } from '../constants/appConstants';

/* A header section component that wraps both navbar and shared ui. */

class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.defaultPageSize = COINMARKETCAP_DEFAULT_PAGE_SIZE;
  }

  onChangeHandler = (e) => {
    /* coinmarketcap api return maximum 100 results,
    ** so size all means maximum results.
    */
    let size = e.target.value;
    if (size === 'all') {
      size = this.defaultPageSize;
    } else {
      size = parseInt(size); 
    }
    
    /* Dispatch Action to store */

    this.props.dispatch(changePageSize(size));
  }

  render() {
    return (
      <div className="header-container">
        <header className="navbar fixed">
          <div className="navitem logo">
            <span className=""><i className="fas fa-chart-area active"></i></span>
            <NavLink to="/">Crypto Analyzer</NavLink>
          </div>
          <div className="navlinks">
              <NavLink to="/" activeClassName="active" className="navitem" exact={true}>Market Overview</NavLink>
              <NavLink to="/liquidity" activeClassName="active" className="navitem" exact={true}>Liquidity</NavLink>
          </div>
        </header>
        <div className="container p-t p-b">
          <h1 className="t-c">Top {this.props.coinsData && this.props.coinsData.pageSize} Cryptocurrencies By Market Capitalization</h1>
          <div className="row align-items-center justify-content-between">
            <label><b>Total Records Fetched</b></label>
            <select className="custom-select" onChange={this.onChangeHandler}>
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100" selected>100</option>
              <option value="all">All</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coinsData: state.coinsData
  };
};

export default connect(mapStateToProps, undefined,undefined,{pure: false})(Navbar);