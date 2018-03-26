<template>
<a class="tabbar-item" :class="{'is-active':isActive}"  @click="goToRouter">
         <span class="tabbar-item-icon" v-show="!isActive">
            <slot name="icon-normal"></slot>
         </span>
         <span class="tabbar-item-icon" v-show="isActive">
            <slot name="icon-active"></slot>
         </span>
         <span class="tabbar-item-text"><slot></slot></span>
   </a>
</template> 
<script>
  export default{
    props:{
      id:{
         type:String
      },
      isRouter:{
         type:Boolean,
         default:false
      }
    },
    data(){
      return{
       
      }
    },
    computed:{
       isActive(){
         if(this.$parent.value === this.id){
             return true;
         }
       }
    },
    methods:{
      goToRouter(){
         this.$parent.$emit("input",this.id);
         if(this.isRouter){
            this.$router.push(this.id)
         }
       }
    },
  }
</script> 
<style lang="scss" scoped>
   $bakcgroundColor:#1f87c6;

   .tabbar-item{
           flex:1;
           text-align: center;
              .tabbar-item-icon{
                  display: block;
                  width: 0;
                  height: 0;
                  padding-left: 0.73rem;
                  img{
                      width: 0.48rem;
                      height: 0.48rem;
                      margin-top: -0.5rem;
                  }
              }
              .tabbar-item-text{
                font-size:0.2rem;
                color:#999;
            }
               &.is-active{
                  .tabbar-item-text{
                     color:$bakcgroundColor;
                   }
                }
        }
</style>