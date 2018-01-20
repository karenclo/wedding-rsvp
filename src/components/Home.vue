<template>
  <div class="home">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home'
    }
  }
}
</script>

<style>
  .home {
    background-color: lightblue;
    height: 300px;
  }
</style>
