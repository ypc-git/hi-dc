<template>
  <div class="my">
    <div class="scroll-wrapper">
      <div class="draggable-header-view" @mousedown="startDrag" @touchstart="startDrag" @mousemove="onDrag" @touchmove="onDrag" @mouseup="stopDrag" @touchend="stopDrag" @mouseleave="stopDrag">
        <svg class="bg" width="100%" height="100%">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#FBAE4C;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#FD7D3D;stop-opacity:1" />
              </linearGradient>
            </defs>
            <path :d="headerPath" fill="url(#grad1)"></path>
        </svg>
        <div class="header" :style="{height:headerHeight + 'px' }">
          <div class="header-sz">我的</div>
          <div class="header-gr">
            <div class="header-gr-l"><img width="80" height="80" src="" :onerror="defaultImg" /></div>
            <div class="header-gr-r">
              <div class="header-gr-rl">
                <p>尤鹏程</p>
                <p><span class="icon iconfont icon-shouji"></span>18256013225</p>
              </div>
              <div class="header-gr-rr">
                <span class="icon iconfont icon-arrow-right"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="content" :style="contentPosition">
            <div class="content-btns">
              <div class="content-btn">
                <p class="content-btn-qb">20.00元</p>
                <p>钱包</p>
              </div>
              <div class="content-btn">
                <p class="content-btn-hb">5个</p>
                <p>红包</p>
              </div>
              <div class="content-btn">
                <p class="content-btn-jb">120个</p>
                <p>金币</p>
              </div>
            </div>
            <div class="content-bars">
              <div @click="toLocation()"><span class="icon iconfont icon-dingwei6"></span>收货地址</div>
              <div><span class="icon iconfont icon-shoucang1"></span>我的收藏</div>
            </div>
        </div>
      </div>
    </div>
    <Tab :labelDefault="my"/>
  </div>
</template>
<script>
import Tab from "@/components/home/Tab.vue"
import dynamics from "dynamics.js"
import router from "@/router.js"
export default {
  data() {
    return {
      my:"my",
      defaultImg: 'this.src="' + require('../../assets/tx1.png') + '"',
      dragging: false,
      w: document.body.clientWidth,
      h: document.body.clientHeight,
      c: {
          x: document.body.clientHeight/3,
          y: document.body.clientHeight/3
      },
      start: {
          x: 0,
          y: 0
      }
    }
  },
  components: {
    Tab
  },
  computed: {
    headerPath: function headerPath() {
        return 'M0,0 L' + this.w + ',0 ' + this.w + ',' + this.h/3 + ' Q' + this.c.x + ',' + this.c.y + ' 0,' + this.h/3 + '';
    },
    contentPosition: function contentPosition() {
        var dy = this.c.y - this.h/3;
        var dampen = dy > 0 ? 2 : 4;
        return {
            transform: 'translate3d(0,' + dy / dampen + 'px,0)'
        };
    },
    headerHeight:function headerHeight(){
        return (this.h/3 - 40);
    }
  },
  methods: {
      startDrag: function startDrag(e) {
          e = e.changedTouches ? e.changedTouches[0] : e;
          this.dragging = true;
          this.start.x = e.pageX;
          this.start.y = e.pageY;
      },
      onDrag: function onDrag(e) {
          e = e.changedTouches ? e.changedTouches[0] : e;
          if (this.dragging) {
              this.c.x = this.h/3 + (e.pageX - this.start.x);
              var dy = e.pageY - this.start.y;
              var dampen = dy > 0 ? 1.5 : 4;
              this.c.y = this.h/3 + dy / dampen;
          }
      },
      stopDrag: function stopDrag() {
          if (this.dragging) {
              this.dragging = false;
              dynamics.animate(this.c, {
                  x: this.h/3,
                  y: this.h/3
              }, {
                  type: dynamics.spring,
                  duration: 700,
                  friction: 280
              });
          }
      },
      toLocation(){
          router.push({ path: 'location', query: { plan: 'location' }})
      }
  }
}
</script>
<style lang="stylus" scoped>
.my
  height -webkit-calc(100% -50px)
  height -moz-calc(100% - 50px)
  height calc(100% - 50px)
  .scroll-wrapper
    height 100% 
    .draggable-header-view 
      background-color #fff                                         
      width 100%
      height 100%
      overflow hidden
      position relative
      font-size 16px
      -webkit-user-select none
      -moz-user-select none
      -ms-user-select none
      user-select none
      .bg
        position absolute
        top 0
        left 0
        z-index 0
      .header
        position relative
        z-index 1
        padding 20px
        color #fff
        .header-sz
          height 30px
          line-height 30px
          text-align left 
        .header-gr
          display flex
          height 135px
          .header-gr-l
            width 30%
            display flex
            align-items center
            img 
              background #fff
              border-radius 50%
          .header-gr-r
            display flex
            justify-content space-between
            width 70%
            align-items center
            line-height 30px
            text-align left 
            .header-gr-rr span
              font-size 30px
      .content 
        color #636363
        height 100%
        background #F5F5F5
        .content-btns
          display flex
          background #FFF
          .content-btn
            width 33.3%
            padding 10px
            line-height 25px
            border-bottom 1px solid #eee
            border-right  1px solid #eee
            p
             font-size 14px
            .content-btn-qb
             color #339ce8
             font-size 18px
            .content-btn-hb
             color #FF5F3E
             font-size 18px
            .content-btn-jb
             color #FFA200
             font-size 18px
        .content-bars
          border-top 1px solid #eee
          margin-top 10px
          background #FFF
          div
            display flex
            padding 0 20px
            line-height 40px
            border-bottom 1px solid #eee
            span
              width 30px
              text-align left 
              &.icon-dingwei6
                color #94D94A
                font-size 18px
              &.icon-shoucang1
                color #FF5F3E
</style>
