import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/chapter6/Home.vue";
import Menu from "./components/chapter6/Menu.vue";

import Parts from "./components/chapter6/Parts.vue";
import List from "./components/chapter6/List.vue";
import ComputerDetail from "./components/chapter6/ComputerDetail.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
  	path: '/',
  	name:'home',
  	component: Home
  }, {
  	path: '/menu/:id',
  	name: 'menu',
  	component: Menu
  }, {
  	path: '/list',
  	name: 'list',
    components: {
    	default: Parts,
    	list: List,
    	footer: {
    		template: `<div style="position:fixed;background-color: lightpink;bottom: 0;right: 0;height: 20px;left: 0;">footer</div>`
    	}
    }
  }, {
  	path: '/computer',
  	name: 'computer',
  	components: {
  		default: ComputerDetail,
  		list: List
  	}
  }]
});

export default router;