<template>
  <div>
     <slot name="noMessage"></slot>
     <p><slot></slot></p>
    <slot name="message"></slot>
  </div>
  
</template>
<style lang="scss" scoped>
 
  
      img{
        width: 1.6rem;
        height:1.6rem;
        padding: 3.0rem 2.95rem 0.3rem 2.95rem;
      }
      p{
        color: #999;
        font-size: 0.32rem;
        text-align: center;
      }
  
</style>   