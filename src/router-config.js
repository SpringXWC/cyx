import index from './index.vue'
import indexPage from './pages/indexPage/indexPage.vue';
import service from './pages/service/service.vue';
import message from './pages/message/message.vue';
import personal from './pages/personal/personal.vue';
import login from './pages/login/login.vue';

export default[
      {
        path:'/',
        component:index,
        children:[
            {path:'/',redirect:'indexPage'},
            {path:'/indexPage',component:indexPage},
            {path:'/service',component:service},
            {path:'/message',component:message},
            {path:'/personal',component:personal},
        ]
    },
      
      {path:'/login',component:login},
]