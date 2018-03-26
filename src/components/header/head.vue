<template>
<!-- 头部 -->
    <header class="header">
      <slot name="center"></slot>
      <span class="header-title" v-text="title"></span>
    </header>
   
</template>
<script>
 export default{
   props:{
    title:{
      type:String,
      default:''
    },
   
   }
 }  
  
</script>
<style lang="scss" scoped>
@import '../../assets/scss/default.scss';
 .header{
   display: flex;
   align-items:center;
   height: 0.88rem;
   background-color:$defaultColor;
   
   .header-title{
        flex:1;
        text-align: center;
        font-size: 0.36rem;
        color:#fff; 
     }
 }
 
  
</style>