<template>
    <div>
        <div class="location-lsit" v-for="(item,index) in locationData" :key="index">
            <div class="location-top" @click="toEidt(item.id)">
                <div class="location-p">
                    <h1>{{item.name}}   {{item.tel}}</h1>
                    <p>{{item.locationText}}</p>
                </div>
                <span class="icon iconfont icon-bianji2"></span>
            </div>
            <div class="location-bott">
                <Radio class="radio" :msg="msg1" :name="name" :isActive="selectedNum == index ? true:false"  @click.native="changeActive(index,item.id)"/>
                <span class="icon iconfont icon-iconfontshanchu2" @click="toDel(item.index)"></span>
            </div>
        </div>
    </div>
</template>
<script>
import router from "@/router.js"
import Radio from "@/components/common/Radio.vue"
export default {
    data(){
        return{
           msg1:"默认",
           name:"1",
           selectedNum:""
        }
    },
    props: {
       locationData:{
           type:Array
       }
    },
    components: {
      Radio
    },
    methods: {
        toEidt(id){
            router.push({ path: 'editLocation', query: { ID: id }})
        },
        toDel(index){
            this.locationData.splice(index,1);
        },
        changeActive(index,id){
            this.selectedNum = index;
            console.log(id);
        }
    }
}
</script>
<style lang="stylus" >
.location-lsit
    background-color #fff
    margin-bottom 5px
    .location-top
        border-bottom 1px solid #e4e4e4
        padding 10px
        line-height 20px
        min-height 45px
        .location-p
            float left
            text-align left
            width 80% 
            p
              font-size 14px
              color #959ca2
        span
            float right
            padding 10px
    .location-bott
        padding 10px 20px 10px 10px
        height 15px
        .radio
            float left
            font-size 14px
        span
            float right
</style>

