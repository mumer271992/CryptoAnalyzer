import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import datahelper from '../helpers/dataHelper';

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

    /* Re-render only if props value is changed else ignore update. */

    shouldComponentUpdate(nextProps){
        let flag = true;
        if (nextProps.coinsData && this.props.coinsData) {
          if (nextProps.coinsData.pageSize !== this.props.coinsData.pageSize) {
            this.getLimitedData(nextProps.coinsData.pageSize);
            flag = false
          }
        }
        return flag;
    }

    init() {
        let coinsData = this.props.coinsData;
        let limit;
        if(coinsData && coinsData.pageSize) {
          limit = coinsData.pageSize;
        }
        this.getLimitedData(limit);
    }

    getLimitedData(limit) {
      datahelper.getData({ limit }).then((data) => {
        this.setState((prevState, props) => ({
            data: data
        }));
      })
    }

    /* This is view of this page*/
    render() {
      return (
          <div className="container">
              <Chart data={this.state.data}/>
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
