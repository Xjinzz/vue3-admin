import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/HelloWorld.vue'
import Found from '@/views/Found.vue'
export const constantRoutes:any = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/home',
		component: Home,
	}, 
	{
		path: '/:catchAll(.*)',
		component: Found
	}
]
const _createRouter = () => createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes
})

let router = _createRouter()
export const resetRouter = () => {
  router = _createRouter()
}
export default router