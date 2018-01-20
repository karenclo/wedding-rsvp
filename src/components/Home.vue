<template>
  <div class="container">
    <div id="header">
      <ul id="nav">
        <li class="home-nav">HOME</li>
        <li class="story-nav">STORY</li>
        <li class="rsvp-nav">RSVP</li>
        <li class="travel-nav">TRAVEL INFO</li>
        <li class="wedding-nav">WEDDING DAY</li>
        <li class="gifts-nav">GIFTS</li>
      </ul>
    </div>
    <h1>Home</h1>
    <h1>Story</h1>
    <h1>RSVP</h1>
    <h1>Travel Info</h1>
    <h1>Wedding Day</h1>
    <h1>Gifts</h1>
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
  #header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 63px;
    margin: 0;
    background-color: #383838;
    opacity: 0.7;
    z-index: 1;
  }
  ul #nav {
    font-family: 'Raleway', sans-serif;
    display: block;
    padding: 0;
    text-align: center;

  }
  #nav li {
    display: inline;
    margin: 15px;
    color: #ffff;
    font-size: 20px;
  }

  #nav li:hover {
    color: #bebebe;
  }
</style>
