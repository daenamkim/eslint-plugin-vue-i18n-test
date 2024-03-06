import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

import en from './assets/language/en.json'
import ja from './assets/language/ja.json'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en,
    ja,
  }
})

const app = createApp(App)
app.use(i18n).mount('#app')
