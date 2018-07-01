import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import datahelper from '../helpers/dataHelper';
import { fetchData } from '../actions/coins';

/*
* This is a container component which will behave as a data sources it will fetch data from API
* and provide that data to presentational component.
*/

class Liquidity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    } 

    componentWillMount() {
        this.init(); // Fetch data from API
    }

    init() {
        let coinsData = this.props.coinsData;
        let limit;
        if(coinsData && coinsData.pageSize) {
          limit = coinsData.pageSize;
        }
        this.props.dispatch(fetchData())
    }

    /* This is view of this page*/
    render() {
      return (
          <div className="container">
              <Chart data={this.props.coinsData.list}/>
          </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    coinsData: state.coinsData
  };
};

export default connect(mapStateToProps, undefined)(Liquidity);
