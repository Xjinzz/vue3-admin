<template>
  <el-row class="box">
    <el-col :span="6" :offset="9" class="login-form-box">
      <h3 style="text-align:center">
        登陆
      </h3>
      <el-form
        :label-position="formMode.labelPosition"
        :label-width="formMode.labelWidth"
        :model="formValue"
        style="padding-right:30px;"
      >
         <el-form-item label="登陆用户">
          <el-input v-model="formValue.name" placeholder="请输入登陆用户"></el-input>
        </el-form-item>
        <el-form-item label="登陆密码">
          <el-input v-model="formValue.password" placeholder="请输入登陆密码"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <div class="flex">
            <el-row class="auth-flex-width"  style="width:100%">
              <el-input placeholder="请输入验证码" v-model="formValue.captcha" style="width:100%"/>
            </el-row>
            <captcha :height="40" :width="120" v-model="captchaCode"/>
          </div>
        </el-form-item>
        <el-button type="primary" @click="doLogin" style="margin-left:10px;width:100%;margin-bottom:30px;">登陆</el-button>
      </el-form>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import Define from '@/constants/base'
import { defineComponent, ref } from 'vue'
import Captcha from '@/components/captcha/index.vue'
import { useErrorMessage } from '@/hooks/message'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: {
    Captcha
  },
  setup(props, context) {
    const formMode = ref(Define.FORM)
    const formValue = ref({
      name: '',
      password: '',
      captcha: ''
    })

    const captchaCode = ref()
    const router = useRouter()
    const doLogin = () => {
      if (formValue.value.captcha !== captchaCode.value) {
        useErrorMessage('验证码错误')
        return
      }
      router.push('/home')
    }
    return {
      captchaCode,
      formMode,
      formValue,
      doLogin
    }
  },
})
</script>


<style lang="scss" scoped>
.box {
  background: #79f375;
  height: 100vh;
  align-items: center;
  .login-form-box {
    border-radius: 7px;
    background: rgba(255,255,255,0.5);
    border: 1px solid #eee;
  }
}
</style>