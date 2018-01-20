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
    <div>
      <Home></Home>
    </div>
    <div>
      <Story></Story>
    </div>
    <div>
      <WeddingDay></WeddingDay>
    </div>
    <div>
      <TravelInfo></TravelInfo>
    </div>
    <div>
      <Rsvp></Rsvp>
    </div>
    <div>
      <Gifts></Gifts>
    </div>
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
  ul {
    font-weight: bold;
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
