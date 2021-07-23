import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'
import Home from '@/components/HelloWorld.vue'
const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/home',
		component: Home,
	}
]
export const constantRoutes:any = routes
const _router = () => createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes
})

let router = _router()
export const resetRouter = () => {
  router = _router()
}
export default router