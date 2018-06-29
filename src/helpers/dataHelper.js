/* This is Helper to fetch data from coinMarketCap Api it will behave as a data provider,
** In case we change our data source library this will be single chnage point.
*/

import axios from 'axios'
import { DATA_PROVIDER_URL } from '../constants/appConstants';

export default {
  api_url: DATA_PROVIDER_URL,

  data: null,

  getData: function (params = undefined, opts = {}) {
    let url = this.api_url
    let config = {}
    if (params) {
      config.params = params
    }

    return new Promise ((resolve, reject) =>{
      axios.get(url, config).then(resp => {
        if (resp && resp.data) {
          this.data = resp.data;
          resolve(resp.data);
        } else {
          reject({error: true});
        }
      })
    });
  }
}
