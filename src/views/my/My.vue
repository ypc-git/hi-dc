<template>
  <div class="my">
    <div class="scroll-wrapper">
      <div class="draggable-header-view" @mousedown="startDrag" @touchstart="startDrag" @mousemove="onDrag" @touchmove="onDrag" @mouseup="stopDrag" @touchend="stopDrag" @mouseleave="stopDrag">
        <svg class="bg" width="100%" height="100%">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#00AAFF;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#0085FF;stop-opacity:1" />
              </linearGradient>
            </defs>
            <path :d="headerPath" fill="url(#grad1)"></path>
        </svg>
        <div class="header">
          <div class="header-sz">我的</div>
          <div class="header-gr">
            <div class="header-gr-l"><img width="80" height="80" src="http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114"/></div>
            <div class="header-gr-r">
              <div class="header-gr-rl">
                <p>尤鹏程</p>
                <p><span class="icon iconfont icon-shouji"></span>18256013225</p>
              </div>
              <div class="header-gr-rr">
                <span><span class="icon iconfont icon-arrow-right"></span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="content" :style="contentPosition">
            <div class="content-btns">
              <div class="content-btn">
                <p>200.00</p>
                <p>钱包</p>
              </div>
              <div class="content-btn">
                <p>5个</p>
                <p>红包</p>
              </div>
              <div class="content-btn">
                <p>120个</p>
                <p>金币</p>
              </div>
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
export default {
  data() {
    return {
      my:"my",
      dragging: false,
      w: document.body.clientWidth,
      h: document.body.clientHeight,
      c: {
          x: 200,
          y: 200
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
            return 'M0,0 L' + this.w + ',0 ' + this.w + ',200 Q' + this.c.x + ',' + this.c.y + ' 0,200';
        },
        contentPosition: function contentPosition() {
            var dy = this.c.y - 200;
            var dampen = dy > 0 ? 2 : 4;
            return {
                transform: 'translate3d(0,' + dy / dampen + 'px,0)'
            };
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
                this.c.x = 200 + (e.pageX - this.start.x);
                var dy = e.pageY - this.start.y;
                var dampen = dy > 0 ? 1.5 : 4;
                this.c.y = 200 + dy / dampen;
            }
        },
        stopDrag: function stopDrag() {
            if (this.dragging) {
                this.dragging = false;
                dynamics.animate(this.c, {
                    x: 200,
                    y: 200
                }, {
                    type: dynamics.spring,
                    duration: 700,
                    friction: 280
                });
            }
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
        height 160px
        .header-sz
          height 30px
          line-height 30px
          text-align left 
        .header-gr
          display flex
          height 135px
          padding-top: 1px;
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
            .header-gr-rl span
              padding-right 5px
            .header-gr-rr span
              font-size 30px
      .content 
        color #333
        height 100%
        .content-btns
          display flex
          .content-btn
            width 33.3%
            height 40px
            border-bottom 1px solid #eee
            border-right  1px solid #eee

</style>
