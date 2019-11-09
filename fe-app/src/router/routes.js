const Home = () =>
    import ( /* webpackChunkName: "group-foo" */ 'views/home')
const UserList = () =>
    import ( /* webpackChunkName: "group-foo" */ 'views/userlist')
    // const ShopList = () =>
    //     import ( /* webpackChunkName: "group-foo" */ 'views/shoplist')
const Shop = () =>
    import ( /* webpackChunkName: "group-foo" */ 'views/shop')
const FoodList = () =>
    import ( /* webpackChunkName: "group-foo" */ 'views/foodlist')
const ShopAdd = () =>
    import ( /* webpackChunkName: "group-foo" */ 'views/shopadd')
const FoodAdd = () =>
    import ( /* webpackChunkName: "group-foo" */ 'views/foodadd')
const Chart = () =>
    import ( /* webpackChunkName: "group-foo" */ 'views/chart')
const Set = () =>
    import ( /* webpackChunkName: "group-foo" */ 'views/set')
const Warn = () =>
    import ( /* webpackChunkName: "group-foo" */ 'views/warn')
const Edit = () =>
    import ( /* webpackChunkName: "group-foo" */ 'views/edit')
const Login = () =>
    import ( /* webpackChunkName: "group-foo" */ 'views/login')
const Register = () =>
    import ( /* webpackChunkName: "group-foo" */ 'views/register')
const Error = () =>
    import ( /* webpackChunkName: "group-foo" */ 'views/error')



export default [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            name: 'Home'
        }
    },
    {
        path: '/shop',
        component: Shop,
        meta: {
            name: 'Shop'
        }
    },
    {
        path: '/userlist',
        component: UserList,
        meta: {
            name: 'UserList'
        }
    },
    {
        path: '/foodlist',
        component: FoodList,
        meta: {
            name: 'FoodList'
        }
    },
    // {
    //     path: '/shoplist',
    //     component: ShopList,
    //     meta: {
    //         name: 'ShopList'
    //     }
    // },
    {
        path: '/shopadd',
        component: ShopAdd,
        meta: {
            name: 'ShopAdd'
        }
    },
    {
        path: '/foodadd',
        component: FoodAdd,
        meta: {
            name: 'FoodAdd'
        }
    },
    {
        path: '/chart',
        component: Chart,
        meta: {
            name: 'Chart'
        }
    },
    {
        path: '/set',
        component: Set,
        meta: {
            name: 'Set'
        }
    },
    {
        path: '/warn',
        component: Warn,
        meta: {
            name: 'Warn'
        }
    },
    {
        path: '/edit',
        component: Edit,
        name: 'edit',
        meta: {
            name: 'Edit'
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            name: 'Login'
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            name: 'Register'
        }
    },
    {
        path: '*',
        component: Error,
        meta: 'Error'
    }
]