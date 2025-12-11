
type AppRoutesType =  {
    href:string,
    title:string,
    target?:'_balnk'|'_self'|'_top',
};

const appRoutes:AppRoutesType[] = [
    {
        href:'/',
        title:'Home'
    },

    {
        href:'/about',
        title:'About'
    },

    {
        href:'/contact',
        title:'Contact'
    },

    {
        href:'/blog',
        title:'Blog'
    }
]


export default appRoutes;