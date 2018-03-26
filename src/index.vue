
<template>
  <div>
  <!-- 中间部分 -->
    <router-view></router-view>
  <!-- 底部 -->
    <tabbar v-model="select">
      <tabbar-item id="indexPage" isRouter>
        <img src="./assets/image/homePage.png" alt="首页" slot="icon-normal">
        <img src="./assets/image/homePage_select.png" alt="首页" slot="icon-active">
        首页
      </tabbar-item> 
       <tabbar-item id="service" isRouter>
        <img src="./assets/image/service.png" alt="客服中心" slot="icon-normal">
        <img src="./assets/image/service_select.png" alt="客服中心" slot="icon-active">
        客服中心
      </tabbar-item>
      <tabbar-item id="message" isRouter>
        <img src="./assets/image/message.png" alt="消息中心" slot="icon-normal">
        <img src="./assets/image/message_select.png" alt="消息中心" slot="icon-active">
        消息中心
      </tabbar-item>
      <tabbar-item id="personal" isRouter>
        <img src="./assets/image/personal.png" alt="个人中心" slot="icon-normal">
        <img src="./assets/image/personal_select.png" alt="个人中心" slot="icon-active">
        个人中心
      </tabbar-item>
    </tabbar>
  </div>
</template>  
<script>
   
   import tabbar from './components/tabbar/tabbar.vue';
   import tabbarItem from './components/tabbar/tabbar-item.vue';
  
   export default{
      components:{
          tabbar,
          tabbarItem,
          
      },
      data(){
        return{
          select:"indexPage",
        }
      }
    }
</script>



  

