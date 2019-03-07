<template>
    <div>
        <div class="location-lsit" v-for="(item,index) in locationData" :key="index">
            <div class="location-top">
                <div class="location-p">
                    <h1>{{item.name}}   {{item.tel}}</h1>
                    <p>{{item.locationText}}</p>
                </div>
                <span class="icon iconfont icon-bianji2" @click="toEidt(item.id)"></span>
            </div>
            <div class="location-bott">
                <Radio class="radio" :msg="msg1" :name="name" :isActive="selectedNum == index ? true:false"  @click.native="changeActive(index,item.id)"/>
                <span class="icon iconfont icon-iconfontshanchu2" @click="toDel(index,item.id)"></span>
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
        toDel(index,id){
            this.locationData.splice(index,1);
            console.log("index:"+index+"id:"+id);
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
        border-bottom 0.2px solid #e4e4e4
        padding 10px 15px 10px 20px
        line-height 20px
        display: -webkit-flex
        display: flex
        justify-content: space-between
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
        padding 10px 25px 10px 20px
        height 15px
        display: -webkit-flex
        display: flex
        justify-content: space-between
        .radio
            font-size 14px
            display: flex;
</style>

