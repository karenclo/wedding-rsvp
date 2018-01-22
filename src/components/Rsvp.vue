<template>
  <div class="rsvp section">
    <div class="content">
      <div class="title">
        RSVP
      </div>
      <div class="deadline">
        Please confirm by
        <span class="date">
          August 12, 2019!
        </span>
      </div>
      <div class="form-fields">
        <div>
          Your Name <input v-model="name">
        </div>
        <div>
          Guest Name <input v-model="name">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rsvp'
}
</script>

<style lang="scss" scoped>
  @import '../stylesheets/header.scss';
  .rsvp {
    background-color: pink;
    height: 100%;
    position: relative;
  }
  .deadline {
    font-family: 'Amatic SC', cursive;
    font-size: 30px;
    .date {
      font-weight: bold;
      font-size: 35px;
    }
  }
  .form-fields {
    font-family: 'Josefin Slab', serif;
  }
</style>
