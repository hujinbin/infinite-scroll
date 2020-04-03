import Vue from 'vue'

import index from './index'

Vue.component('infiniteScroll',index)

new Vue({
    el:'#app',
    data(){
        return{ 
            num:20
        }
    },
    methods:{
        loadMore(){
            this.num = this.num + 20
            console.log('加载次数='+(this.num/20))
        },
    }
})