<template>
 <transition name="slide-down">
    <div class="title-wrapper"
    v-show="ifTitleAndMenuShow">
      <div class="left">
        <span class="icon-back icon"></span>
      </div>
      <div class="right">
        <div class="icon-wrapper">
          <span class="icon-cart icon"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-person icon"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-more icon"></span>
        </div>
      </div>
    </div>
   </transition>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    ifTitleAndMenuShow: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss" >
 @import '../assets/styles/global.scss';
  .title-wrapper{
    position: absolute;
    left: 0;
    right: 0;
    z-index: 101;
    display: flex;
    width: 100%;
    background: white;
    height: px2rem(48);
    box-shadow: 0 px2rem(8) px2rem(8) rgba(0,0,0,.15);
    .left{
      flex: 0 0 px2rem(60);
      @include center;
    }
    .right{
      flex:1;
      display: flex;
      justify-content: flex-end;
      .icon-wrapper{
        flex : 0 0 px2rem(40);
        @include center;
        .icon-cart{
          font-size: px2rem(22);
        }
      }
    }
  }
</style>
