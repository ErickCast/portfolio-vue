import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    { 
        path: '/', 
        component: () => import(/* webpackChunkName: "HomePage" */ '@/modules/home/pages/HomePage.vue') 
    },
    { 
        path: '/about', 
        component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/about/pages/AboutPage.vue')
    },
    { 
        path: '/skills', 
        component: () => import(/* webpackChunkName: "SkillsPage" */ '@/modules/skills/pages/SkillsPage.vue')
    },
    { 
        path: '/contact', 
        component: () => import(/* webpackChunkName: "ContactPage" */ '@/modules/contact/pages/ContactPage.vue')
    },
    { 
        path: '/portfolio', 
        component: () => import(/* webpackChunkName: "ContactPage" */ '@/modules/portfolio/pages/PortfolioPage.vue')
    },
    { 
        path: '/:pathMatch(.*)*', 
        component: () => import(/* webpackChunkName: "DefaultPage" */ '@/modules/shared/pages/NoPageFound.vue') 
    },

];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})


export default router;
  