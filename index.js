import infiniteScroll from './src/index'

const install = Vue => {
    Vue.component('infiniteScroll', infiniteScroll)
}

export {
    install,
    infiniteScroll,
}