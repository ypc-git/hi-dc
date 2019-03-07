<template>
    <div>
        {{msg}} <span class="icon iconfont " :class="{'icon-webicon19':isActive,'icon-webicon206':!isActive}"></span>
    </div>
</template>
<script>
export default {
    name:"radio",
    data(){
        return {
        }
    },
    props:{
        msg:{
           type:String,
           default:""
        },
        name:{
           type:String,
           default:""
        },
        isActive:{
           type:Boolean,
           efault:false
        }
    },
    methods:{

    }
}
</script>
<style lang="stylus" scoped>
.iconfont
    font-size 22px
    line-height 13px
</style>

