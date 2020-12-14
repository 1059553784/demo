import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: "/login",
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import ("../views/login.vue"),
    },
    {
        path: "/home",
        name: "home",
        component: () =>
            import ("../views/home/index.vue"),
        redirect: "/background",
        children: [{
                path: "/background",
                name: "background",
                component: () =>
                    import ("../views/home/background.vue"),
            },
            {
                path: "/album",
                name: "album",
                meta: { title: "相册管理" },
                component: () =>
                    import ("../views/home/album.vue"),
            },
            {
                path: "/shoplist",
                name: "shoplist",
                component: () =>
                    import ("../views/home/shoplist.vue"),
                meta: { title: "商品列表" },
                //给路由➕的一个额外的描述信息
                //在面包屑导航中 拿到这个meta信息 展示出来
            },
        ],
    },
    {
        path: "/shop",
        name: "shop",
        component: () =>
            import ("../views/shop/index.vue"),
        redirect: "/size",
        children: [{
                path: "/size",
                name: "size",
                component: () =>
                    import ("../views/shop/size.vue"),
                meta: { title: "分类列表" },
            },
            {
                path: "/type",
                name: "type",
                component: () =>
                    import ("../views/shop/type.vue"),
                meta: { title: "商品规格" },
            },
        ],
    },
    {
        path: "/order",
        name: "order",
        component: () =>
            import ("../views/order/index.vue"),
        redirect: "orders",
        children: [{
                path: "/orders",
                name: "orders",
                component: () =>
                    import ("../views/order/order.vue"),
                meta: { title: "订单管理" },
            },
            {
                path: "/invo",
                name: "invo",
                component: () =>
                    import ("../views/order/invo.vue"),
                meta: { title: "发票管理" },
            },
            {
                path: "/aftersale",
                name: "aftersale",
                component: () =>
                    import ("../views/order/aftersale.vue"),
                meta: { title: "售后服务" },
            },
        ],
    },
    {
        path:"/member",
        name:'member',
        component:()=>import("../views/member"),
        meta: { title: "会员" },
    },
    {
        path:"/set",
        name:'set',
        component:()=>import("../views/set"),
        meta: { title: "设置" },
    }

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    

    if (localStorage.getItem("token")) {
        next();
    } else {
        if (to.path == "/login") {
            next();
        } else {
            next("/login");
        }
        //为了防止死循环
    }
});
//在进入一个页面之前执行这个路由的守卫函数 也可以认为 跳转被拦截了 全局的意思是不管哪个页面都会被拦截
// 必须要调用next 方法才会进行下一步

// 路由的导航守卫 又叫做路由的钩子函数 路由的生命周期函数
// 有三种：
// 1.全局的守卫 不管进入哪个页面都会被守卫
// beforeEach  afterEach

// 2.组件的导航守卫
// beforeRouteEnter (to, from, next) {
//     // ...
// }
// beforeRouteLeave (to, from, next) {
//     // ...
// }
// beforeRouterUpdate

// 3. 单个路由的导航守卫
// beforeEnter: (to, from, next) => {
//     // ...
// }

export default router;