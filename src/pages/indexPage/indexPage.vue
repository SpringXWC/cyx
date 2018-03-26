 <template>
    <div class="homePage">
      <!-- 头部 -->
      <header-Top title="车宜行">
        <img src="../../assets/image/logo_60x60px.png" alt="logo" slot="center" class="logo">
      </header-Top>
     <!-- 轮播图 -->
      <mt-swipe :auto="4000" class="clearfix">
        <mt-swipe-item v-for="item in images">
          <a :href="item.href">
            <img :src="item.src">
          </a>
        </mt-swipe-item>
      </mt-swipe>
      <!-- 菜单 -->
      <ul class="menu">
        <li v-for="item in datas">
          <img :src="item.src" alt="item.title">
          <span>{{item.title}}</span>
        </li>
      </ul>
      <!-- 流量卡套餐 -->
      <div class="setMeal clearfix">
        <p>流量卡套餐</p>
        <div class="setMealImg">
          <div class="setMealImg-left">
            <img src="../../assets/image/flowpool-1.png">
          </div>
          <div class="setMealImg-rightTop">
            <img src="../../assets/image/flowpool-2.png">
          </div>
          <div class="setMealImg-rightBottom">
            <div class="rightBottom-left">
              <img src="../../assets/image/flowpool-3.png">
            </div>
            <div class="rightBottom-right">
              <img src="../../assets/image/flowpool-4.png">
            </div>
          </div>
        </div>
      </div>
      <div class="activity">
        <p>流量卡活动</p>
        <div class="activityImg">
          <img src="../../assets/image/activity.png">
        </div>
      </div>
    </div>
 </template>
<script>
 import headerTop from '../../components/header/head.vue';
  export default{
     components:{
        headerTop,
     },
     data(){
       return{
          images:[
            {
              href:"https://www.cnblogs.com/daiwenru/p/6694530.html",
              src:require("../../assets/image/banner.png")
            },
            {
              href:"https://www.baidu.com/",
              src:require("../../assets/image/banner.png")
            },
            {
              href:"http://blog.csdn.net/dong123dddd/article/details/45483071",
              src:require("../../assets/image/banner.png")
            },
          ],
          datas:[
              {
                src:require("../../assets/image/nav1@2x.png"),
                title:"流量查询"
              },
              {
                src:require("../../assets/image/nav2@2x.png"),
                title:"流量充值"
              },
              {
                src:require("../../assets/image/nav3@2x.png"),
                title:"状态查询"
              },
              {
                src:require("../../assets/image/nav4@2x.png"),
                title:"网卡资料"
              },
              {
                src:require("../../assets/image/nav5@2x.png"),
                title:"套餐查询"
              },
              {
                src:require("../../assets/image/nav6@2x.png"),
                title:"套餐订购"
              },
              {
                src:require("../../assets/image/nav7@2x.png"),
                title:"套餐退订"
              },
              {
                src:require("../../assets/image/nav8@2x.png"),
                title:"实名认证"
              },
          ]
       }
     }
  }
</script>
<style lang="scss" scoped>
@import '../../assets/scss/default.scss';
  .homePage{
      background-color:$backgroundColor; 
      /*头部logo*/
      .logo{
          position: absolute;
          top:0.15rem;
          left:2.5rem;
          width: 0.6rem;
          height:0.6rem;
      }
      /*轮播图部分*/
      .mint-swipe {
        height: 2.6rem;
        width: 7.5rem;
          .mint-swipe-item{
              a{
                display: block;
                img{
                   height: 2.6rem;
                   width: 7.5rem;
                }
          }
        }
         .mint-swipe-indicator {
              width: 0.15rem;
              height: 0.15rem;
              background: #fff;
              opacity: 0.9;
              margin: 0 0.05rem;
              &.is-active{
                background:#000;
                opacity: 0.5;
              }
          }  
      }
      /*菜单*/
      .menu{
         width: 100%;
         display:flex;
         flex-direction:row;
         flex-wrap:wrap;
         text-align: center;
         padding-bottom: 0.2rem;
         background-color:#fff;
         li{
           width: calc(100% / 4);
           img{
            width: 0.9rem;
            height: 0.9rem; 
           }
           span{
            display: block;
            color: #666;
            font-size: 0.24rem;
           }
        }
      }
      /*流量卡套餐*/
      .setMeal{
        margin-top: 0.1rem;
         p{
          @include titleStyle;
        }
        .setMealImg{
          .setMealImg-left{
            float: left;
            padding-right: 0.1rem;
            width: 2.4rem;
            height: 4rem;
            img{
              @include imgStyle;
            }
          }
          .setMealImg-rightTop{
            float: left;
            width: 5.0rem;
            height: 2.0rem;
            img{
             @include imgStyle;
            }
          }
          .setMealImg-rightBottom{
            margin-top: 0.1rem;
            float: right;
            .rightBottom-left{
              float: left;
              @include rightBottomSize;
              img{
                @include imgStyle
              }
            }
            .rightBottom-right{
              float: right;
              margin-left:0.1rem;
              @include rightBottomSize;
              img{
                @include imgStyle
              }
            }
          }
        }
      }
      /*流量卡活动*/
      .activity{
        margin-top: 0.1rem;
        p{
          @include titleStyle;
        }
        .activityImg{
          width: 7.5rem;
          height: 2.0rem;
          margin-bottom: 0.9rem;
          img{
           width: 100%;
          }
        }
      } 
  }
</style>