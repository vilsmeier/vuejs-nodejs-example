import Vue from 'vue'
import Header from "@/components/Header";
import Router from 'vue-router';


Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/bbb',
            component:Header
        }
    ]
})




