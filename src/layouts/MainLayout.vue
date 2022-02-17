<template>
  <q-layout view="lHh lpR lfr" class="main-layout">
    <q-header elevated class="bg-white">
      <q-toolbar>
        <q-toolbar-title  class="text-dark main-layout__title">
          Заголовок
        </q-toolbar-title>
        <div></div>
      </q-toolbar>
      <q-list class="q-header-info">
        <q-item
          v-ripple
          tag="a"
          target="_blank"
          href="link"
          class="q-header-info__manager"
        >
          <q-icon size="20px" name='svguse:icons/allIcons.svg#manager'/>
          <q-item-label>Личный менеджер</q-item-label>
        </q-item>
        <q-item
          tag="a"
          target="_blank"
          href="link"
          class="q-header-info__balance"
        >
          <q-icon size="24px" name='svguse:icons/allIcons.svg#balance'/>
          <q-item-label>4544454.56 ₽ </q-item-label>
        </q-item>
        <q-item>
          <q-btn-dropdown
            color="dark"
            flat
            icon="svguse:icons/allIcons.svg#user"
            label="webmaster@gmail.com"
            dropdown-icon="svguse:icons/allIcons.svg#arow-dropdawn"
            class="q-header-info__dropdawn"
            content-class="q-header-info__dropdawn__inside"
            size="14px"
          >
            <q-list>
              <q-item
                clickable
                tag="a"
                target="_blank"
                href="link"
              >
                <q-icon size="16px" name='svguse:icons/allIcons.svg#setting'/>
                <q-item-label>Редактировать профиль</q-item-label>
              </q-item>

              <q-item
                clickable
                tag="a"
                target="_blank"
                href="link"
              >
                <q-icon size="16px" name='svguse:icons/allIcons.svg#exit'/>
                <q-item-label>Выйти</q-item-label>
              </q-item>

              <q-item 
                class="q-header-info-item-languige">
                <q-expansion-item
                  dense
                  dense-toggle
                  expand-separator
                  icon="svguse:icons/lang.svg#ru"
                  label="Русский"
                  class="q-header-info-item__languige"
                >
                  <q-card>
                    <q-list>
                      <q-item
                        clickable
                        tag="a"
                        target="_blank"
                        href=""
                      >
                        <q-icon size="18px" name='svguse:icons/lang.svg#en'/>
                        <q-item-label>English</q-item-label>
                      </q-item>

                      <q-item
                        clickable
                        tag="a"
                        target="_blank"
                        href=""
                      >
                        <q-icon size="18px" name='svguse:icons/lang.svg#id'/>
                        <q-item-label>Indonesia</q-item-label>
                      </q-item>
                    </q-list>
                  </q-card>
                </q-expansion-item>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-item>
      </q-list>
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
        <q-item tag="a" target="_blank" href="link">
          <q-icon left size="24px" name='svguse:icons/social.svg#telegram'/>
        </q-item>
        <q-item tag="a" target="_blank" href="link">
          <q-icon left size="24px" name='svguse:icons/social.svg#vk'/>
        </q-item>
        <q-item tag="a" target="_blank" href="link">
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
    link: '/home'
  },
  {
    title: 'Статистика',
    icon: 'statistic',
    link: '/statistics'
  },
  {
    title: 'Кампании',
    icon: 'company',
    link: '/compaings'
  },
  {
    title: 'Объявления',
    icon: 'ads',
    link: ''
  },
  {
    title: 'Баланс',
    icon: 'balance',
    link: ''
  },
  {
    title: 'FAQ',
    icon: 'faq',
    link: ''
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
