<template>
  <div class="home section">
    <div class="content">
      <div class="title">
        Jonathan + Karen
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
    background-image:url('../assets/home.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    position: relative;

    @media screen and (max-width: 1024px) {
      background-image:url('../assets/home-mobile.jpg');
    }

    .date {
      font-family: 'Amatic SC', cursive;
      font-size: 75px;
    }
  }
</style>
