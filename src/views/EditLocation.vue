<template>
    <div class="EditLocation-page">
      <header class="header">
        <h1>{{title}}</h1>
        <i @click="back" class="cubeic-back"></i>
      </header>
      <h1 class="tip"><span class="icon iconfont icon-ERP_zhuyi"></span>{{msg2}}</h1>
      <form>
        <div class="input-group">
          <label>联系人</label>
          <input v-model="from_data.name" name="name"/>
        </div>
        <div class="input-group">
          <label>手机号码</label>
          <input v-model="from_data.tel" name="tel"/>
        </div>
        <div class="input-group">
          <label>收货地址</label>
          <input v-model="from_data.location" type="button" @click="showAddressPicker"/>
        </div>
        <div class="textarea-group">
          <label>详细地址</label>
          <textarea v-model="from_data.d_location" name="d_location"></textarea>
        </div>
        <cube-button class="button" @click="submit">保存</cube-button>
      </form>
    </div>
</template>

<script type="text/ecmascript-6">
import { provinceList, cityList, areaList } from '@/datas/area'

const addressData = provinceList
addressData.forEach(province => {
  province.children = cityList[province.value]
  province.children.forEach(city => {
    city.children = areaList[city.value]
  })
})
export default {
  data() {
    return {
      title:"编辑地址",
      msg2:"为了提高发货速度，请填写您的真实姓名",
      from_data:{
        name:"",
        tel:"",
        location:"",
        d_location:""
      }
    }
  },
  mounted () {
    this.addressPicker = this.$createCascadePicker({
      title: 'City Picker',
      data: addressData,
      onSelect: this.selectHandle,
      onCancel: this.cancelHandle
    })
  },
  methods: {
    back() {
      this.$router.back()
    },
    submit(){
      console.log(this.from_data)
    },
    showAddressPicker() {
      this.addressPicker.show()
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        type: 'warn',
        content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
        icon: 'cubeic-alert'
      }).show()
    },
    cancelHandle() {
      this.$createToast({
        type: 'correct',
        txt: 'Picker canceled',
        time: 1000
      }).show()
    }
  },
  components: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.EditLocation-page
    width 100%
    height 100%
    .header
      position relative
      height 44px
      line-height 44px
      text-align center
      background-color #edf0f4
      -webkit-backface-visibility hidden
      backface-visibility hidden
      z-index 5
      h1
        font-size 16px
        font-weight 700
      .cubeic-back
        position absolute
        top 0
        left 0
        padding 0 15px
    .tip
      width 100%
      line-height 20px
      background-color #dcdcdc
      color #50585d
      font-size 14px
      span
        margin-right 5px
    .input-group
      width 100%
      height 40px
      line-height 40px
      border-bottom 1px solid #ddd
      display flex
      label
        width 25%
        display block
      input 
        width 75%
        padding 10px
        outline none
        background-color #fff
    .textarea-group
      width 100%
      height 70px
      display flex
      border-bottom 1px solid #ddd
      label
        width 25%
        padding-top 10px
        display block
      textarea
        width 75%
        height 50px
        padding 10px
        outline none
        border 0
        font-size 16px
        font-family Arial
    .button
      width 90%
      margin 30px 5%
</style>
