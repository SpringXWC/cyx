<template>
  <div class="servic">
    <h1>客服电话</h1>
    <p>0755-83361999</p>
    <div>
      <a href="tel:0755-83361999">拨打</a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
 @import '../../assets/scss/default.scss';
  .servic{
    text-align: center;
    margin-top: 2rem;
    h1{
      font-size:0.5rem;
       margin-top: 0.2rem;
    }
    p{
      font-size:0.6rem;
      margin: 0.2rem 0;
    }
    div{
      a{
        display: block;
        font-size: 0.32rem;
        background-color:$defaultColor;
        color:#fff;
        height: 0.8rem;
        line-height: 0.8rem;
        width: 92%;
        border-radius:0.05rem;
        text-align: center;
        margin:0 0.3rem;
      }
    }
  }
</style>