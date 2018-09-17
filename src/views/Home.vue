<template>
  <div id="home">
    <div class="bgVideo">
      <v-system-bar status dark color="primary">
        <img src="https://www.hotjar.com/hubfs/gdpr-header-icon.svg" />
        <span>Start Teaching ESL Online For $18-25 USD/hour!</span>
        <img src="https://www.hotjar.com/hubfs/gdpr-header-more-arrow.svg" />
      </v-system-bar>
      <video :src="video.bg_video" autoplay loop muted poster="https://teacher.landi.com/dist/t_recruit/images/video-poster.jpg"/>
      <v-responsive width="100%" max-height="600px" :aspect-ratio="16/9">
        <v-container fill-height>
          <v-layout column >
          <header class="headerBar">
            <img class="logo" src="@/assets/img/logo.png"  srcset="@/assets/img/logo@2x.png 2x" alt="logo"/>
            <v-spacer />
            <v-btn flat class="white--text" to="/" v-ga="$ga.commands.trackEvent.bind(this, 'navgate', 'click', '首页', new Date().toString())">Home</v-btn>
            <v-btn flat class="white--text" to="/positions" v-ga="$ga.commands.trackEvent.bind(this,'navgate', 'click', '职位', new Date().toString())">Positions</v-btn>
            <v-btn flat class="white--text" v-ga="$ga.commands.trackEvent.bind(this,'navgate', 'click', '博客', new Date().toString())">Blog</v-btn>
            <v-btn flat class="white--text" to="/about" v-ga="$ga.commands.trackEvent.bind(this,'navgate', 'click', '信息', new Date().toString())">FAQ</v-btn>

            <div class="sign">
              <button class="JoinUs" @click="registy" v-ga="$ga.commands.trackEvent.bind(this,'login', 'click', '登录', new Date().toString())">
                Join Us
              </button>
              <button class="LogIn" @click="login"
              v-ga="$ga.commands.trackEvent.bind(this,'register', 'click', '注册', new Date().toString())">
                Log In
              </button>
            </div>
          </header>
          <v-flex>
            <v-card tile>
              <v-card-title>
                <h3 class="headline ma-0">Apply Now</h3>
              </v-card-title>
              <v-card-text>
                <v-form lazy-validation v-model="register.valid">
                  <v-text-field v-model="register.email" label="Email address" 
                    type="email" prepend-inner-icon="person_outline" 
                    solo :required="register.valid" 
                    :rules="register.valid ? [] : register.mailRules">
                    <v-fade-transition slot="append" v-if="register.loading">
                      <v-progress-circular
                        size="24"
                        color="info"
                        indeterminate
                      ></v-progress-circular>
                    </v-fade-transition>
                  </v-text-field>
                  <v-text-field v-model="register.password" label="Password"
                    :type="register.pwType? 'password': 'text'" :prepend-inner-icon="register.pwType? 'lock': 'lock_open'" 
                    solo :required="register.valid" :hint="register.score[register.strength] + register.warning + register.suggestions" @input="pwInput"
                    :rules="register.valid ? [] : register.passwordRules"
                    @click:prepend-inner="togglePWType">
                    <v-fade-transition slot="append">
                      <v-progress-circular
                        v-if="register.loading"
                        size="24"
                        color="info"
                        indeterminate
                      ></v-progress-circular>
                      <div v-else class="password-input-docs">
                        <div class="password-input-doc" :class="{select:register.strength === 4}"/>
                        <div class="password-input-doc" :class="{select:register.strength >= 3}"/>
                        <div class="password-input-doc" :class="{select:register.strength >= 2}"/>
                        <div class="password-input-doc" :class="{select:register.strength >= 1}"/>
                      </div>
                    </v-fade-transition>
                  </v-text-field>
                  <v-btn :loading="register.loading" block round color="primary" @click="registerCompleted">Sign Up</v-btn>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn v-for="(val, key) in icons" :key="key" class="mx-3" :class="key" 
                icon @click="signWithPopup(key)">
                  <v-icon size="24px">{{val}}</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
            <div class="display-3 text-center">Better Teaching</div>
            <div class="display-3 text-center">With Peer Learning</div>

            <v-btn color="primary" class="white--text" v-ga="$ga.commands.trackEvent.bind(this,'playMedia', 'click', '介绍视频', new Date().toString())">
              <v-icon>play_arrow</v-icon>
            </v-btn>
          </v-flex>
          </v-layout>
        </v-container>
      </v-responsive>
    </div>
    <div class="Partnership flex-center">
      <img src="@/assets/img/alibaba.png" srcset="@/assets/img/alibaba@2x.png 2x" alt="alibaba" />
      <img src="@/assets/img/tencent.png" srcset="@/assets/img/tencent@2x.png 2x" alt="tencent" />
      <img src="@/assets/img/oracle.png" srcset="@/assets/img/oracle@2x.png 2x" alt="oracle" />
      <img src="@/assets/img/hujiang.png" srcset="@/assets/img/hujiang@2x.png 2x" alt="hujiang" />
    </div>
  </div>
