import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ListCoins from '../components/ListCoins';
import datahelper from '../helpers/dataHelper'
import { fetchData } from '../actions/coins';

/*
* This is a container component which will behave as a data sources it will fetch data from API
* and provide that data to presentational component.
*/

class MarketOverview extends React.Component {
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
				<ListCoins data={this.props.coinsData.list} />
			</div>
		)
	}
}
const mapStateToProps = (state) => {
  return {
    coinsData: state.coinsData
  };
};

export default connect(mapStateToProps, undefined)(MarketOverview);
