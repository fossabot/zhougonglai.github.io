<template>
  <div id="login">
    <v-btn icon class="backhome" to="/" 
    v-ga="$ga.commands.trackEvent.bind(this,'backHome', 'click', '返回首页', new Date().toString())">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-card>
      <v-card-title>
        <h3 class="headline ma-0">
          Sign In
        </h3>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-landilogo1"></use>
        </svg>
      </v-card-title>
      <v-card-text>
        <v-form lazy-validation v-model="login.valid">
          <v-text-field v-model="login.email" label="Email address" 
            type="email" prepend-inner-icon="person_outline" 
            solo :required="login.valid" 
            :rules="login.valid ? [] : login.mailRules" />
          <v-text-field v-model="login.password" label="Password"
            :type="login.pwType? 'password': 'text'" :prepend-inner-icon="login.pwType? 'lock': 'lock_open'" 
            solo :required="login.valid" :hint="login.score[login.strength] + login.warning + login.suggestions"
            @input="pwInput" :rules="login.valid ? [] : login.passwordRules"
            @click:prepend-inner="togglePWType">
            <v-fade-transition slot="append">
              <div class="password-input-docs">
                <div class="password-input-doc" :class="{select:login.strength === 4}"/>
                <div class="password-input-doc" :class="{select:login.strength >= 3}"/>
                <div class="password-input-doc" :class="{select:login.strength >= 2}"/>
                <div class="password-input-doc" :class="{select:login.strength >= 1}"/>
              </div>
            </v-fade-transition>
          </v-text-field>
          <v-btn :loading="login.loading" block round color="primary" @click="signIn">Sign In</v-btn>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn v-for="(val, key) in icons" :key="key" class="mx-3" :class="key" icon>
          <v-icon size="24px">{{val}}</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import zxcvbn from 'zxcvbn'
import {mapActions} from 'vuex'

export default {
  name: 'LoginComponent',
  data:() => ({
    icons: {
      fb:'fab fa-facebook',
      tw:'fab fa-twitter',
      google:'fab fa-google-plus',
      linkedin:'fab fa-linkedin'
    },
    login: {
      email: '',
      password: '',
      pwType: true,
      loading: false,
      valid: true,
      strength: 0,
      score: {
        0: "Worst ☹ ",
        1: "Bad ☹ ",
        2: "Weak ☹ ",
        3: "Good ☺ ",
        4: "Strong ☻ "
      },
      warning: '',
      suggestions: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length <= 10 || 'Password must be less than 10 characters'
      ],
      mailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    },
  }),
  methods: {
    togglePWType(){
      this.login.pwType = !this.login.pwType
    },
    pwInput(){
      const {score , feedback} = zxcvbn(this.login.password);
      this.login.strength = score
      this.login.warning = feedback.warning
      this.login.suggestions = feedback.suggestions
    },
    signIn(){
      this.login.loading = true
      this.$firebase.auth().signInWithEmailAndPassword(this.login.email, this.login.password)
      .then(() => {
        this.login.loading = false
        this.$router.push('/dashboard')
      })
      .catch(({message}) => {
        this.login.loading = false
        this.openSnackBar({ message })
      });
    },
    ...mapActions('user',[
      'setInfo'
    ]),
    ...mapActions('global', [
      'openSnackBar'
    ])
  },
  created(){
    this.$firebase.auth().onAuthStateChanged((user) =>{
      if (user) {
        const {displayName, email, emailVerified, photoURL, isAnonymous, uid, providerData} = user;
        this.setInfo({displayName, email, emailVerified, photoURL, isAnonymous, uid, providerData})
      }
    });
  }
}
</script>

<style lang="stylus">
#login
  width 100%
  flex 1
  display flex
  align-items center
  justify-content center
  .backhome
    position absolute
    top 25px
    left 25px

  .v-card
    width 400px
    .v-card__title
      align-items center
      justify-content space-between
      .icon
        height 32px
        width 32px
    .v-card__actions
      justify-content center
      .fb:hover
        color #4267b2
      .tw:hover
        color #1DA1F2
      .google:hover
        color #F44336
      .linkedin:hover
        color #0072b3

  .password-input-docs
    .password-input-doc
      height 3px
      width 4px
      margin 2px
      background-color #e3f2ff
      &.select
        background-color #2895F1

</style>
