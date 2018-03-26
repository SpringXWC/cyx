<template>
   <div class="slide">
     <transition-group tag="ul" class="clearfix" name="item">
       <li v-for="(item,index) in images" :key="index" v-show="index===mark">
         <a :href="item.href">
           <img :src="item.src">
         </a>
       </li>
     </transition-group>
     <div class="bullet">
       <span v-for="(item,index) in images.length" :class="{'active':index === mark}" @click="change(index)" :key="index"></span>
     </div>
   </div>
  
<script>
  export default{
    // props:["images"],
    data(){
      return{
        mark:0,
      }
    },
    methods:{
      change:function(i){
         this.mark = i;
      },
      autoPlaty:function(){
        this.mark++;
        if(this.mark === 3){
          this.mark = 0;
          return;
        }
      },
      play:function(){
        setInterval(this.autoPlaty,3000);
      }
    },
    created:function(){
        this.play();
    }
  }
</script>
<style lang="scss">
  .slide{
    overflow:hidden;
    position:relative;
    top:0.88rem;
    height: 2.6rem;
    width: 7.5rem;
    ul{
      position:relative;
      overflow: hidden;
      height: 100%;
      li{
        float:left;
        width: 100%;
        position:absolute;
        a{
          width: 100%;
          height:100%;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .bullet{
      position:absolute;
      bottom:0.2rem;
      left:3rem;
      cursor:pointer;
       span{
        content:"";
        display:inline-block;
        width: 0.15rem;
        height: 0.15rem;
        border-radius:100%;
        border:0.01rem solid #fff;
        background-color:rgba(0,0,0,0);
        margin:0 0.1rem;
        z-index: 10;
      }
      .active{
        background-color:#fff;
      }
    }
 }
.item-enter-active{
  transform:translateX(0);
  transition:all 1s ease;
}
.item-leave-active{
  transform:translateX(-100%);
  transition:all 1s ease;
}
.item-enter{
  transform:translateX(100%);
}
.item-leave{
  tansform:translateX(0);
}
</style>