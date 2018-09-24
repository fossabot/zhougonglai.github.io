<template>
  <v-app class="grey lighten-3">
    <router-view/>
    <v-snackbar v-model="snackbar.status" top auto-height>
      {{snackbar.message}}
      <v-btn color="pink" flat @click="closeSnackBar">
        Close
      </v-btn>
    </v-snackbar>
    <v-footer height="auto" app v-if="$route.path.indexOf('/dashboard') === -1">
      <v-card class="flex" flat tile>
        <v-card-title class="primary">
          <strong class="subheading white--text">Get connected with us on social networks!</strong>
          <v-spacer></v-spacer>
          <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-actions class="justify-center primary white--text">
          &copy;2018 — <strong>Landi</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'app',
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram'
    ]
  }),
  computed:{
    ...mapState('global',[
      'snackbar'
    ])
  },
  methods: {
    ...mapActions([
      'appInit'
    ]),
    ...mapActions('global',[
      'closeSnackBar'
    ])
  },
  created(){
    this.appInit();
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
</style>
