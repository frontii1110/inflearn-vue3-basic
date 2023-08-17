//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import DayJs from 'dayjs';
import DateTimePicker from 'vue-drumroll-datetime-picker';
//import 'vue-drumroll-datetime-picker/vue-drumroll-datetime-picker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-vue/dist/bootstrap-vue.css';

// app.use(BootstrapVue);
// app.use(IconsPlugin);

const app = createApp(App);

app.component('DayJs', DayJs);
app.component('DateTimePicker', DateTimePicker);

createApp(App).mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
