<template>
  <el-row class="box">
    <el-col :span="6" :offset="9" class="login-form-box">
      <el-form
        :label-position="formMode.labelPosition"
        :label-width="formMode.labelWidth"
        :model="formValue"
        style="width: 90%;margin-top:50px;margin-bottom:50px"
      >
         <el-form-item label="登陆用户">
          <el-input v-model="formValue.name"></el-input>
        </el-form-item>
        <el-form-item label="登陆密码">
          <el-input v-model="formValue.password"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <div class="flex">
            <el-row class="auth-flex-width">
              <el-input placeholder="请输入验证码" v-model="formValue.captcha" style="width:100%"/>
            </el-row>
            <captcha height="40" width="120"/>
          </div>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import Define from '@/constants/base'
import { defineComponent, ref } from 'vue'
import Captcha from '@/components/captcha/index.vue'
export default defineComponent({
  components: {
    Captcha
  },
  setup() {
    const formMode = ref(Define.FORM)
    const formValue = ref({
      name: '',
      password: ''
    })
    return {
      formMode,
      formValue
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