<template>
    <div class="infinite-scroll">
        <slot/>
    </div>
</template>

<script>
export default {
    methods:{
handleScroll () {
       //变量scrollTop是滚动条滚动时，距离顶部的距离
       const scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
       //变量windowHeight是可视区的高度
       const windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
       //变量scrollHeight是滚动条的总高度
       const scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
       //滚动条到底部的条件
       if(scrollTop+windowHeight==scrollHeight){
           this.loadMore() // 加载的列表数据
       }
   },
//    触发加载
   loadMore(){
        this.$emit('infinite-scroll')
    },
    },
 mounted () {
     this.handleScroll();
    window.addEventListener('scroll', this.handleScroll)
},
destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
},
};
</script>

<style lang="less" scoped>

</style>