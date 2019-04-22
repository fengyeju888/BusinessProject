import Vue from 'vue'
import Router from 'vue-router'
const  CreatePrograme =()=>import ("../pages/CreatePrograme/CreatePrograme.vue")
const  MyPrograme =()=>import ("../pages/MyPrograme/MyPrograme.vue")
const Purchase =()=>import ("../pages/MyPrograme/Purchase.vue")
const  OperateLog =()=>import ("../pages/OperateLog/OperateLog.vue")
const  PersonalCenter =()=>import ("../pages/PersonnalCenter/PersonnalCenter.vue")
const ActiveData =()=>import("../components/ActiveData.vue")
// 创建数据部分路由切换
const SetData =()=>import("../pages/SetData/SetData.vue")
const Lottery=()=>import("../pages/SetData/SetChild/Lottery.vue")
const DataSum =()=>import("../pages/SetData/SetChild/DataSum.vue")
const Participants =()=>import("../pages/SetData/SetChild/Participants.vue")
// 个人中心组件部分 账户管理部分
const Account =()=>import ('../pages/ManageAccount/PersonalAccount/account')
const Center =()=>import ('../pages/ManageAccount/PersonalAccount/center')
const RedBack =()=>import ('../pages/ManageAccount/PersonalAccount/redpack')
const Bind =()=>import ('../pages/ManageAccount/PersonalAccount/bind')
const Message =()=>import ('../pages/ManageAccount/PersonalAccount/message')
const EditMessage =()=>import ('../pages/ManageAccount/PersonalAccount/editMessage')
// 订单页面
const Order =()=>import('../pages/Order/Order.vue')
const OpenInvoice=()=>import ('../pages/ManageAccount/PersonalAccount/OpenInvoice')
// 打印发票
const PrintInvoice=()=>import('../pages/ManageAccount/PersonalAccount/PrintInvoice.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/createPrograme',
      name: 'CreatePrograme',
      component: CreatePrograme
    },
    {
      path: '/myprograme',
      name: 'MyPrograme',
      component: MyPrograme
    },
    
     {
      path:'/puchase',
      name: 'Purchase',
      component: Purchase
    },
    {
      path:'/order',
      name: 'Order',
      component: Order
    },    
    {
      path: '/operateLog',
      name: 'OperateLog',
      component: OperateLog
    },
    {
      path: '/activedata',
      name: 'ActiveData',
      component:ActiveData
    },

    {
      path:"/",
      redirect:"/createPrograme"
    },
    {
      path: '/set',
      component:SetData,
      children: [
        {
          path: '/set/sum',
          component:DataSum
        },
        {
          path: '/set/lottery',
          component: Lottery
        },
        {
          path: '/set/par',
          component: Participants
        },
        {
          path: '',
          redirect: '/set/sum'
        }
      ]
    },
    {
      path:'/personal',
      name:'personal',
      component:PersonalCenter,
      children:[
        {
          path:'account',
          component:Account,
        },
        {
          path:'center',
          component:Center,
        
        },
       
        {
          path:'message',
          component:Message,
        },
        {
          path:'redback',
          component:RedBack,
        },
        {
          path:'bind',
          component:Bind,
        },
        {
          path:'invoice',
          component:OpenInvoice,
        },
         {
          path: '',
          redirect: '/personal/center'
        }, 
        {
          path:'/personal/edit',
          component:EditMessage,
      },
      {
        path:'/personal/print',
        component:PrintInvoice,
    },
      ]
    },

   ]
})
