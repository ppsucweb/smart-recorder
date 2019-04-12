<template>
  <div class="page-index">
    <Header />
    <itemimg></itemimg>
    <iteminput class="user" placeholder="用户名" />
    <iteminput class="password" placeholder="密码" />
    <itembutton class="botton" login="登录"></itembutton>
  </div>
</template>

<script>
import Header from '@/components/Header'
import iteminput from '@/components/Input'
import itemimg from '@/components/Img'
import itembutton from '@/components/Button'

export default {
  name: 'Index',
  components: {
    Header,
    iteminput,
    itemimg,
    itembutton
  }
}
</script>

<style scoped>
.user {
  position: fixed;
  top: 40%;
  right: 40%;
}

.password {
  position: fixed;
  top: 47%;
  right: 40%;
}

.botton {
  position: fixed;
  top: 54%;
  right: 40%;
}
</style>
