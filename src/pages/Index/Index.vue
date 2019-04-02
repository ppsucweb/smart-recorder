<template>
  <div class="page-index">
    <Helloworld />
    这是index页面。
    <TestStyle />
  </div>
</template>

<script>
import Helloworld from '@/components/Helloworld'
import TestStyle from '@/components/TestStyle'

export default {
  name: 'Index',
  components: {
    Helloworld,
    TestStyle
  }
}
</script>

<style scoped></style>
