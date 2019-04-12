<template>
  <input class="item-login-user" :placeholder="placeholder" />
</template>

<script>
export default {
  name: 'iteminput',
  props: ['placeholder'],
  data() {
    return {
      user: '用户名'
    }
  }
}
</script>

<style>
.item-login-user {
  border: 1px solid black;
  padding-left: 2%;
  width: 20%;
  height: 5%;
  font-size: 16px;
  text-align: left;
}
</style>
