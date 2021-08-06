import getAsyncData from '@/utils/getAsyncData'
import { RouteRecordRaw } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import Router from '@/router'
interface Menu {
  id: string,
  title: string,
  path: string,
  component: string,
  hidden: Boolean,
  children: Menu[]
}
export default {
  async login (data: object):Promise<any> {
    const result = await getAsyncData({
      userName: '印度阿三',
      userIcon: ''
    })
    this.__loginSuccess()
    return result
  },
  async getComponent (compUrl:string) {
    const modules = import.meta.glob('/src/**/*.vue')
    console.log(compUrl, modules[compUrl])
    const comp = await modules[compUrl]()
    const file = comp.default
    return file
  },
  __genMenus (router:RouteRecordRaw[]):RouteRecordRaw[] {
    return router.map((item) => {
      const layouts = ['RouteView', 'PageView']
      // 增加路由地址
      const compUrl = layouts.includes(<string>item.component) ? ('/src/layout/' + item.component + '.vue') : ('/src/' + item.component + '.vue')
      item.component = this.getComponent(compUrl)
      item.children = this.__genMenus(<RouteRecordRaw[]>item.children)
      // 递归处理所有
      return item
    })
  },
  async __loginSuccess () {
    const menus = await this.getCurrentMenus()
    await Router.addRoute(menus[0])
    Router.push('/home')
  },
  async getCurrentMenus () {
    const children = await getAsyncData([
      {
        id: 'f5612569-7e02-4009-80ac-a955b7de4a5a',
        title:'首页',
        path: '/home',
        component: 'views/home/Home',
        hidden: false,
        children: []
      }
    ])
    const result = {
      path: '/',
      component: 'PageView',
      children: children
    }
    
    return this.__genMenus([<RouteRecordRaw>result])
  }
}