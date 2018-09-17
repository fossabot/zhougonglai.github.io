<template>
  <div id="dashboard">
    <v-navigation-drawer app v-model="drawer">
      <v-list class="pt-0" >
        <!-- <v-divider></v-divider> -->
        <v-list-tile v-for="item in items" exact :key="item.title" :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <img class="logo" src="@/assets/img/logo.png"  srcset="@/assets/img/logo@2x.png 2x" alt="logo"/>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <v-icon>help</v-icon>
          FAQ
        </v-btn>
        <v-btn flat>
          <v-icon>message</v-icon>
          Messages
        </v-btn>
        <v-avatar tile class="user-avatar">
          <img src="@/assets/Platform.png" alt="user-avatar">
        </v-avatar>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
  </div>
</template>
<script>
export default {
  name: 'DashBoardComponent',
  data: () => ({
    drawer: false,
    items: [
      { title: 'Home', icon: 'dashboard', path: '/dashboard' },
      { title: 'Calendar', icon: 'calendar_today', path: '/dashboard/calendar' },
    ]
  })
}
</script>
<style lang="stylus">
#dashboard
  flex 1
  .v-toolbar__title
    height inherit
    padding 8px 0
    .logo
      height 100%
  .v-toolbar__items
    align-items center
    .v-avatar.v-avatar--tile
      cursor pointer
      margin 8px
  .v-content
    height -webkit-fill-available
</style>
