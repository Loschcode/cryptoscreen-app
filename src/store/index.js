import Vue from 'vue'
import Vuex from 'vuex'

import marketCoins from './modules/market_coins'
import userMarketCoins from './modules/user_market_coins'
import portfolioCoins from './modules/portfolio_coins'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    marketCoins,
    userMarketCoins,
    portfolioCoins
  }
})
