<template>
   <div class="swipe bar-slider">
     <div class="swipe-wrap">
       <div v-for="item in swipeInfo">
         <a :href="item.href">
           <img :src= "item.url">
         </a>
       </div>
     </div>
     <div class="pagination">
       <span class="swipe-pagination-switch swipe-active-switch" @click="slideToCur(0)"></span>
       <span class="swipe-pagination-switch" @click="slideToCur($index+1)" v-for="item in slideNum"></span>
     </div>
   </div>
</template>
<script>
  export default{
     props:["swipeInfo"],
     data(){
       return{
          mySwipe:{},
          slideNum:{},
       }
     },
     mouthod:function(){

       var _this = this;
       _this.$nextTick(function(){
          var slides = _this.$els.swipe.getElementsByClassName("swipe-pagination-switch");
       _this.mySwipe = new Swipe(_this.$els.swipe,{
          startSlide:0,
          continuous:true,
          speed:1000,
          auto:4000,
          // autoPlay:true,
          stopPropagation:false,
          callback:function(index,elem){
            for(var i = 0; i < slides.length; i++){
               if(i != index){
                slides[i].style.backgroundColor = "rgba(0,0,0,0)";
               }else{
                 slides[index].style.backgroundColor = "#fff";
               }
            }
          },
       });
         _this.slideNum = _this.mySwipe.getNumSlides() - 1;
       })
     
     },
     methods:{
       slideToCur:function(index){
        var _this = this;
        _this.mySwipe.slide(index,300);
       }
     }

  }
</script>
<style lang="scss">
.swipe{
  overflow:hidden;
  position:relative;
  top:0.88rem;
  height: 2.6rem;
  width: 7.5rem;
  .swipe-wrap{
      position:relative;
      overflow: hidden;
      height: 100%;
      div{
        float:left;
        width: 100%;
        position:absolute;
        margin:0;
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
    .pagination{
      text-align:center;
      position:absolute;
      bottom:0.1rem;
      cursor:pointer;
      .swipe-pagination-switch{
        content:"";
        display:inline-block;
        width: 0.1rem;
        height: 0.1rem;
        border-radius:50%;
        background-color:rgba(0,0,0,0);
        /*margin:0 0.08rem;*/
        z-index: 10;
        &:first-child{
          background-color:#fff;
        }
      }
      .swipe-active-switch{
        background-color:#fff;
      }
    }
}

/*  .swipe{
    overflow: hidden;
    visibility:hidden;
    position:relative;
    height: 2.6rem;
    .swipe-wrap{
      position:relative;
      overflow: hidden;
      height: 100%;
      div{
        float:left;
        width: 100%;
        position:relative;
        margin:0;
        a{
          width: 100%;
          height:100%;
          background-color: pink;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .pagination{
      text-align:center;
      position:relative;
      bottom:0.4rem;
      cursor:pointer;
      .swipe-pagination-switch{
        content:"";
        display:inline-block;
        width: 0.08rem;
        height: 0.08rem;
        border-radius:50%;
        background-color:rgba(0,0,0,0);
        margin:0 0.08rem;
        z-index: 10;
        &:first-child{
          background-color:#fff;
        }
      }
      .swipe-active-switch{
        background-color:#fff;
      }
    }
  } */ 
</style>