<template>
  <div class="coin-preview-flipped">

    <div class="row">
      <div clas="gr-12">
        <div class="coin-preview-flipped__rank">
          <div v-if="marketCoin.rank">
            Rank #{{marketCoin.rank}}
          </div>
          <div v-else>
            Rank >100
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="gr-12">
        <div class="coin-preview-flipped__image">
          <div v-if="marketCoin.logo_url">
            <img :src="marketCoin.logo_url" />
          </div>
        </div>

        <div class="module__content-percent --small">
          <div v-if="marketCoin.market_cap">
            <animated-number :value="marketCoin.market_cap" :type="`big-money`" :animatedColors="true" :numberColors="false" />
          </div>
          <div v-else>
            -
          </div>
        </div>
      </div>

      <div class="row">
        <div clas="gr-12">
          <div class="coin-preview-flipped__title">
            Market Capitalization
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import AnimatedNumber from '@/components/AnimatedNumber'

export default {
  props: [
    'marketCoinProp'
  ],

  data () {
    return {
    }
  },

  computed: {
    marketCoin () {
      return this.$store.getters.getMarketCoin(this.marketCoinProp.id)
    }
  },

  methods: {
  },

  components: {
    AnimatedNumber
  }
}
</script>
