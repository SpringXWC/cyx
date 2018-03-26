<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>
<script>
   import tabbarItem from './tabbar-item.vue'
   export default{
     props:['value'],
     
   }
   
</script>
<style lang="scss" scoped>
  
   .tabbar{
       display:flex;
       flex-flow:row nowrap;
       position:fixed;
       bottom:0;
       width: 100%;
       height: 0.98rem;
       line-height: 0.98rem;
       background-color:#f6f6f6;
       border-top:0.01rem solid #999;

     
   }
</style>