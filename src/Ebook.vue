<template>
 <div class="ebook">
   <title-bar :ifTitleAndMenuShow="ifTitleAndMenuShow"></title-bar>
   <div class="read-wrapper">
     <div id="read"></div>
     <div class="mask">
       <div class="left" @click="prevPage"></div>
       <div class="center" @click="toggleTitleAndMenu"></div>
       <div class="right" @click="nextPage"></div>
     </div>
   </div>
   <menu-bar :ifTitleAndMenuShow="ifTitleAndMenuShow"
    ref="menuBar"
    :fontSizeList="fontSizeList"
    :defaultFontSize="defaultFontSize"
    @setFontSize='setFontSize'
    :themeList = "themeList"
    :defaultTheme = "defaultTheme"
    @setTheme = "setTheme"
    :bookAvailable = 'bookAvailable'
    @onProgressChange= "onProgressChange"
    @jumpTo='jumpTo'
    :navigation='navigation'
    @closeAll='closeAll'
  ></menu-bar>
 </div>
</template>

<script type="text/ecmascript-6">
import Epub from 'epubjs'
import TitleBar from './components/TitleBar'
import MenuBar from './components/MenuBar'
const DOWNLOAD_URL = '/static/2018_Book_AgileProcessesInSoftwareEngine.epub'
global.ePub = Epub

export default {
  components: {
    TitleBar,
    MenuBar
  },
  data () {
    return {
      ifTitleAndMenuShow: false,
      fontSizeList: [
        {fontSize: 12},
        {fontSize: 14},
        {fontSize: 16},
        {fontSize: 18},
        {fontSize: 20},
        {fontSize: 22},
        {fontSize: 24}
      ],
      defaultFontSize: 16,
      themeList: [
        {
          name: 'default',
          style: {
            body: {
              'color': '#000',
              'background': '#fff'
            }
          }
        },
        {
          name: 'eye',
          style: {
            body: {
              'color': '#000',
              'background': '#ceeaba'
            }
          }
        },
        {
          name: 'night',
          style: {
            body: {
              'color': '#fff',
              'background': '#000'
            }
          }
        },
        {
          name: 'gold',
          style: {
            body: {
              'color': '#000',
              'background': 'rgb(241,236,226)'
            }
          }
        }
      ],
      defaultTheme: 0,
      // 图书是否可用状态
      bookAvailable: false,
      navigation: {}
    }
  },
  methods: {
    // 根据链接跳转到指定位置
    jumpTo (herf) {
      this.rendition.display(herf)
      this.hideTitleAndMenu()
    },
    hideTitleAndMenu () {
      // 隐藏标题栏和菜单栏
      this.ifTitleAndMenuShow = false
      // 隐藏菜单栏弹出的设置栏
      this.$refs.menuBar.hideSetting()
      // 隐藏目录
      this.$refs.menuBar.hideContent()
    },
    // progress 进度条的数值 0-100
    onProgressChange (progress) {
      const percentage = progress / 100
      const location = percentage > 0 ? this.locations.cfiFromPercentage(percentage) : 0
      this.rendition.display(location)
    },
    setTheme (index) {
      this.themes.select(this.themeList[index].name)
      this.defaultTheme = index
    },
    registerTheme () {
      this.themeList.forEach(theme => {
        this.themes.register(theme.name, theme.style)
      })
    },
    setFontSize (fontSize) {
      this.defaultFontSize = fontSize

      if (this.themes) {
        console.log(this.themes)

        this.themes.fontSize(fontSize + 'px')
      }
    },
    toggleTitleAndMenu () {
      this.ifTitleAndMenuShow = !this.ifTitleAndMenuShow
      if (!this.ifTitleAndMenuShow) {
        this.$refs.menuBar.hideSetting()
      }
    },
    prevPage () {
      // Rendition.prev
      if (this.rendition) {
        this.rendition.prev()
      }
    },
    nextPage () {
      // Redition.next
      if (this.rendition) {
        this.rendition.next()
      }
    },
    // 电子书的解析和渲染
    showEpub () {
      // 生成Book
      this.book = new Epub(DOWNLOAD_URL)
      // 生成Rendition,通过Book.renderTo
      this.rendition = this.book.renderTo('read', {
        width: window.innerWidth,
        height: window.innerHeight
      })
      // 通过rendtion.display渲染电子书
      this.rendition.display()
      // 获取Theme对象
      this.themes = this.rendition.themes
      // 设置默认字体
      this.setFontSize(this.defaultFontSize)
      // this.themes.register(name,styles)
      // this.themes.select(name)
      this.registerTheme()
      this.setTheme(this.defaultTheme)
      // 获取locations方法
      // 通过epubjs的钩子函数来实现
      this.book.ready.then(() => {
        this.navigation = this.book.navigation
        console.log(this.navigation)
        return this.book.locations.generate()
      }).then(result => {
        this.locations = this.book.locations
        this.bookAvailable = true
      })
    },
    closeAll () {
      this.toggleTitleAndMenu()
    }
  },
  mounted () {
    this.showEpub()
  }
}
</script>

<style scoped lang="scss" >
  @import './assets/styles/global.scss';
  .ebook{
    position: relative;
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
    .read-wrapper{
      .mask{
        position:absolute;
        top: 0;
        left: 0;
        z-index: 100;
        display: flex;
        width: 100%;
        height:100%;
        .left{
          flex: 0 0 px2rem(100);
        }
        .center{
          flex: 1;
        }
        .right{
          flex: 0 0 px2rem(100);
        }
      }
    }
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
  }
</style>
