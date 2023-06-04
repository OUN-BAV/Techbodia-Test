import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './assets/tailwind.css'
import 'vuetify/dist/vuetify.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import select2Component from 'vue3-select2-component'


const app = createApp(App)
const vuetify = createVuetify()
app.component('select2Component',select2Component)
app.use(vuetify)
app.mount('#app')

