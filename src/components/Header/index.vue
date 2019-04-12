<template>
  <header class="item-login-head">
    {{ message }}
    <itemselect :options="posts"> </itemselect>
  </header>
</template>

<script>
import itemselect from '@/components/Select'

export default {
  name: 'Header',
  data() {
    return {
      message: '顶部导航栏',
      posts: [
        { id: 1, sel: '学习' },
        { id: 2, sel: 'API' },
        { id: 3, sel: '教程' },
        { id: 4, sel: '风格指南' }
      ]
    }
  },
  components: {
    itemselect
  }
}
</script>

<style scoped>
.item-login-head {
  position: relative;
  top: 0;
  left: 0;
  padding-top: 1%;
  padding-bottom: 1%;
  padding-left: 5%;
  background-color: aliceblue;
  width: 100%;
  line-height: 250%;
}
</style>
