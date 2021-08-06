<template>
  <el-container>
    <side-bar />
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <route-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from '@comp/side-bar'
import RouteView from './RouteView.vue'
export default defineComponent({
  components: {
    SideBar,
    RouteView
  },
  setup() {
    
  },
})
</script>
