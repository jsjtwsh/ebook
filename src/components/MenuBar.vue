<template>
  <div class="menu-bar">
    <transition name="slide-up">
      <div class="menu-wrapper" v-show="ifTitleAndMenuShow" :class="{'hide-box-shadow':ifSettingShow || !ifTitleAndMenuShow}">
        <div class="icon-wrapper">
          <span class="icon-menu icon" @click="showSetting(3)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-progress icon" @click="showSetting(2)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-bright icon" @click="showSetting(1)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-a icon" @click="showSetting(0)">A</span>
        </div>
      </div>
    </transition>
    <transition name="slide-up">
      <div class="setting-wrapper" v-show="ifSettingShow">
        <!-- font-size -->
        <div class="setting-font-size" v-if="showTag ===0">
          <div class="preview" :style="{fontSize:fontSizeList[0].fontSize + 'px'}">A</div>
          <div class="select">
            <div class="select-wrapper"  v-for="(item,index) in fontSizeList"  :key="index"
            @click="setFontSize(item.fontSize)">
              <div class="line"></div>
              <div class="point-wrapper">
                <div class="point" v-show="defaultFontSize === item.fontSize">
                  <div class="small-point"></div>
                </div>
              </div>
              <div class="line"></div>
            </div>
          </div>
          <div class="preview" :style="{fontSize:fontSizeList[fontSizeList.length-1].fontSize + 'px'}">A</div>
        </div>
        <!-- color -->
        <div class="setting-theme" v-else-if="showTag ===1">
          <div class="setting-theme-item"
          v-for="(item,index) in themeList" :key="index" @click="setTheme(index)">
            <div class="preview" :style="{background:item.style.body.background}"
            :class="{'no-border':item.style.body.background !== '#fff'}"></div>
            <div class="text" :class="{'selected': index === defaultTheme}">{{item.name}}</div>
          </div>
        </div>
        <!-- progress -->
        <div class="setting-progress" v-else-if="showTag ===2">
          <div class="progress-wrapper">
            <input class="progress" type="range" max="100" min="0" step="1"
                                    @change="onProgressChange($event.target.value)"
                                    @input="onProgressInput($event.target.value)"
                                    :value ="progress" :disabled="!bookAvailable"
                                    ref="progress">
          </div>
        </div>
        <div class="text-wrapper" v-if="showTag === 2">
          <span>{{bookAvailable ?progress + '%' : '加载中...'}}</span>
        </div>
      </div>
    </transition>
    <transition name="slide-right">
      <content-view :ifShowContent="ifShowContent" v-show="ifShowContent" :navigation="navigation" :bookAvailable="bookAvailable" @jumpTo="jumpTo"></content-view>
    </transition>
    <transition name="fade">
      <div class="content-mask" v-show="ifShowContent" @click="hideConent"></div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import ContentView from '../components/Content'

export default {
  components: {
    ContentView
  },
  props: {
    ifTitleAndMenuShow: {
      type: Boolean,
      default: false
    },
    fontSizeList: {
      type: Array
    },
    defaultFontSize: Number,
    themeList: Array,
    defaultTheme: Number,
    bookAvailable: Boolean,
    navigation: Object
  },
  data () {
    return {
      ifSettingShow: false,
      showTag: 0,
      progress: 0, // 阅读进度
      ifShowContent: false // 目录
    }
  },
  methods: {
    jumpTo (target) {
      this.$emit('jumpTo', target)
      this.ifShowContent = false
    },
    hideConent () {
      this.ifShowContent = false
    },
    onProgressInput (progress) {
      this.progress = progress
      this.$refs.progress.style.backgroundSize = `$(this.progress)% 100%`
    },
    onProgressChange (progress) {
      this.$emit('onProgressChange', progress)
    },
    setTheme (index) {
      this.$emit('setTheme', index)
    },
    showSetting (tag) {
      if (tag === 3) {
        this.$emit('closeAll')
        this.ifShowContent = true
      } else {
        if ((this.showTag === tag) && this.ifSettingShow) {
          this.ifSettingShow = false
          return
        }
        this.ifSettingShow = true
        this.showTag = tag
      }
    },
    hideSetting () {
      this.ifSettingShow = false
    },
    setFontSize (fontSize) {
      console.log(1)
      this.$emit('setFontSize', fontSize)
    }
  }
}
</script>

