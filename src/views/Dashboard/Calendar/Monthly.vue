<template>
  <v-layout column id="monthly">
    <v-layout v-if="month.length > 0" v-for="(week, i) in month" :key="`week__${i}`" class="daliys">
      <v-flex v-if="week.length > 0" v-for="daliy in week" :key="`date__${daliy.date.getDate()}`" class="daliy" @dblclick="activeDaliy(daliy)"
      :class="[`${daliy.date.getMonth() === new Date().getMonth()}`, {active: daliy.date.getDate() === new Date().getDate()}]">
        <div class="daliy__head pa-1 text-sm-left">
          {{daliy.date.getDate()}}
          <v-spacer />
          <v-menu offset-y>
            <v-btn icon small :ripple="false" class="my-0" slot="activator">
              <v-icon>more_horiz</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile v-for="(menu, index) in menus" :key="index">
                <v-list-tile-title>{{ menu.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </div>
        <template v-if="daliy.tasks && daliy.tasks.length > 0">
          <v-list class="tasks transparent" dense v-if="daliy.tasks.length <= 2">
            <v-list-tile class="task" v-for="(task, i) in daliy.tasks" :key="`task__${i}`" @click="activeTask(task)">
              <v-list-tile-title>{{task.label}}</v-list-tile-title>
              <v-list-tile-sub-title>{{ new Date().getMeridiemSuffixOfInteger(new Date(task.date).getHours())}}</v-list-tile-sub-title>
            </v-list-tile>
          </v-list>
          <v-menu offset-y v-else>
            <v-btn class="my-0 mx-2" block :ripple="false" slot="activator">
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile v-for="(task, index) in daliy.tasks" :key="`task__${index}`" @click="activeTask(task)">
                <v-list-tile-title>{{ task.label }}</v-list-tile-title>
                <v-list-tile-sub-title>{{new Date().getMeridiemSuffixOfInteger(new Date(task.date).getHours())}}</v-list-tile-sub-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </template>
      </v-flex>
    </v-layout>
    <v-layout v-else>
      <v-progress-circular :size="100" :width="5" color="primary" indeterminate />
    </v-layout>
  </v-layout>
</template>
<script>
import {mapActions} from 'vuex'

export default {
  name: 'monthly',
  data:() => ({
    month: [],
    menus: [
      {
        title: '请假',
      },
      {
        title: '详细'
      }
    ],
  }),
  methods:{
    activeTask(task) {
      this.setActiveDate(new Date(task.date))
      .then(()=>{
        this.$router.push({name: 'daliy', query: {date: new Date(task.date).getTime(), active: task.id}})
      })
    },
    activeDaliy(daliy){
      this.setActiveDate(new Date(daliy.date))
      .then(()=>{
        this.$router.push({name: 'daliy', query: {date: new Date(daliy.date).getTime()}})
      })
    },
    ...mapActions('global', [
      'setActiveDate'
    ]),
    ...mapActions('user',[
      'getCalendar'
    ])
  },
  created(){
    this.getCalendar()
    .then(({tasks})=>{
      this.month = new Date().getTheMonth().map(week =>
        week.map(date => ({
          date,
          tasks: tasks.filter(task => new Date(task.date).getDate() === date.getDate())
                .sort((a,b) => new Date(a.date).getHours() - new Date(b.date).getHours())
        }))
      )
    })
  }
}
</script>
<style lang="stylus">
#monthly
  height -webkit-fill-available
  .daliys
    border-left 1px solid #ccc
    border-right 1px solid #ccc
    height -webkit-fill-available
    &+.daliys
      border-top 1px solid #ccc
    &:last-child
      border-bottom 1px solid #ccc
    .daliy
      width -webkit-fill-available
      flex-direction column
      display flex
      &.false
        background-color #E0E0E0
      &.active
        box-shadow inset 0 0 0 1px #46D4DD
      &:not(:first-child)
        border-left 1px solid #ccc
      &:hover
        box-shadow inset 0 0 0 1px #46D4DD
      .daliy__head
        display flex
      .tasks
        flex 1
</style>
