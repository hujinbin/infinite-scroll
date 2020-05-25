<template>
  <div class="infinite-scroll">
    <div>
      <slot></slot>
    </div>
    <div :style="{paddingBottom: paddingBottom}" ref="bottomLoader" v-show="showLoad">
      <div class="load-container">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="load-text">{{localeLoadingText}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loadingText: {
      type: String
    }
  },
  data() {
    return {
      paddingBottom: 0,
      showLoad: false, // 显示加载动画
    };
  },
  computed: {
    localeLoadingText() {
      if (this.loadingText === undefined) {
        return "数据正在加载中...";
      } else {
        return this.loadingText;
      }
    }
  },
  methods: {
    handleScroll() {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //变量windowHeight是可视区的高度
      const windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      //滚动条到底部的条件
      if (scrollTop + windowHeight == scrollHeight) {
        this.loadMore(); // 加载的列表数据
        this.showLoad = true;
      }else{
        this.showLoad = false;
      }
    },
    //    触发加载
    loadMore() {
      this.$emit("infinite-scroll");
    }
  },
  mounted() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="less" scoped>
.infinite-scroll {
  .load-container {
    text-align: center;
    position: relative;
    height: 50px;
    width: 50px;
    margin: 0 auto;
    span {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background:#78797d;
      position: absolute;
      animation: load 1.04s ease infinite;
      &:nth-child(1) {
        left: 0;
        top: 50%;
        margin-top: -5px;
        animation-delay: 0.13s;
      }
      &:nth-child(2) {
        left: 7px;
        top: 7px;
        animation-delay: 0.26s;
      }
      &:nth-child(3) {
        left: 50%;
        top: 0;
        margin-left: -5px;
        animation-delay: 0.39s;
      }
      &:nth-child(4) {
        top: 7px;
        right: 7px;
        animation-delay: 0.52s;
      }
      &:nth-child(5) {
        right: 0;
        top: 50%;
        margin-top: -5px;
        animation-delay: 0.65s;
      }
      &:nth-child(6) {
        right: 7px;
        bottom: 7px;
        animation-delay: 0.78s;
      }
      &:nth-child(7) {
        bottom: 0;
        left: 50%;
        margin-left: -5px;
        animation-delay: 0.91s;
      }
      &:nth-child(8) {
        bottom: 7px;
        left: 7px;
        animation-delay: 1.04s;
      }
    }
  }
  .load-text{
    text-align: center;
    padding: 8px 0;
    font-size: 12px;
  }
}
@keyframes load {
  0% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(0.3);
    opacity: 0.5;
  }
}
</style>