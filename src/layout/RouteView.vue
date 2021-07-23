<script lang="ts">
import { defineComponent, h, KeepAlive } from 'vue'
import { RouterView, useRoute } from 'vue-router'
export default defineComponent({
  setup () {
    const $route = useRoute()
    return () => {
      const NotKeepView:any = h(RouterView)
      const KeepAliveView:any = h(KeepAlive, NotKeepView)
      return $route.meta.keepAlive ? KeepAliveView : NotKeepView
    }
  }
})
</script>
