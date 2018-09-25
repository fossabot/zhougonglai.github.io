<template>
  <v-layout column fill-height id="calendar">
    <v-layout align-center class="toolbar">
      <div>
        <v-btn small outline flat color="primary" @click="today">Today</v-btn>
        <v-btn small outline flat @click="prevPart">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-btn small outline flat @click="nextPart">
          <v-icon>arrow_forward</v-icon>
        </v-btn>
        {{
          activeDate && activeDate.constructor.name === "Date"
          ? activeDate.toLocaleDateString()
          : new Date().toLocaleDateString()
        }}
      </div>
      <v-spacer />
      <v-btn-toggle v-model="calendar_model" mandatory>
        <v-btn flat small exact value="Monthly" to="/dashboard/calendar">Monthly</v-btn>
        <v-btn flat small exact value="Weekly" to="/dashboard/calendar/weekly">Weekly</v-btn>
        <v-btn flat small value="Daliy" :to="daliy">Daliy</v-btn>
      </v-btn-toggle>
    </v-layout>
    <v-layout class="calendar__labels py-2">
      <v-flex v-for="label in labels" :key="label" class="calendar__label" v-text="label" />
    </v-layout>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </v-layout>
</template>
<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'Calendar',
  data:() => ({
    calendar_model: 'Monthly',
    daliy: {name: 'daliy',query: {date: Date.now()}}
  }),
  watch:{
    activeDate (val) {
      if(val && val.constructor.name === "Date"){
        this.calendar_model = 'Daliy'
      }
    }
  },
  computed:{
    labels(){
      const Labels = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
      if(this.activeDate && this.activeDate.constructor.name === "Date" && this.$route.name === 'daliy'){
        return Labels.filter((label, i) => i === this.activeDate.getDay())
      } else {
        return Labels
      }
    },
    ...mapState('global',[
      'activeDate'
    ])
  },
  methods:{
    gotoDaliy(){
      this.$router.push({
        name: 'daliy',
        query: {
          date: Date.now()
        }
      })
    },
    today(){
      switch(this.calendar_model){
        case 'Monthly':
          this.openSnackBar({message: '还没有实现月级别切换'});
          break;
        case 'Weekly':
          break;
        case 'Daliy':
          this.setActiveDate(new Date())
          break;
      }
    },
    prevPart(){
      switch(this.calendar_model){
        case 'Monthly':
          this.openSnackBar({message: '还没有实现月级别切换'});
          break;
        case 'Weekly':
          console.log('Weekly')
          break;
        case 'Daliy':
          this.setActiveDate(new Date(this.activeDate.setDate(this.activeDate.getDate() - 1)))
          break;
      }
    },
    nextPart(){
      switch(this.calendar_model){
        case 'Monthly':
          this.openSnackBar({message: '还没有实现月级别切换'});
          break;
        case 'Weekly':
          console.log('Weekly')
          break;
        case 'Daliy':
          this.setActiveDate(new Date(this.activeDate.setDate(this.activeDate.getDate() + 1)))
          break;
      }
    },
    ...mapActions('global',[
      'openSnackBar', 'setActiveDate'
    ])
  },
  created(){
  }
}
</script>
<style lang="stylus">
@import '../../styles/mixin'
#calendar
  flex 1
  .toolbar
    flex-grow 0
  .calendar__labels
    flex-grow 0
    user-select none
    border-bottom 1px solid #ccc
</style>
