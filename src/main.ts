import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import fontawesome from '@/plugins/fontawesome'
import vuetify from '@/plugins/vuetify'
import './assets/sass/index.scss'
import 'materialize-css/dist/js/materialize.min'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const app = createApp(App)
app.use(router)
app.use(fontawesome)
app.use(vuetify)
app.mount('#app')
