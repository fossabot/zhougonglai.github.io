<template>
  <v-layout row wrap fill-height id="user-panel">
    <v-flex d-flex sm6 fill-height>
      <v-card class="profile" color="blue">
        <v-card-title primary-title>
          <v-avatar class="user-pohoto" tile title="user pohoto">
            <img :src="pohoto" alt="user pohoto" />
          </v-avatar>
          <v-spacer class="user-panel">
            <h2 class="text-sm-left" v-text="[basicInfo.firstName, basicInfo.middleName, basicInfo.lastName].join(' ')" />
            <div v-text="localeDate" class="text-sm-left"></div>
            <div class="text-sm-left"> asfasf</div>
          </v-spacer>
          <v-btn flat icon color="primary">
            <v-icon>info</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="info-panel">
          <v-expansion-panel popout>
            <v-expansion-panel-content>
              <div slot="header">Basic Info</div>
              <v-card>
                <v-card-text>
                  <v-list>
                    <!-- 基本信息 -->
                    <v-list-tile>
                      <v-list-tile-action>
                        <v-icon v-text="basicInfo.gender ? 'fa fa-male' : 'fa fa-female'"></v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title v-text="[basicInfo.firstName, basicInfo.middleName, basicInfo.lastName].join(' ')"></v-list-tile-title>
                        <v-list-tile-sub-title>First name ,Middle name ,Last name</v-list-tile-sub-title>
                      </v-list-tile-content>
                      <v-list-tile-action>
                        <v-btn flat icon><v-icon>edit</v-icon></v-btn>
                      </v-list-tile-action>
                    </v-list-tile>
                    <v-divider />
                    <!-- 地址信息 -->
                    <v-list-tile>
                      <v-list-tile-action>
                        <v-icon>place</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title v-text="`from ${basicInfo.nationality}, live in ${basicInfo.residentialCountry} ${basicInfo.residentialCity}`" />
                        <v-list-tile-sub-title>Nationality ,Residential country ,Residential city</v-list-tile-sub-title>
                      </v-list-tile-content>
                      <v-list-tile-action>
                        <v-btn flat icon><v-icon>edit</v-icon></v-btn>
                      </v-list-tile-action>
                    </v-list-tile>
                    <v-divider />
                    <!-- 联系人 -->
                    <v-list-tile>
                      <v-list-tile-action>
                        <v-icon>contact_phone</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title v-text="`Mobile Phone: ${basicInfo.mobile.prefix}-${basicInfo.mobile.phone}, Skype: ${basicInfo.skype}`" />
                        <v-list-tile-sub-title>Mobile phone, Skype</v-list-tile-sub-title>
                      </v-list-tile-content>
                      <v-list-tile-action>
                        <v-btn flat icon><v-icon>edit</v-icon></v-btn>
                      </v-list-tile-action>
                    </v-list-tile>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <div slot="header">Education</div>
              <v-card>
                <v-card-text>
                  <v-chip disabled color="primary" text-color="white">
                    <v-avatar>
                      <v-icon color="white">school</v-icon>
                    </v-avatar>
                    High school
                  </v-chip>
                  <v-chip disabled color="primary" text-color="white">
                    <v-avatar>
                      <v-icon color="white">assignment_ind</v-icon>
                    </v-avatar>
                    TESOL
                  </v-chip>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <div slot="header">Training</div>
              <v-card>
                <v-card-text>
                  <v-list>
                    <v-list-tile v-for="(training, i) in tasks" :key="i">
                      <v-list-tile-content>
                        {{training.type}}
                      </v-list-tile-content>
                      <v-list-tile-action>
                        <v-btn flat icon>
                          <v-icon>send</v-icon>
                        </v-btn>
                      </v-list-tile-action>
                    </v-list-tile>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <div slot="header">Bank Card</div>
              <v-card>
                <v-card-text class="visa">
                  <div class="bank-card">
                    <div class="headline">Card Number</div>
                    <div class="display-1">1234-1234-1234-1234</div>
                    <div class="headline mt-4">Valid thru</div>
                    <div class="display-1">12/12</div>
                    <address class="mt-4">1600 Amphitheatre Parkway, Mountain View, CA 94043, USA</address>
                    <svg xmlns="http://www.w3.org/2000/svg" class="card__logo" width="140" height="43" viewBox="0 0 175.7 53.9">
                      <path class="visa" fill="#fff" d="M61.9 53.1l8.9-52.2h14.2l-8.9 52.2zm65.8-50.9c-2.8-1.1-7.2-2.2-12.7-2.2-14.1 0-24 7.1-24 17.2-.1 7.5 7.1 11.7 12.5 14.2 5.5 2.6 7.4 4.2 7.4 6.5 0 3.5-4.4 5.1-8.5 5.1-5.7 0-8.7-.8-13.4-2.7l-2-.9-2 11.7c3.3 1.5 9.5 2.7 15.9 2.8 15 0 24.7-7 24.8-17.8.1-5.9-3.7-10.5-11.9-14.2-5-2.4-8-4-8-6.5 0-2.2 2.6-4.5 8.1-4.5 4.7-.1 8 .9 10.6 2l1.3.6 1.9-11.3M164.2 1h-11c-3.4 0-6 .9-7.5 4.3l-21.1 47.8h14.9s2.4-6.4 3-7.8h18.2c.4 1.8 1.7 7.8 1.7 7.8h13.2l-11.4-52.1m-17.5 33.6c1.2-3 5.7-14.6 5.7-14.6-.1.1 1.2-3 1.9-5l1 4.5s2.7 12.5 3.3 15.1h-11.9zm-96.7-33.7l-14 35.6-1.5-7.2c-2.5-8.3-10.6-17.4-19.6-21.9l12.7 45.7h15.1l22.4-52.2h-15.1"/>
                      <path fill="#F7A600" d="M23.1.9h-22.9l-.2 1.1c17.9 4.3 29.7 14.8 34.6 27.3l-5-24c-.9-3.3-3.4-4.3-6.5-4.4"/>
                    </svg>

                    <v-btn dark icon class="edit">
                      <v-icon>edit</v-icon>
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <div slot="header">Social</div>
              <v-btn v-for="(val, key) in icons" :key="key" class="mx-3" :class="[key, val.active && 'active']" icon>
                <v-icon size="24px">{{val.icon}}</v-icon>
              </v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex d-flex sm3>
      panel2
    </v-flex>
    <v-flex d-flex sm3>
      panel3
    </v-flex>
  </v-layout>
