<template>
    <div class="peronalPage">
      <header-Top title="个人中心"></header-Top>
      <div class="peronal">
        <div class="peronalTop">
          <img src="../../assets/image/personal_120X120px.png" alt="头像失踪了！">
          <div class="peronalTitle">
            <p>车宜行物联网</p>
            <p>ICCID:13695584111</p>
          </div>
          <div>
              <router-link to=""><img src="../../assets/image/up_24x24px.png"  alt="图片失踪了！"></router-link>
          </div>
        
        </div>
      </div>
      <div class="peronalList">
        <ul>
          <li v-for="item in list">
            <router-link :to="item.src">
              <img :src="item.url">
              <span>{{item.title}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>  
<script>
import headerTop from '../../components/header/head.vue'
  export default{
    components:{
      headerTop,
    },
    data(){
      return{
        list:[
          {src:'',url:require('../../assets/image/net_64x64px.png'),title:'绑定网卡'},
          {src:'',url:require('../../assets/image/order_64x64px.png'),title:'我的订单'},
          {src:'',url:require('../../assets/image/my_64x64px.png'),title:'我的账户'},
          {src:'',url:require('../../assets/image/pwd_64x64px.png'),title:'修改密码'},
          
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
 @import '../../assets/scss/default.scss';
  .peronalPage{
    background-color: $backgroundColor;
    width: 100%;
    height: 13.34rem;
    .peronal{
      margin-top:0.2rem;
      background-color:#fff;
      .peronalTop{
        height: 1.8rem;
        position: relative;
        img:nth-child(1){
          width:1.2rem;
          height:1.2rem;
          border-radius:50%;
          position: absolute;
           top:0.3rem;
           left:0.3rem;
           right:0.3rem;
        }
        div:nth-child(3){
           position:absolute;
               top:0.5rem;
               right:1rem;
          a{
               display: block;

              
            img{
              
               width:0.24rem;
              height:0.24rem;
            }
          }
        }
        .peronalTitle{
           position: absolute;
           top:0.5rem;
           left:1.8rem;
          p:nth-child(1){
            font-size:0.28rem;
            color:#000;
            font-weight: 600;

          }
          p:nth-child(2){
            font-size:0.28rem;
            color:#666;
            margin-top:0.2rem;
          }
        }
      }
    }
    .peronalList{
      margin-top:0.2rem;
      ul{
         border-top:0.01rem solid $backgroundColor;
        li{
            border-bottom:0.01rem solid $backgroundColor;
            background-color:#fff;
            a{
                  position: relative;
                  display: block;
                  padding-left: 0.3rem;
                  height: 1rem;
                  line-height: 1rem;
                img{
                  position: absolute;
                  top:0.2rem;
                  width: 0.64rem;
                  height: 0.64rem;
                }
                span{
                  position: absolute;
                  left: 1.2rem;
                  font-size:0.32rem;
                  color:#000;
                }
            }
        }
        & li:last-child{
              margin-top:0.2rem;
              border-top:0.01rem solid $backgroundColor;
              border-bottom:0.01rem solid $backgroundColor;
            }
      }
    }
  }
</style>