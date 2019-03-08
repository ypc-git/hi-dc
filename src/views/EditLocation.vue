<template>
    <div class="EditLocation-page">
      <BackHead :title="title"/>
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
import BackHead from "@/components/common/BackHead.vue"
import { provinceList, cityList, areaList } from '@/datas/area'
import locationData from '@/datas/data-locations.json'

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
      msg2:"为了提高配送速度，请填写您的真实姓名",
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
      title: '',
      data: addressData,
      onSelect: this.selectHandle,
      onCancel: this.cancelHandle
    });
    console.log(this.$route.query.ID)
    if(this.$route.query.ID!=undefined && this.$route.query.ID!=null && this.$route.query.ID!=""){
          locationData.locations.forEach(location=>{
            if(this.$route.query.ID == location.id){
              this.from_data.name = location.name
              this.from_data.tel = location.tel
              this.from_data.location = location.location
              this.from_data.d_location = location.d_location
            }
          })
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    submit(){
      console.log(this.from_data)
      this.$router.back()
    },
    showAddressPicker() {
      this.addressPicker.show()
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.from_data.location = selectedText.join(' ');
      console.log(selectedVal.join(', '));
      console.log(selectedIndex.join(', '))
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
    BackHead
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.EditLocation-page
    width 100%
    height 100%
    .tip
      width 100%
      line-height 20px
      background-color #e0e0e0
      color #50585d
      font-size 14px
      span
        margin-right 5px
    .input-group
      width 100%
      height 45px
      line-height 45px
      border-bottom 1px solid #ddd
      display flex
      font-size 14px
      label
        width 25%
        display block
      input 
        width 75%
        padding 10px
        outline none
        background-color #fff
        text-align left 
        color #3a4246
    .textarea-group
      width 100%
      height 100px
      display flex
      border-bottom 1px solid #ddd
      font-size 14px
      label
        width 25%
        padding-top 10px
        display block
      textarea
        width 75%
        padding 10px
        outline none
        border 0
        font-family Arial
        color #3a4246
        line-height 22px
    .button
      width 90%
      margin 30px 5%
</style>
