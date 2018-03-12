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
      <br>

      <div class="form-fields" v-if="!showGuestInfo">
        <div>
          Phone Number: <input class="phone-number" v-model="phoneNumber" placeholder="xxxxxxxxxx">
          <br>
          {{error}}
        </div>
        <button v-on:click="getGuestInfo">NEXT</button>
      </div>
      <div class="guest-info" v-if="showGuestInfo">
        <div class="guest-field">
          Your Name:
          <span class="guest-field-value">{{guestInfo.name}}</span>
        </div>
        <div class="guest-field">
          Your Guest:
          <input class="plus-one guest-field-value" v-model="guestInfo.plusOne">
        </div>
        <div class="guest-field">
          Attendance Status:
          <toggle-button class="toggle-btn"
            @change="onChangeAttendance"
            :value="guestInfo.isAttending" :color="{checked: '#3FE3A0', unchecked: '#919192'}" :sync="true"
            :labels="{checked: 'Accept', unchecked: 'Decline'}" :width="78">
          </toggle-button>
        </div>
        <div class="guest-field" v-show="guestInfo.isAttending">
          Staying at Hyatt Ziva Los Cabos?
          <toggle-button class="toggle-btn"
            @change="onChangeStay"
            :value="guestInfo.isStayingAtHyatt" :color="{checked: '#3FE3A0', unchecked: '#919192'}" :sync="true"
                         :labels="{checked: 'Yes', unchecked: 'No'}" :width="56">
          </toggle-button>
        </div>
        <br>

        <button v-on:click="saveGuestInfo">SAVE</button>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../Database'

let guestsRef = db.ref('guests')

export default {
  name: 'Rsvp',
  data: () => {
    return {
      guestInfo: {
        name: '',
        plusOne: '',
        isAttending: false,
        isStayingAtHyatt: false
      },
      phoneNumber: '',
      showGuestInfo: false,
      error: ''
    }
  },
  firebase: () => {
    return {
      guests: guestsRef
    }
  },
  methods: {

    // Retrieve guest info based on phone number input
    getGuestInfo: function () {
      let that = this

      if (!this.phoneNumber) {
        that.error = 'Please enter a valid number'
      } else {
        db.ref('/guests/' + this.phoneNumber).once('value').then(function (snapshot) {
          // Snapshot did not contain any info
          if (!snapshot.val()) {
            that.error = 'Oops! We couldn\'t find you!'
          } else {
            that.error = ''
            let currGuest = snapshot.val()

            that.guestInfo.name = currGuest.name
            that.guestInfo.plusOne = currGuest.plusOne
            that.guestInfo.isAttending = currGuest.isAttending
            that.guestInfo.isStayingAtHyatt = currGuest.isStayingAtHyatt

            that.showGuestInfo = true
          }
        }, function () {
          that.error = 'Oops! We ran into an error retrieving your info.'
        })
      }
    },

    saveGuestInfo: function () {
      this.error = ''
      this.showGuestInfo = false
      let that = this

      db.ref('/guests/' + this.phoneNumber).set({
        name: that.guestInfo.name,
        plusOne: that.guestInfo.plusOne,
        isAttending: that.guestInfo.isAttending,
        isStayingAtHyatt: that.guestInfo.isStayingAtHyatt
      })
    },

    onChangeAttendance: function () {
      this.guestInfo.isAttending = !this.guestInfo.isAttending
    },

    onChangeStay: function () {
      this.guestInfo.isStayingAtHyatt = !this.guestInfo.isStayingAtHyatt
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

    .guest-field {
      margin-top: 10px;
      font-size: 18px;
    }

    .phone-number {
      border-style: none;
      height: 25px;
      width: 110px;
      text-align: center;
      margin-left: 5px;
    }

    .guest-field-value, .phone-number {
      font-family: 'Amatic SC', cursive;
      font-size: 20px;
      font-weight: bold;
      color: #636376;
    }

    .plus-one {
      border-style: none;
      height: 25px;
      width: 145px;
      padding-left: 5px;
    }
  }
  button {
    width: 120px;
    height: 30px;
    border-radius: 30px;
    margin-top: 35px;
    border-style: none;
    font-size: 12px;
    font-family: 'Josefin Slab', serif;

  }

  .toggle-btn {
    font-size: 15px;
  }

</style>
