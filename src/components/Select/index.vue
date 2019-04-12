<template>
  <select class="item-login-select-one">
    <option v-for="post in options" :key="post.id" :sel="post.sel">{{
      post.sel
    }}</option>
  </select>
</template>

<script>
export default {
  name: 'itemselect',
  props: {
    options: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.item-login-select-one {
  position: absolute;
  left: 80%;
  padding: 1% 1%;
  border: 0px;
  line-height: 14px;
  background-color: aliceblue;
}
</style>
