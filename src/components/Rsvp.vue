<template>
  <div class="rsvp">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Rsvp',
  data () {
    return {
      msg: 'RSVP'
    }
  }
}
</script>

<style>
  .rsvp {
    background-color: pink;
    height: 300px;
  }
</style>
