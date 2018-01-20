<template>
  <div class="gifts">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Gifts',
  data () {
    return {
      msg: 'Gifts'
    }
  }
}
</script>

<style>
  .gifts {
    background-color: aquamarine;
    height: 100%;
    position: relative;
  }
</style>
