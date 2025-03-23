/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';

import { createApp } from 'vue';

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({});

/* Importing Global MenuBar */
import MenuBar from './pages/MenuBar.vue';
app.component('menu-bar', MenuBar);

/* Importing Global Components dynamically */
const globalComponents = import.meta.glob('./components/globals/*.vue', { eager: true });

const camelToKebab = str => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

Object.entries(globalComponents).forEach(([key, value]) => {
    // "./components/FruitComponent.vue" will become "fruit-component"
    const componentNameInKebabForm = camelToKebab(key.split('/').pop().replace(/\.\w+$/, ''))
    /* Registering Global Components dynamically */
    app.component(componentNameInKebabForm, value.default)
})

import router from './routes';      // exported default
app.use(router);

/* Global Helper-Functions */
import { capitalizeEachWord } from './helpers';        // exported modules
app.config.globalProperties.$helpers = {
    capitalizeEachWord
}

/* Store */
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.mount('#app');
