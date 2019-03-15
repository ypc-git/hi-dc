<template>
    <div class="order-form">
        <div v-for="(orderform,index) in orderforms" :key="index" class="orderform">
            <div class="orderform-left"><img :src="orderform.icon"/></div>
            <div class="orderform-right">
                <div class="orderform-right-h1">
                    <p>{{orderform.name}}</p>
                    <div>
                        <span class="icon iconfont icon-arrow-right"></span>
                        <span v-if="orderform.states=='1'">订单配送中</span>
                        <span v-if="orderform.states=='0'">订单已完成</span>
                    </div>
                </div>
                <div class="orderform-right-div">
                    <div v-for="orderformFood in orderform.orderformFoods" :key="orderformFood.index">
                        {{orderformFood.foodName}}
                        <span>X{{orderformFood.number}}</span>
                    </div>
                    <div class="orderform-right-pice">共{{orderform.orderformFoods.length}}件商品，实付：<span>￥19.05</span></div>
                </div>
                <div class="orderform-right-btn">
                    <div class="btns">再来一单</div>
                    <div class="btns-pj" v-show="orderform.states=='0'">评价</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
import orderformData from '@/datas/data-orderform.json'
export default {
    data () {
        return {
          orderforms:orderformData.orderformList
        }
    },
    props: {
      
    },
    mounted:function(){
       console.log(this.orderforms[0].orderformFoods); 
       console.log(this.orderforms[0].orderformFoods.length); 
    },
    methods: {

    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.orderform
   display flex
   width 100%
   height 100%
   border-bottom 1px solid #eee
   line-height 25px
   margin 10px 0
   .orderform-left
      width 20%
      img
        width -webkit-calc(100% - 20px)
        width -moz-calc(100% - 20px)
        width calc(100% - 20px)
        margin 0 10px
        background-color #f9e2bb
   .orderform-right
      width 80%
      padding 0 10px
   .orderform-right-h1
      display flex
      justify-content space-between
      font-size 16px
      line-height 30px
      //border-bottom 1px solid #f1f1f1
      div
       font-size 16px
   .orderform-right-div
      font-size 14px
      color #808080
      div
       display flex
       justify-content space-between
   .orderform-right-pice
      color #2d2d2d
      span
        color #000
   .orderform-right-btn
      display flex
      justify-content flex-end
      div
        padding 0 10px
        color #3a3939
        text-align center
        line-height 28px
        margin 10px
        border 1px solid #ddd
        border-radius 3px
      .btns-pj
          border 1px solid #f7ab73
          background: #f7ab73
          color #fff
</style>