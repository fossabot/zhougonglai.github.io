<template>
  <v-layout id="weekly">
    <v-flex v-for="(daliy, i) in week" class="daliy" :class="{active: daliy.date.getDate() === new Date().getDate()}"
    :key="`daliy__${daliy.date.getDate()}`" @click="activeDaliy(daliy, i)">
      <div class="daliy__head text-sm-left pa-1">{{daliy.date.getDate()}}</div>
      <v-list class="tasks transparent" v-if="daliy.tasks.length > 0">
        <v-list-tile class="task" v-for="(task, i) in daliy.tasks" :key="`task__${i}`">
          <v-list-tile-title>{{task.label}}</v-list-tile-title>
          <v-list-tile-sub-title>{{daliy.date.toLocaleTimeString()}}</v-list-tile-sub-title>
        </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
</template>
<script>
import {mapState, mapActions} from 'vuex';

export default {
  name: 'weekly',
  data:() => ({
    week: []
  }),
  computed:{
    ...mapState('user', [
      'calendar'
    ]),
    ...mapState('global',[
      'activeDate'
    ])
  },
  methods:{
    activeDaliy(daliy) {
      this.setActiveDate(daliy.date)
      .then(()=>{
        this.$router.push({name: 'daliy', query: {date: daliy.date.getTime()}})
      })
    },
    ...mapActions('global', [
      'setActiveDate'
    ])
  },
  created(){
    this.week = new Date().getWeek().map(date => ({
      date, tasks:this.calendar.filter(task => new Date(task.date).getDate() === date.getDate())
    }))
  }
}
</script>
<style lang="stylus">
#weekly
  height -webkit-fill-available
  border-left 1px solid #ccc
  border-right 1px solid #ccc
  border-bottom 1px solid #ccc
  .calendar__labels
    flex-grow 0
    user-select none
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
