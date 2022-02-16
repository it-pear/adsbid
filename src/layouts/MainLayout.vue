<template>
  <q-layout view="lHh lpR lfr" class="main-layout">
    <q-header elevated class="bg-white">
      <q-toolbar>
        <q-toolbar-title  class="text-dark main-layout__title">
          Заголовок
        </q-toolbar-title>
        <div></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      elevated
      class="q-drawer-main"
    >
      <q-list class="q-drawer-main-links">
        <q-item-label header>
          <img alt="logo" src="~assets/logo.svg">
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <q-list class="q-drawer-main-social">
        <q-item clickable tag="a" target="_blank" href="link">
          <q-icon left size="24px" name='svguse:icons/social.svg#telegram'/>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="link">
          <q-icon left size="24px" name='svguse:icons/social.svg#vk'/>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="link">
          <q-icon left size="24px" name='svguse:icons/social.svg#mail'/>
        </q-item>
      </q-list>
    </q-drawer>
 
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Главная',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Статистика',
    icon: 'statistic',
    link: '/statistics'
  },
  {
    title: 'Кампании',
    icon: 'company',
    link: '/home'
  },
  {
    title: 'Объявления',
    icon: 'ads',
    link: '/home'
  },
  {
    title: 'Баланс',
    icon: 'balance',
    link: '/home'
  },
  {
    title: 'FAQ',
    icon: 'faq',
    link: '/home'
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
