<template>
  <v-layout row wrap fill-height id="user-panel">
    <!-- User Panel -->
    <v-flex sm6 fill-height class="scroll-flow-y">
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Training Task</v-list-tile-title>
            <v-list-tile-sub-title>Self Stady: Video</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon><v-icon>send</v-icon></v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-card class="profile mt-3">
        <v-card-title primary-title>
          <v-avatar class="user-pohoto" tile title="user pohoto">
            <img :src="pohoto" alt="user pohoto" />
          </v-avatar>
          <v-spacer class="user-panel">
            <h2 class="text-sm-left" v-text="[info.firstName, info.middleName, info.lastName].join(' ')" />
            <div v-text="`${localeDate} time on: America/New_York`" class="text-sm-left"></div>
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
                        <v-icon v-text="info.gender ? 'fa fa-male' : 'fa fa-female'"></v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title v-text="[info.firstName, info.middleName, info.lastName].join(' ')"></v-list-tile-title>
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
                        <v-list-tile-title v-text="`from ${info.nationality}, live in ${info.residentialCountry} ${info.residentialCity}`" />
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
                        <v-list-tile-title v-if="info.mobile" v-text="`Mobile Phone: ${info.mobile.prefix}-${info.mobile.phone}, Skype: ${info.skype}`" />
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
            <v-expansion-panel-content>
              <div slot="header">Security</div>
              <v-list>
                <v-list-tile v-for="(security, i) in securitys" :key="i">
                  <v-list-tile-content>
                    <v-list-tile-title v-text="`Log on: ${security.address}`" />
                    <v-list-tile-sub-title v-text="security.time" />
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-btn icon>
                      <v-icon>help</v-icon>
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex sm3 class="px-3">
      <v-text-field class="task__input" v-model="task" label="Add a Task" solo @keydown.enter="create">
        <v-fade-transition slot="append">
          <v-icon v-if="task" @click="create">
            add_circle
          </v-icon>
        </v-fade-transition>
      </v-text-field>
      <h2 class="headline success--text pl-3">
        Tasks:&nbsp;
        <v-fade-transition leave-absolute>
          <span :key="`tasks-${todos.length}`">
            {{ todos.length }}
          </span>
        </v-fade-transition>
      </h2>
      <v-divider class="mt-3"></v-divider>
      <v-layout class="my-1 task__process" align-center>
        <strong class="mx-3 info--text text--darken-3">
          Remaining: {{ remainingTasks }}
        </strong>
        <v-divider vertical></v-divider>
        <strong class="mx-3 black--text">
          Completed: {{ completedTasks }}
        </strong>
        <v-spacer></v-spacer>
        <v-progress-circular :value="progress" class="mr-2" />
      </v-layout>
      <v-divider class="mb-3"></v-divider>

      <v-card v-if="tasks.length > 0">
        <v-slide-y-transition class="py-0" group tag="v-list">
          <template v-for="(task, i) in todos">
            <v-divider v-if="i !== 0" :key="`${i}-divider`"/>
            <v-list-tile :key="`${i}-${task.text}`">
              <v-list-tile-action>
                <v-checkbox v-model="task.done" color="info darken-3">
                  <div slot="label" :class="task.done && 'grey--text' || 'text--primary'"
                    class="ml-3" v-text="task.text"></div>
                </v-checkbox>
              </v-list-tile-action>
              <v-spacer></v-spacer>
              <v-scroll-x-transition>
                <v-icon v-if="task.done" color="success">
                  check
                </v-icon>
              </v-scroll-x-transition>
            </v-list-tile>
          </template>
        </v-slide-y-transition>
      </v-card>
    </v-flex>

    <v-flex d-flex sm3>
      <v-list two-line class="daliy">
        <v-subheader>Landi Daliy</v-subheader>
        <template v-for="(item, index) in daliy">
          <v-list-tile :key="`item__${index}`">
            <v-list-tile-avatar>
              <img :src="item.avatar" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"/>
              <v-list-tile-sub-title v-text="item.subtitle" />
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset :key="`item--${index}`" v-if="daliy.length !== index"/>
        </template>
      </v-list>
    </v-flex>
  </v-layout>
</template>
<script>
import pohoto from '@/assets/Platform.png'
import {mapActions, mapState} from 'vuex';

export default {
  name: 'UserPanel',
  data:() => ({
    pohoto,
    localeDate: new Date().toLocaleString(),
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
    task: '',
    todos: [
      {
        done: false,
        text: 'Metting on 3:00 PM'
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
    },
    daliy:[
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ',
        subtitle: "Wish I could come, but I'm out of town this weekend."
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: "Do you have Paris recommendations? Have you ever been?"
      }
    ]
  }),
  computed:{
    completedTasks () {
      return this.todos.filter(task => task.done).length
    },
    progress () {
      return this.completedTasks / this.todos.length * 100
    },
    remainingTasks () {
      return this.todos.length - this.completedTasks
    },
    ...mapState('user', [
      'info', 'securitys'
    ])
  },
  methods: {
    create(){
      this.todos.push({
        done: false,
        text: this.task
      })
      this.task = null
    },
    ...mapActions('provider',[
      'getPosition', 'getTimeZone', 'addPermission', 'removePermission'
    ]),
    ...mapActions('user', [
      'getInfo', 'securityLog'
    ])
  },
  created(){
    setInterval(() => {
      this.localeDate = new Date().toLocaleString()
    }, 1000)

    this.getInfo()
    .then(() => this.securityLog())

    navigator.permissions.query({name:'geolocation'})
    .then((permissionStatus) => {
       switch(permissionStatus.state){
         case 'granted':
          this.addPermission('geolocation')
          this.getPosition()
         break;
         case 'denied':
          this.removePermission('geolocation')
         break;
       }
    })
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
    &.daliy
      width 100%
    .v-list__tile 
      .v-icon
        width 22px
  .v-input--selection-controls 
    .v-input__slot
      margin-bottom 0
</style>