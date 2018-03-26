<template>
  <messageSlot>
    <img src="../../assets/image/message_160x160px.png" slot="noMessage">
    暂无最新消息
    <!-- <span slot="message">lllllll</span> -->
  </messageSlot>
    
</template>
<script>
  import messageSlot from '../../components/message/message-slot.vue';
  export default{
    components:{
      messageSlot,
    }
  }
</script>