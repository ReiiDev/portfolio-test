import Vue from 'vue'
import CursorFx from '@luxdamore/vue-cursor-fx';
import App from './App.vue'
import vuetify from './plugins/vuetify'
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';
import VueKinesis from 'vue-kinesis'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

Vue.use(
  CursorFx,
  VueKinesis,
);

new Vue({
  vuetify,
  render: h => h(App),
  mounted() {
    AOS.init()
  },
}).$mount('#app')
