<template>
  <el-row>
    <canvas ref="captcha" :width="width" :height="height" @click="draw"></canvas>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { createCaptcha, randomColor, randomNum } from './tool/random'
export default defineComponent({
  props: {
    width: {
      type: Number,
      required: false,
      default: 120
    },
    height: {
      type: Number,
      required: false,
      default: 40
    },
    modelValue: {
      type: [Number, String],
      required: false,
      default: ''
    }
  },
  setup (props, context) {
    const captcha = ref()
    const draw = () => {
      const ctx = captcha.value.getContext('2d')
      ctx.fillStyle = randomColor(180, 230)
      ctx.fillRect(0, 0, props.width, props.height)

      const value:string|number = props.modelValue || createCaptcha(4)
      console.log(value)
      for(let i = 0; i < String(value).length; i++) {
        const fontSize:number = randomNum(18, 30)
        const deg:number = randomNum(-30, 30)
        ctx.font = fontSize + 'px Simhei'
        ctx.textBaseline = 'top'
        ctx.fillStyle = randomColor(80, 150)
        ctx.save()
        ctx.translate(30 * i + 15, 18)
        ctx.rotate((deg * Math.PI) / 180)
        ctx.fillText(String(value)[i], -15 + 5, -10)
        ctx.restore()
      }
      
      for (let i = 0; i < randomNum(1, 6); i++) {
        ctx.beginPath()
        ctx.moveTo(randomNum(0, props.width), randomNum(0, props.height))
        ctx.lineTo(randomNum(0, props.width), randomNum(0, props.height))
        ctx.strokeStyle = randomColor(180, 230)
        ctx.closePath()
        ctx.stroke()
      }

      for (let i = 0; i < randomNum(10, 50); i++) {
        ctx.beginPath()
        ctx.arc(randomNum(0, props.width), randomNum(0, props.height), 1, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fillStyle = randomColor(150, 200)
        ctx.fill()
      }
    }
    onMounted(() => {
      draw()
    })
    return {
      captcha,
      draw
    }
  },
})
</script>
<style lang="scss" scoped>

</style>
