<template>
  <div class="wedding-day">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'WeddingDay',
  data () {
    return {
      msg: 'Wedding Day'
    }
  }
}
</script>

<style>
  .wedding-day {
    background-color: lightsteelblue;
    height: 300px;
  }
</style>
