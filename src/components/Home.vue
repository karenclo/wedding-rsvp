<template>
  <div class="home section">
    <div class="content">
      <div class="title">
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
  name: 'Home'
}
</script>

<style lang="scss" scoped>
  @import '../stylesheets/header.scss';
  .home {
    background-color: lightblue;
    height: 100%;
    position: relative;

    .date {
      font-family: 'Amatic SC', cursive;
      font-size: 75px;
    }
  }
</style>
