<template>
  <q-layout view="lHh lpR lfr">
    <q-header elevated class="bg-white">
      <q-toolbar>
        <q-toolbar-title  class="text-dark">
          Заголовок
        </q-toolbar-title>
        <div></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      elevated
    >
      <q-list>
        <q-item-label header>
          <img alt="logo" src="~assets/logo.svg">
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-link to="/components">Страница компонентов</router-link>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    icon: 'school',
    link: '#'
  },
  {
    title: 'Github',
    icon: 'code',
    link: '/'
  },
  {
    title: 'Discord Chat Channel',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    // const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      // leftDrawerOpen,
      // toggleLeftDrawer () {
      //   leftDrawerOpen.value = !leftDrawerOpen.value
      // }
    }
  }
})
</script>
