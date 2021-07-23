<template>
  <div>
    404，1s后将返回上一页
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Found',
  setup: () => {
    const $router = useRouter()
    setTimeout(() => {
      $router.go(-1)
    }, 1000)
  }
})
</script>

<style>

</style>