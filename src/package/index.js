// 引用组件
import ndButton from '@/package/button/index.vue'
import ndVerifycode from '@/package/verificationCode/index.vue'


//组件都写在这个数组中方便管理
const componentList = [ndButton, ndVerifycode]

// 批量注册
const install = (Vue) => {
  componentList.forEach(com => {
    Vue.component(com.name, com)
  })
}

// 暴露出去
export default install