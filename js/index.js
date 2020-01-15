import 'mapbox-gl/dist/mapbox-gl.css';
import '@mdi/font/css/materialdesignicons.css';

import Vue from 'vue';
import Vuetify, {
  VApp,
  VAutocomplete,
  VBtn,
  VCard,
  VCardSubtitle,
  VCardTitle,
  VContent,
  VDivider,
  VList,
  VListItem,
  VListItemIcon,
  VListItemContent,
  VListItemTitle,
  VListItemSubtitle,
  VNavigationDrawer,
  VMenu,
  VSkeletonLoader,
  VIcon,
  VTooltip
} from 'vuetify/lib';

Vue.use(Vuetify, {
  components: {
    VApp,
    VAutocomplete,
    VBtn,
    VCard,
    VCardSubtitle,
    VCardTitle,
    VContent,
    VDivider,
    VList,
    VListItem,
    VListItemIcon,
    VListItemContent,
    VListItemTitle,
    VListItemSubtitle,
    VNavigationDrawer,
    VMenu,
    VSkeletonLoader,
    VIcon,
    VTooltip
  }
});

import App from './app';

const vuetify = new Vuetify({});

new Vue({
  vuetify,
  render: createEle => createEle(App),
}).$mount('#app');
