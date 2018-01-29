<template xmlns:v-on="http://www.w3.org/1999/xhtml">
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
        <!--<ul>-->
          <!--<li v-for="guest in guests" :key="guest.id">-->
            <!--{{guest}}-->
          <!--</li>-->
        <!--</ul>-->
        <div>
          Phone Number <input v-model="phoneNumber" placeholder="">
          {{phoneNumber}}
          <br>
        </div>
        <button v-on:click="getGuestInfo">next</button>
      </div>
      <div class="guest-info">
        Your Name: {{guestInfo.name}}
        <br>
        Your Guest: {{guestInfo.plusOne}}
        <br>
        Attending? {{guestInfo.isAttending}}
        <br>
        Staying at Hyatt Ziva Los Cabos? {{guestInfo.isStayingAtHyatt}}
        <br>
        Leave a message! {{guestInfo.message}}
      </div>
    </div>
  </div>
</template>

<script>
import db from '../Database'

let guestsRef = db.ref('guests')

let data = {
  guestInfo: {
    name: '',
    plusOne: '',
    isAttending: '',
    isStayingAtHyatt: '',
    message: ''
  },
  phoneNumber: ''
}

export default {
  name: 'Rsvp',
  data: () => {
    return data
  },
  firebase: () => {
    return {
      guests: guestsRef
    }
  },
  methods: {
    getGuestInfo: function () {
      // validate phone number
      if (this.phoneNumber in this.guests[0]) {
        let currGuest = this.guests[0][this.phoneNumber]
        this.guestInfo.name = currGuest.name
        this.guestInfo.plusOne = currGuest.plusOne
        this.guestInfo.isAttending = currGuest.isAttending
        this.guestInfo.isStayingAtHyatt = currGuest.isStayingAtHyatt
        this.guestInfo.message = currGuest.message
      }
    }
  }
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
  .form-fields, .guest-info {
    font-family: 'Josefin Slab', serif;
  }
</style>
