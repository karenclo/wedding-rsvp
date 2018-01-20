<template>
  <div class="story">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Story',
  data () {
    return {
      msg: 'Story'
    }
  }
}
</script>

<style>
  .story {
    background-color: bisque;
    height: 300px;
  }
</style>
