const expect = chai.expect;
import Vue from 'vue'
import infiniteScrollVue from '../src/index.vue'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('infiniteScrollVue.vue', () => {
    it('contains a passing spec', function() {
      console.log("Hello Karma");
    });
    it('infiniteScrollVue是否存在',()=>{
      expect(infiniteScrollVue).to.be.ok;
    })
  })