</template>

<script>
import zxcvbn from 'zxcvbn'
import {mapActions} from 'vuex';

export default {
  name: 'HomeComponent',
  data(){
    return {
      user: {
        "sid": "540000197109078328",
        "nickname": "Michelle Moore",
        "coin": 680,
        "avatar": "http://dummyimage.com/120X120"
      },
      icons: {
        fb:'fab fa-facebook',
        tw:'fab fa-twitter',
        google:'fab fa-google-plus',
        linkedin:'fab fa-linkedin'
      },
      register: {
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
      video:{
        bg_video: 'https://qn-video.abc360.com/landi_teacher_1.mp4'
      }
    }
  },
  methods:{
    togglePWType(){
      this.register.pwType = !this.register.pwType
    },
    pwInput(){
      const {score , feedback} = zxcvbn(this.register.password);
      this.register.strength = score
      this.register.warning = feedback.warning
      this.register.suggestions = feedback.suggestions
    },
    signWithPopup(key){
      
      switch(key){
        case 'fb':
          if('FB' in window){
            window.FB.getLoginStatus(({authResponse}) =>{
              if(authResponse){
                console.log(authResponse)
                this.$router.push('/dashboard')
              }else{
                window.FB.login((response)=>{
                  console.log(response)
                },{scope: 'public_profile,email'})
              }
            });
          }
          break;
        case 'tw':
          break;
        case 'google':
          break;
        case 'linkedin':
          break;
      }
      /* eslint-disable */
      /* eslint-enable */
    },
    registy(){
      this.openSnackBar({
        message: "请使用下方的快捷注册"
      })
    },
    login(){
      this.$router.push('/login')
    },
    registerCompleted(){
      this.register.loading = true;
      this.$firebase.auth().createUserWithEmailAndPassword(this.register.email, this.register.password)
      .then(() =>{
        this.$router.push('/dashboard')
        window.FB.AppEvents.logEvent(window.FB.AppEvents.EventNames.COMPLETED_REGISTRATION, null, {
          [window.FB.AppEvents.ParameterNames.REGISTRATION_METHOD]: 'firebase_emal'
        });
      })
      .catch(({message}) => {
        this.register.loading = false
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
      this.register.loading = false;
      if (user) {
        const {displayName, email, emailVerified, photoURL, isAnonymous, uid, providerData} = user;
        this.setInfo({displayName, email, emailVerified, photoURL, isAnonymous, uid, providerData})
      } else {
        console.log('sign Out', user)
      }
    });
    if(process.env.NODE_ENV=== 'production'){
      window.grecaptcha.ready(function(){
        window.grecaptcha.execute('6LejNG8UAAAAAC2CvcJuCW6b-nEzkKM9OIn_nnJl', {action: 'homepage'})
        .then((token) => {
          console.log('grecaptcha', token)
        });
      });
    }
  }
}
</script>
<style lang="stylus">
#home
  width 100vw
  box-sizing border-box
  display flex
  flex-direction column
  position relative
  overflow-y auto

  embed
    height -webkit-fill-available

  .password-input-docs
    .password-input-doc
      height 3px
      width 4px
      margin 2px
      background-color #e3f2ff
      &.select
        background-color #2895F1
  .bgVideo
    position relative
    height 600px
    overflow hidden
    display flex
    align-items center
    justify-content center
    flex-direction column
    video
      position absolute
      z-index 0
      min-width 100%
    header.headerBar
      margin-top 24px
      height 45px
      width 100%
      display flex
      .logo
        height 45px
      .sign
        height 45px
        background-color #fff
        display flex
        align-items center
        justify-content center
        border-radius 45px
        button
          color #46D4DD
          min-width 88px
          height 100%
          font-weight bold
          flex 1
          &:hover
            background-color rgba(0,0,0,0.4)
            color white
          &.JoinUs
            border-radius 45px 0 0 45px
          &.LogIn
            border-radius 0 45px 45px 0
    .v-responsive
      color white
      background-color rgba(#46D4DD, 0.65)
      z-index 1
      .flex
        display flex
        align-items start
        justify-content center
        flex-direction column
        position relative
        .v-card
          position absolute
          right 0
          top 60px
          width 400px
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
    .v-system-bar
      position absolute
      top 0
      width 100%
      z-index 11
      text-align center
      display flex
      align-items center
      justify-content center
      &.v-system-bar--status.theme--dark
        background-color #46D4DD
        color #fff
        span
          margin 0 8px
  .Partnership
    height 88px
    img
      margin 0 16px
</style>
