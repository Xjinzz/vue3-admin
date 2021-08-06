<template>
  <el-row class="box">
    <el-col :span="6" :offset="9" class="login-form-box">
      <h3 style="text-align:center">
        登陆
      </h3>
      <el-form
        ref="loginFormComp"
        :label-position="formMode.labelPosition"
        :label-width="formMode.labelWidth"
        :model="formValue"
        style="padding-right:30px;"
        :rules="rules"
      >
         <el-form-item label="登陆用户" prop="name">
          <el-input v-model="formValue.name" placeholder="请输入登陆用户"></el-input>
        </el-form-item>
        <el-form-item label="登陆密码" prop="password">
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
import { useErrorMessage, useSuccessMessage } from '@/hooks/message'
import { useRouter } from 'vue-router'
import type Form from 'element-plus/lib/el-form'
import Service from '@/service/auth/index'
export default defineComponent({
  components: {
    Captcha
  },
  setup(props, context) {
    const rules = ref({
      name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
    })
    const formMode = ref(Define.FORM)
    const formValue = ref({
      name: '',
      password: '',
      captcha: ''
    })

    const captchaCode = ref()
    const loginFormComp = ref<InstanceType<typeof Form> | null>(null)
    const router = useRouter()
    const doLogin = () => {
      loginFormComp.value?.validate(async (validate) => {
        if (validate) {
          if (formValue.value.captcha !== captchaCode.value) {
            useErrorMessage('验证码错误')
            return
          }
          await Service.login(formValue.value)
          useSuccessMessage('登陆成功')
        }
      })
      
    }
    return {
      captchaCode,
      formMode,
      formValue,
      doLogin,
      rules,
      loginFormComp
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