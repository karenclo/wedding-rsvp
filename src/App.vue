<template>
  <div id="app">
    <ul>
      <li><router-link to="/">/</router-link></li>
      <li><router-link to="/rsvp">/rsvp</router-link></li>
      <li><router-link to="/story">/story</router-link></li>
      <li><router-link to="/weddingday">/weddingday</router-link></li>
      <li><router-link to="/travelinfo">/travelinfo</router-link></li>
      <li><router-link to="/registry">/registry</router-link></li>
    </ul>
    <transition name="fade" mode="out-in" @after-leave="afterLeave">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
