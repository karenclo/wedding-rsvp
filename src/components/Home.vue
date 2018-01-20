<template>
  <div class="home">
    <div class="content">
      <div class="main">
        Karen + Jonathan
      </div>
      <div class="date">
        10.12.2019
      </div>
    </div>
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

<style lang="scss">
.home {
  background-color: lightblue;
  height: 100%;
  position: relative;
  padding-top: 70px;

  .main {
    font-family: 'Amatic SC', cursive;
    font-size: 150px;
  }

  .date {
    font-family: 'Amatic SC', cursive;
    font-size: 75px;
  }
}
</style>
