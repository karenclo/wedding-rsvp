<template>
  <div class="travel-info">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'TravelInfo',
  data () {
    return {
      msg: 'Travel Info'
    }
  }
}
</script>

<style>
  .travel-info {
    background-color: turquoise;
    height: 300px;
  }
</style>
