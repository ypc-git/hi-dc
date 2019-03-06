<template>
    <div>
        <span class="icon iconfont " :class="{'icon-webicon19':isActive,'icon-webicon206':!isActive}"></span>
        {{msg}}
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
           type:String
        },
        name:{
           type:String,
           default:""
        },
        isActive:{
           type:Boolean
        }
    },
    methods:{

    }
}
</script>
<style lang="stylus" scoped>
.iconfont
    font-size 22px
    line-height 16px
</style>

