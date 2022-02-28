import Vue from 'vue'
// eslint-disable-next-line no-unused-vars
import Header from "@/components/Header";
import Router from 'vue-router';
import Dashboard from "@/components/Dashboard";


Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            component:Dashboard
        }
    ]
})




