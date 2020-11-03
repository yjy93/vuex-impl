/**
* @author: Gene
* @age: 永远18岁的美少年
* @Email： Genejob@163.com
* @date: 2020-11-03 21:51:52
* @description: install. 方法
*/

function vuexInit() {
  if (this.$options.store) {// 根实例
    this.$store = this.$options.store; // 给根属性增加 $store 属性
  } else if (this.$parent && this.$parent.$store) {
    this.$store = this.$parent.$store
  }
}

export const applyMixin = (Vue) => {// $store 需要将 store 属性分配给所有的组件
  // install 执行,就会让 mixin 执行,
  Vue.mixin({
    beforeCreate: vuexInit// 给所有组件实例 this,增加一个 $store 对象

  })
}
