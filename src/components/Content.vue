<template>
  <transition name="slide-right">
    <div class="content">
      <div
        class="content-wrapper"
        v-if="bookAvailable"
      >
        <div
          class="content-item"
          v-for="(item, index) of navigation.toc"
          :key="index"
          @click="jumpTo(item.href)"
        >
          <span class="text">{{ item.label }}</span>
        </div>
      </div>
      <div
        class="empty"
        v-else
      >加载中...</div>
    </div>
  </transition>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: {
    ifShowContent: Boolean,
    bookAvailable: {
      type: Boolean,
      default: false
    },
    navigation: Object
  },
  methods: {
    jumpTo (href) {
      this.$emit('jumpTo', href)
    }
  },
  components: {}
}
</script>
<style lang='scss' scoped>
@import "@/assets/styles/global.scss";
.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  height: 100%;
  z-index: 103;
  background: white;
  .content-wrapper {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    .content-item {
      width: 100%;
      cursor: pointer;
      height: px2rem(40);
      line-height: px2rem(40);
      padding-left: px2rem(30);
      .text{
        flex: 1;
        font-size: px2rem(14);
      }
    }
  }
  .empty {
    width: 100%;
    height: 100%;
    font-size: px2rem(14);
    @include center;
  }
}
</style>
