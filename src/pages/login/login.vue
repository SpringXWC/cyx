<template>
  <header-Top title="登录账号">
    <img src="../../assets/image/return_36x36px.png" slot="center" class="return">
  </header-Top>
</template>
<script>
  import headerTop from '../../components/header/head.vue';
  export default{
    components:{
      headerTop
    }
  }
</script>
<style>
  .return{
    width:0.36rem;
    height:0.36rem;
    position: absolute;
    left:0.3rem;
  }
</style>