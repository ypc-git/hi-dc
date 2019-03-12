<template>
  <div class="login">
    <Skip countdown="5"/>
    <div class="logo">
        <img src="../../assets/tx1.png"/>
    </div>
    <div class="from">
        <cube-input v-model="tel.telText" :placeholder="tel.placeholder" :type="tel.type" :clearable="tel.clearable"/>
        <span class="errText">{{tel.errText}}</span>
        <cube-input v-model="password.passwordText" :placeholder="password.placeholder" :type="password.type" :eye="password.eye" :clearable="password.clearable"/>
        <span class="errText">{{password.errText}}</span>
        <cube-button @click="submit">登录</cube-button>
    </div>
  </div>
</template>

<script>
import Skip from "@/components/common/Skip.vue";

export default {
  components: {
    Skip
  },
  data() {
    return {
      result: [undefined, undefined, undefined],
      tel: {
        telText: '',
        placeholder: '请输入手机',
        type: 'tel',
        clearable: {
            visible: true,
            blurHidden: true
        },
        errText:''
      },
      password: {
        passwordText: '',
        placeholder: '请输入内容',
        type: 'password',
        eye: {
            open: false,
            reverse: false
        },
        clearable: {
            visible: true,
            blurHidden: true
        },
        errText:''
      },
      trigger: false
    }
  },
  methods: {
    submit() {

    }
  }
}
</script>
<style lang="stylus" scoped>
.login
  height 100%
.from
   padding 0 12% 12% 12%
.logo
   display flex
   justify-content center
   padding 10% 0
.logo img 
   width 8rem
   height 8rem
.cube-input
   margin-bottom 1rem
.errText
  color red
</style>

