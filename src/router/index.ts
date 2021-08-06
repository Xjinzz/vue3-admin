import { createRouter, createWebHashHistory } from 'vue-router'
import Found from '@/views/Found.vue'
// import RouteView from '@/layout/RouteView.vue'
import PageView from '@/layout/PageView.vue'
import Login from '@/views/login/index.vue'
export const constantRoutes:any = [
	{
		path: '/login',
		component: Login
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