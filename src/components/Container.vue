<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="container">
    <div id="header">
      <ul id="nav">
        <li class="home-nav" v-on:click="scrollToSection('.home')">HOME</li>
        <li class="story-nav" v-on:click="scrollToSection('.story')">STORY</li>
        <li class="wedding-nav" v-on:click="scrollToSection('.wedding-day')">WEDDING DAY</li>
        <li class="travel-nav" v-on:click="scrollToSection('.travel-info')">TRAVEL INFO</li>
        <li class="rsvp-nav" v-on:click="scrollToSection('.rsvp')">RSVP</li>
        <li class="gifts-nav" v-on:click="scrollToSection('.gifts')">GIFTS</li>
      </ul>
    </div>
    <Home></Home>
    <Story></Story>
    <WeddingDay></WeddingDay>
    <TravelInfo></TravelInfo>
    <Rsvp></Rsvp>
    <Gifts></Gifts>
  </div>
</template>

<script>

import Home from '@/components/Home'
import Story from '@/components/Story'
import Rsvp from '@/components/Rsvp'
import TravelInfo from '@/components/TravelInfo'
import WeddingDay from '@/components/WeddingDay'
import Gifts from '@/components/Gifts'
export default {
  name: 'Container',
  methods: {
    scrollToSection: function (section) {
      $('html, body').animate({
        scrollTop: $(section).offset().top
      }, 750)
    }
  },
  components: {
    Home,
    Story,
    Rsvp,
    TravelInfo,
    WeddingDay,
    Gifts
  }
}
</script>

<style>
  .container {
    height: 100%;
    position: relative;
  }
  #header {
    position: fixed;
    top: 10px;
    left: 0;
    width: 100%;
    margin: 0;
    z-index: 1;
  }
  ul {
    font-family: 'Josefin Slab', serif;
    display: block;
    padding: 0;
    text-align: center;

  }
  #nav li {
    display: inline;
    margin: 15px;
    color: black;
    font-size: 15px;
  }

  #nav li:hover {
    color: #bebebe;
  }
</style>
