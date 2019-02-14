<template>
    <div>
        <span class="icon iconfont " :class="{'icon-webicon19':isActive,'icon-webicon206':!isActive}" @click="changeActive()"></span>{{msg}}
    </div>
</template>
<script>
export default {
    name:"radio",
    data(){
        return {
          isActive: false
        }
    },
    props:{
        msg:{
           type:String
        }
    },
    methods:{
        changeActive(){
            this.isActive = !this.isActive
        }
    }
}
</script>
<style lang="stylus" scoped>
.iconfont
    font-size 22px
    line-height 16px
</style>

