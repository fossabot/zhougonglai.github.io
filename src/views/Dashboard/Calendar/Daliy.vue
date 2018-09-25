<template>
  <v-layout id="daliy">
    <v-flex class="daliy">
      <div class="daliy__head text-sm-left pa-2">
        {{activeDate && activeDate.getDate()}}
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <v-btn icon small :ripple="false" class="my-0" slot="activator">
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile v-for="(menu, index) in menus" :key="index" @click="togglerMenu(index)">
              <v-list-tile-avatar>
                <v-icon>{{menu.icon}}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-title>{{ menu.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </div>
      <div v-if="options.type" class="timeline-warp scroll-flow-y" id="timeline">
        <v-chip class="scroll_time">
          {{`Scroll Time - ${scrollTime.getHours()}:${scrollTime.getMinutes()}`}}
        </v-chip>
        <v-list class="timeline transparent" ref="timeline" v-scroll:#timeline="onScroll">
          <v-list-tile v-for="(task, i) in options.filter
            ? tasks.filter(task => new Date(task.date).getHours() > new Date().getHours()) 
            : tasks" :key="`task__${i}`" class="time_slot mx-2" :style="{top: `${new Date(task.date).getHours() * 10 + new Date(task.date).getMinutes()/6}vh`}">
              <v-list-tile-title class="slot_title">{{task.label}}</v-list-tile-title>
              <v-list-tile-sub-title class="slot_desc">{{new Date(task.date).toLocaleTimeString()}}</v-list-tile-sub-title>
          </v-list-tile>
        </v-list>
      </div>
      <v-list class="tasks transparent" v-else-if="tasks.length > 0">
        <template v-for="(task, i) in options.filter ? tasks.filter(task => new Date(task.date).getHours() > new Date().getHours()) : tasks">
          <v-list-tile class="task" :key="`task__${i}`">
            <v-list-tile-title>{{task.label}}</v-list-tile-title>
            <v-list-tile-sub-title>{{new Date(task.date).toLocaleTimeString()}}</v-list-tile-sub-title>
          </v-list-tile>
          <v-divider :key="`divider__${i}`"/>
          <v-spacer :key="`spacer__${i}`"/>
        </template>
      </v-list>
    </v-flex>
    <v-flex class="details">

    </v-flex>
  </v-layout>
</template>
<script>
import {mapState, mapActions} from 'vuex'
const options =  {
      type: false,
      filter: false
    }
export default {
  name: 'daliy',
  data:() => ({
    tasks: [],
    scrollTime: new Date(),
    options,
  }),
  computed:{
    menus(){
      return [
        this.options.type
        ? {
          title: '时间线模式',
          icon: 'timeline',
          active: this.options.type
        } 
        :{
          title: '列表模式',
          icon: 'list',
          active: this.options.type
        },
        this.options.filter
        ? {
          title: '过滤已完成任务',
          icon: 'timer',
          active: this.options.filter
        }
        :{
          title: '全部任务',
          icon: 'shutter_speed',
          active: this.options.filter
        }
      ]
    },
    ...mapState('user', [
      'calendar'
    ]),
    ...mapState('global',[
      'activeDate'
    ])
  },
  methods:{
    setActiveData(activeDate){
      this.tasks = this.calendar.filter(task => new Date(task.date).getDate() === activeDate.getDate())
      .sort((a,b) => new Date(a.date).getHours() - new Date(b.date).getHours())
    },
    togglerMenu(i){
      if(i){
        this.options.filter = !this.options.filter
      }else{
        this.options.type = !this.options.type
      }
    },
    onScroll(e){
      const fullTime = e.target.scrollHeight / 24;
      this.scrollTime.setHours(e.target.scrollTop / fullTime)
      this.scrollTime.setMinutes((e.target.scrollTop % fullTime)/fullTime*60);
      this.scrollTime = new Date(this.scrollTime)
    },
    ...mapActions('global',[
      'setActiveDate'
    ])
  },
  created(){
    const activeDate = new Date(parseInt(this.$route.query.date))
    this.setActiveDate(activeDate)
    .then(() => this.setActiveData(activeDate))
  },
  destroyed(){
    this.setActiveDate('')
  }
}
</script>
<style lang="stylus">
@import '../../../styles/mixin'

#daliy
  height -webkit-fill-available
  .daliy
    flex-direction column
    display flex
    position relative
    border-left 1px solid #ccc
    border-right 1px solid #ccc
    border-bottom 1px solid #ccc
    .daliy__head
      display flex
      border-bottom 1px solid #ccc
    .tasks
      flex 1
      .task
        background-color white
    .timeline-warp
      flex 1
      .scroll_time
        position absolute
        right 0
      .timeline
        height 240vh
        position relative
        .time_slot
          position absolute
          background-color #fff
          height 5vh
          border 1px solid #ccc
          width -webkit-fill-available
  .details
    flex 6
    border-right 1px solid #ccc
    border-bottom 1px solid #ccc
</style>
