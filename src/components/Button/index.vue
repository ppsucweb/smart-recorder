<template>
  <button class="item-login-button">{{ login }}</button>
</template>

<script>
export default {
  name: 'itembutton',
  props: ['login']
}
</script>

<style>
.item-login-button {
  border: 0px;
  padding: 0px;
  width: 22%;
  line-height: 250%;
  color: white;
  background-color: cornflowerblue;
}
</style>