</template>
<script>
import pohoto from '@/assets/Platform.png'
import {mapActions} from 'vuex';

export default {
  name: 'UserPanel',
  data:() => ({
    pohoto,
    localeDate: new Date().toLocaleString(),
    basicInfo: {
      firstName: 'Zhou',
      middleName: '',
      lastName: 'GongLai',
      gender: 1,
      nationality: 'U.S.A',
      residentialCountry: 'U.S.A',
      residentialCity: 'HangZhou',
      mobile: {
        prefix: '+86',
        phone: '12345678901'
      },
      skype: '12345678901',
      knowUs: 'Referee',
      referee: '838048635@qq.com'
    },
    tasks: [
      {
        type: 'Pre Work',
      },
      {
        type: 'Self Study'
      },
      {
        type: 'Transfer'
      }
    ],
    icons: {
      fb: {
        icon: 'fab fa-facebook',
        active: true
      },
      tw: {
        icon: 'fab fa-twitter',
        active: true
      },
      google: {
        icon: 'fab fa-google-plus',
        active: true
      },
      linkedin: {
        icon: 'fab fa-linkedin',
        active: false
      }
    },
    bankCard: {
      status: false
    }
  }),
  methods: {
    ...mapActions('provider',[
      'getPosition', 'getTimeZone'
    ])
  },
  created(){
    setInterval(() => {
      this.localeDate = new Date().toLocaleString()
    }, 1000)
    this.getPosition()
    .then(this.getTimeZone)
  }
}
</script>
<style lang="stylus">
#user-panel
  .fb
    &:hover,
    &.active
      color #4267b2
  .tw
    &:hover,
    &.active
      color #1DA1F2
  .google
    &:hover,
    &.active
      color #F44336
  .linkedin
    &:hover,
    &.active
      color #0072b3
  .user-pohoto
    width 75px
    height 75px
  .user-panel
    margin-left 50px
  .info-panel
    height calc(100% - 92px)
    overflow-y auto
  .visa
    display: flex;
    align-items: center;
    justify-content: center;
    .edit
      position absolute
      top 5px
      right 15px
    .address
      padding 15px
  .bank-card
    border-radius 6px
    width 600px
    transition all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)
    transform-style preserve-3d
    background linear-gradient(#21D4FD,transparent), linear-gradient(90deg,#10697D,transparent), linear-gradient(-90deg,#5B107F,transparent);
    background-blend-mode: screen;
    box-shadow: 0 10px 30px rgba(#000, .15);
    border-bottom 1px solid #252A3A
    color #fff
    padding 45px
    .card__logo
      position absolute
      bottom 25px
      right 25px
  .bank-card-back
    position absolute
    left 0
    top 0
  .v-list 
    .v-list__tile 
      .v-icon
        width 22px
</style>