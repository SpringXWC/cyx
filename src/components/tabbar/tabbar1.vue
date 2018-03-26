<template>
  <div class="tabbar">
   
       <a class="tabbar-item is-active">
         <span class="tabbar-item-icon">
            <img src="../../assets/image/homePage_select.png" alt="首页">
         </span>
         <span class="tabbar-item-text">首页</span>
       </a>
       <a class="tabbar-item">
         <span class="tabbar-item-icon">
           <img src="../../assets/image/service.png" alt="客服中心">
         </span>
         <span class="tabbar-item-text">客服中心</span>
       </a>
       <a class="tabbar-item">
         <span class="tabbar-item-icon">
           <img src="../../assets/image/message.png" alt="消息中心" >
         </span>
         <span class="tabbar-item-text">消息中心</span>
       </a>
       <a class="tabbar-item">
         <span class="tabbar-item-icon">
           <img src="../../assets/image/personal.png" alt="个人中心" >
         </span>
         <span class="tabbar-item-text">个人中心</span>
       </a>

  </div>
</template>
<script>
   export default{
     data(){
        return{
          

            
        }
     },
     methods:{
       
          }
        }
   
</script>
<style lang="scss" scoped>
  $bakcgroundColor:#1f87c6;
   .tabbar{
       display:flex;
       flex-flow:row nowrap;
       position:fixed;
       bottom:0;
       width: 100%;
       background-color:#fff;
        .tabbar-item{
           flex:1;
           text-align: center;
              .tabbar-item-icon{
                  display: block;
                  height: 1.05rem;
                  img{
                     width: 0.48rem;
                     height:0.48rem;
                  }
              }
              .tabbar-item-text{
                display: block;
                font-size:0.2rem;
                color:#999;
              }
              &.is-active{
                  .tabbar-item-text{
                     color:$bakcgroundColor;
                  }
              }
        }
   }
</style>