<style scoped lang="scss" >
 @import '../assets/styles/global.scss';
  .menu-bar{
    .menu-wrapper{
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 101;
      display: flex;
      width: 100%;
      background: white;
      height: px2rem(48);
      box-shadow: 0 px2rem(-8) px2rem(8) rgba(0,0,0,.15);
      &.hide-box-shadow{
        box-shadow: none;
      }
      .icon-wrapper{
        flex:1;
        @include center;
      }
      .icon-progress{
        font-size: px2rem(28);
      }
      .icon-bright{
        font-size: px2rem(24);
      }
    }
    .setting-wrapper{
      position:absolute;
      bottom:px2rem(48);
      left: 0;
      width:100%;
      height:px2rem(60);
      z-index: 101;
      background: white;
      box-shadow: 0 px2rem(-8) px2rem(8) rgba(0,0,0,.15);
      .setting-font-size{
        display: flex;
        height: 100%;
        // align-items: center;
        .preview{
          flex: 0 0 px2rem(40);
          @include center;
        }
        .select{
          display: flex;
          flex:1;
          .select-wrapper{
            display: flex;
            align-items: center;
            flex:1;
            &:first-child{
             .line{
               &:first-child{
                 border-top:none;
               }
             }
            }
            &:last-child{
              .line{
                &:last-child{
                  border-top:none;
                }
              }
            }
            .line{
              display: flex;
              flex:1;
              height: 0;
              border-top: px2rem(1) solid #ccc;
            }
            .point-wrapper{
              position: relative;
              flex:0 0 0;
              height:px2rem(7);
              width:0;
              border-left: px2rem(1) solid #ccc;
              .point{
                position: absolute;
                left:px2rem(-8);
                top:px2rem(-10);
                width:px2rem(20);
                height:px2rem(20);
                border-radius:50%;
                background:white;
                border: 1px solid #ccc;
                box-shadow: 0 px2rem(4) px2rem(4) rgba(0,0,0,.15);
                @include center;
                .small-point{
                  width:px2rem(5);
                  height: px2rem(5);
                  background:black;
                  border-radius: 50%;
                }
              }
            }
          }
        }

      }
      .setting-theme{
        height: 100%;
        display: flex;
        .setting-theme-item{
          flex:1;
          display: flex;
          flex-direction: column;
          padding:px2rem(5);
          box-sizing: border-box;
          .preview{
            flex:1;
            border: px2rem(1) solid #ccc;
            box-sizing: border-box;
          &.no-border{
            border:none;
          }
          }
          .text{
            flex:0 0 px2rem(20);
            font-size:px2rem(14);
            color:#ccc;
            @include center;
            &.selected{
              color:#333;
            }
          }
        }
      }
      .setting-progress{
        position: relative;
        width: 100%;
        height: 100%;
        .progress-wrapper{
          width: 100%;
          height: 100%;
          @include center;
          padding:0 px2rem(30);
          box-sizing: border-box;
          .progress{
            width: 100%;
            -webkit-appearance: none;
            height: px2rem(2);
            background: -webkit-linear-gradient(#999, #999) no-repeat, #ddd;
            background-size: 0 100%;
            &.focus{
              outline: none;
            }
            &::-webkit-slider-thumb {
              -webkit-appearance: none;
              height: px2rem(20);
              width: px2rem(20);
              border-radius: 50%;
              background: white;
              box-shadow: 0 px2rem(4) px2rem(4) 0 rgba(0, 0, 0, 0.15);
              border: px2rem(1) solid #ddd;
            }
          }
        }
      }
      .text-wrapper {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        color: #333333;
        font-size: px2rem(22);
        text-align: center;
      }
    }
    .content-mask{
      position: absolute;
      top: 0;
      left: 0;
      z-index: 101;
      display: flex;
      width: 100%;
      height: 100%;
      background: rgba(50,50,50,0.8);
    }
  }

</style>
