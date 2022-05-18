import getAsyncData from '@/utils/getAsyncData'
import Router from '@/router'
export default {
  async login (data) {
    const result = await getAsyncData({
      userName: '印度阿三',
      userIcon: ''
    })
    this.__loginSuccess()
    return result
  },
  // https://pixijs.io/examples/#/plugin-heaven/spineboy-pro.js
  async getComponent (compUrl) {
    const modules = import.meta.glob('/src/**/*.vue')
    console.log(compUrl, modules[compUrl])
    const comp = await modules[compUrl]()
    const file = comp.default
    return file
  },
  __genMenus (router) {
    return router.map((item) => {
      const layouts = ['RouteView', 'PageView']
      // 增加路由地址
      const compUrl = layouts.includes(item.component) ? ('/src/layout/' + item.component + '.vue') : ('/src/' + item.component + '.vue')
      item.component = this.getComponent(compUrl)
      item.children = this.__genMenus(item.children)
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
    
    return this.__genMenus([result])
  }
}